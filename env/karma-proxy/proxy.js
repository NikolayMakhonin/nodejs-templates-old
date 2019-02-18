const httpProxy = require('http-proxy')
const https = require('https')
const log = require('karma/lib/logger').create('middleware:proxy')

function proxyNull(request, response, next) {
	return next()
}
proxyNull.upgrade = () => {}

function getUserPass(urlParsed) {
	if (!urlParsed.username) {
		return null
	}

	let result = urlParsed.username
	if (urlParsed.password) {
		result += `:${urlParsed.password}`
	}

	return result
}

function getRootUrl(urlParsed) {
	let result = `${urlParsed.protocol}//`

	const userPass = getUserPass(urlParsed)
	if (userPass) {
		result += `${userPass}@`
	}

	result += `${urlParsed.host}`

	return result
}

function createProxyHandler(config) {
	log.info(config)
	const proxyRootParamName = (config && config.urlParams
		? config.urlParams.proxyRoot
		: null) || 'proxyRoot'

	function parseRequest(request) {
		const urlParsed = new URL(request.url, 'http://user:pass@anyhost:1234/')
		const refererParsed = request.headers.referer
			? new URL(request.headers.referer)
			: null

		let proxyRoot = urlParsed.searchParams.get(proxyRootParamName)
		let mustRedirectTo

		if (!proxyRoot && request.headers.referer) {
			proxyRoot = refererParsed.searchParams.get(proxyRootParamName)
			mustRedirectTo = true
		}

		if (!proxyRoot) {
			log.info(`Proxy root (${proxyRootParamName}) is empty for url: ${request.url}`)
			return null
		}

		log.debug(`proxyRoot: ${proxyRoot}`)

		if (proxyRoot) {
			proxyRoot = new URL(proxyRoot)
		}

		if (urlParsed.host === proxyRoot.host) {
			log.info(`Proxy not needed for url: ${request.url}`)
			return null
		}

		if (mustRedirectTo) {
			urlParsed.searchParams.append(proxyRootParamName, proxyRoot.href)
			mustRedirectTo = urlParsed.pathname + urlParsed.search
		}

		urlParsed.searchParams.delete(proxyRootParamName)

		request.url = urlParsed.pathname + urlParsed.search

		let referer
		if (refererParsed && refererParsed.searchParams.has(proxyRootParamName)) {
			refererParsed.searchParams.delete(proxyRootParamName)
			refererParsed.host = proxyRoot.host
			refererParsed.port = proxyRoot.port
			refererParsed.protocol = proxyRoot.protocol
			referer = refererParsed.href
		}

		return {
			url: urlParsed,
			proxyRoot,
			mustRedirectTo,
			referer,
		}
	}

	function getParsedRequest(request) {
		if (typeof request.parsed === 'undefined') {
			request.parsed = parseRequest(request)
		}

		return request.parsed
	}

	function createProxy(targetRootParsed) {
		log.debug(`createProxy: ${targetRootParsed.href}`)

		const proxyOptions = {
			target      : `${targetRootParsed.protocol}//${targetRootParsed.host}`,
			// ssl         : targetRootParsed.protocol === 'https:',
			secure      : false,
			// ws          : true,
			agent       : https.globalAgent,
			xfwd        : false,
			changeOrigin: false,
			autoRewrite : true,
			auth        : getUserPass(targetRootParsed),
			headers     : {
				host: targetRootParsed.host
			}
		}

		log.debug(`proxyOptions: ${JSON.stringify(proxyOptions, null, 4)}`)

		const proxy = httpProxy.createProxyServer(proxyOptions)

		proxy.on('error', function (err, req, res) {
			if (err.code === 'ECONNRESET' && req.socket.destroyed) {
				log.info(`failed to proxy ${req.url} (browser hung up the socket)`)
			} else {
				log.warn(`failed to proxy ${req.url} (${err.message})`)
			}

			res.destroy()
		})

		proxy.on('proxyReq', function (proxyRequest, request, response, options) {
			log.debug(`${proxyRequest.method} ${proxyRequest.getHeader('Host')}${proxyRequest.path}`)
			proxyRequest.setHeader('Origin', getRootUrl(options.target))
			const requestParsed = getParsedRequest(request)
			if (requestParsed) {
				if (requestParsed.referer) {
					proxyRequest.setHeader('Referer', requestParsed.referer)
				} else {
					proxyRequest.removeHeader('Referer')
				}
				// proxyRequest.setHeader('host', requestParsed.proxyRoot.host)
				// console.log(requestParsed.proxyRoot.host)
				// console.log(proxyRequest)
			}
		})

		proxy.on('proxyRes', function (proxyResponse, request, response, options) {
			log.debug(`${proxyResponse.statusCode} ${proxyResponse.req.method} ${proxyResponse.req.getHeader('Host')}${proxyResponse.req.path}`)
			response.setHeader('Access-Control-Allow-Origin', '*')
			response.setHeader('X-Frame-Options', 'sameorigin')

			const requestParsed = getParsedRequest(request)
			if (proxyResponse.statusCode >= 300 && proxyResponse.statusCode < 400) {
				const parsedLocation = new URL(proxyResponse.headers.location)
				parsedLocation.searchParams.set(proxyRootParamName, `${parsedLocation.protocol}//${parsedLocation.host}`)
				response.setHeader('Location', parsedLocation.pathname + parsedLocation.search)
				console.log(response.getHeader('Location'))
				response.writeHead(proxyResponse.statusCode, response.getHeaders())
			}
		})

		return proxy
	}

	const proxies = {}
	function getProxy(targetRootParsed) {
		let proxy = proxies[targetRootParsed.href]

		if (!proxy) {
			const id = getRootUrl(targetRootParsed)
			proxy = proxies[id]
			if (!proxy) {
				proxy = createProxy(targetRootParsed)
				proxies[id] = proxy
			}
			proxies[targetRootParsed.href] = proxy
		}

		return proxy
	}

	function prepareRequestAndProxy(request, response, next) {
		const requestParsed = getParsedRequest(request)

		if (!requestParsed) {
			if (!next) {
				return null
			}

			next()
			return null
		}

		if (response && requestParsed.mustRedirectTo) {
			response.setHeader('Location', requestParsed.mustRedirectTo)
			response.writeHead(307, response.getHeaders())
			response.end()
			return null
		}

		log.debug(`New request url: ${request.url}`)

		return getProxy(requestParsed.proxyRoot)
	}

	function middleware(request, response, next) {
		log.debug(`middleware, request.url: ${request.url}`)
		const proxy = prepareRequestAndProxy(request, response, next)
		log.debug(`middleware, proxy = ${proxy}`)

		if (!proxy) {
			return
		}

		proxy.web(request, response, null, (proxyRequest, proxyResponse, proxyNext) => {
			// console.log('Proxy callback: ', proxyResponse)
		})
	}

	middleware.upgrade = upgradeProxy
	function upgradeProxy(request, socket, head) {
		log.debug(`upgrade, request.url: ${request.url}`)
		const proxy = prepareRequestAndProxy(request)
		log.debug(`upgradeProxy, proxy = ${proxy}`)

		if (proxy) {
			proxy.ws(request, socket, head)
		}
	}

	log.info('Proxy created')

	return middleware
}

exports.create = function (config) {
	return createProxyHandler(config.proxy)
}
