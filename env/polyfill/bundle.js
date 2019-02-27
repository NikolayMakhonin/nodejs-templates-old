!function(){"use strict";!function(){
if("undefined"!=typeof navigator){
var match,ieVersion=(match=navigator.userAgent.match(/msie\s*(\d+)/))?parseInt(match[1],10):null
;ieVersion&&ieVersion<=10&&(Uint8Array=void 0)}}()
;var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
;function createCommonjsModule(fn,module){
return fn(module={exports:{}
},module.exports),module.exports}
var _typeof_1=createCommonjsModule(function(module){
function _typeof2(obj){
return(_typeof2="function"==typeof Symbol&&"symbol"===_typeof_1(Symbol.iterator)?function(obj){
return _typeof_1(obj)}:function(obj){
return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof_1(obj)
})(obj)}function _typeof(obj){
return"function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?module.exports=_typeof=function(obj){
return _typeof2(obj)
}:module.exports=_typeof=function(obj){
return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj)
},_typeof(obj)}module.exports=_typeof})
;!function(t){var r=function(){try{
return!!Symbol.iterator}catch(e){return!1}
}(),n=function(t){var e={next:function(){
var e=t.shift();return{done:void 0===e,value:e}}}
;return r&&(e[Symbol.iterator]=function(){return e
}),e},i=function(e){
return encodeURIComponent(e).replace(/%20/g,"+")
},o=function(e){
return decodeURIComponent(String(e).replace(/\+/g," "))
}
;"URLSearchParams"in t&&"a=1"===new URLSearchParams("?a=1").toString()||function(){
var a=function a(e){
Object.defineProperty(this,"_entries",{
writable:!0,value:{}});var t=_typeof_1(e)
;if("undefined"===t);else if("string"===t)""!==e&&this._fromString(e);else if(e instanceof a){
var r=this;e.forEach(function(e,t){r.append(t,e)})
}else{
if(null===e||"object"!==t)throw new TypeError("Unsupported input's type for URLSearchParams")
;if("[object Array]"===Object.prototype.toString.call(e))for(var n=0;n<e.length;n++){
var i=e[n]
;if("[object Array]"!==Object.prototype.toString.call(i)&&2===i.length)throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input")
;this.append(i[0],i[1])
}else for(var o in e)e.hasOwnProperty(o)&&this.append(o,e[o])
}},e=a.prototype;e.append=function(e,t){
e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]
},e.delete=function(e){delete this._entries[e]
},e.get=function(e){
return e in this._entries?this._entries[e][0]:null
},e.getAll=function(e){
return e in this._entries?this._entries[e].slice(0):[]
},e.has=function(e){return e in this._entries
},e.set=function(e,t){this._entries[e]=[String(t)]
},e.forEach=function(e,t){var r
;for(var n in this._entries)if(this._entries.hasOwnProperty(n)){
r=this._entries[n]
;for(var i=0;i<r.length;i++)e.call(t,r[i],n,this)}
},e.keys=function(){var r=[]
;return this.forEach(function(e,t){r.push(t)
}),n(r)},e.values=function(){var t=[]
;return this.forEach(function(e){t.push(e)}),n(t)
},e.entries=function(){var r=[]
;return this.forEach(function(e,t){r.push([t,e])
}),n(r)
},r&&(e[Symbol.iterator]=e.entries),e.toString=function(){
var r=[];return this.forEach(function(e,t){
r.push(i(t)+"="+i(e))}),r.join("&")
},t.URLSearchParams=a}()
;var s=URLSearchParams.prototype
;"function"!=typeof s.sort&&(s.sort=function(){
var r=this,n=[];this.forEach(function(e,t){
n.push([t,e]),r._entries||r.delete(t)
}),n.sort(function(e,t){
return e[0]<t[0]?-1:e[0]>t[0]?1:0
}),r._entries&&(r._entries={})
;for(var e=0;e<n.length;e++)this.append(n[e][0],n[e][1])
}),"function"!=typeof s._fromString&&Object.defineProperty(s,"_fromString",{
enumerable:!1,configurable:!1,writable:!1,
value:function(e){
if(this._entries)this._entries={};else{var r=[]
;this.forEach(function(e,t){r.push(t)})
;for(var t=0;t<r.length;t++)this.delete(r[t])}
var i,n=(e=e.replace(/^\?/,"")).split("&")
;for(t=0;t<n.length;t++)i=n[t].split("="),
this.append(o(i[0]),i.length>1?o(i[1]):"")}})
}(void 0!==commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:"undefined"!=typeof self?self:commonjsGlobal),
function(h){if(function(){try{
var e=new URL("b","http://a")
;return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams
}catch(e){return!1}}()||function(){
var t=h.URL,e=function e(_e,t){
"string"!=typeof _e&&(_e=String(_e))
;var n,r=document
;if(t&&(void 0===h.location||t!==h.location.href)){
(n=(r=document.implementation.createHTMLDocument("")).createElement("base")).href=t,
r.head.appendChild(n);try{
if(0!==n.href.indexOf(t))throw new Error(n.href)
}catch(e){
throw new Error("URL unable to set base "+t+" due to "+e)
}}var i=r.createElement("a")
;if(i.href=_e,n&&(r.body.appendChild(i),i.href=i.href),
":"===i.protocol||!/:/.test(i.href))throw new TypeError("Invalid URL")
;Object.defineProperty(this,"_anchorElement",{
value:i})
;var o=new URLSearchParams(this.search),a=!0,s=!0,c=this
;["append","delete","set"].forEach(function(e){
var t=o[e];o[e]=function(){
t.apply(o,arguments),a&&(s=!1,c.search=o.toString(),s=!0)
}}),Object.defineProperty(this,"searchParams",{
value:o,enumerable:!0});var f=void 0
;Object.defineProperty(this,"_updateSearchParams",{
enumerable:!1,configurable:!1,writable:!1,
value:function(){
this.search!==f&&(f=this.search,s&&(a=!1,this.searchParams._fromString(this.search),
a=!0))}})},r=e.prototype
;["hash","host","hostname","port","protocol"].forEach(function(e){
var t;t=e,Object.defineProperty(r,t,{
get:function(){return this._anchorElement[t]},
set:function(e){this._anchorElement[t]=e},
enumerable:!0})
}),Object.defineProperty(r,"search",{
get:function(){return this._anchorElement.search},
set:function(e){
this._anchorElement.search=e,this._updateSearchParams()
},enumerable:!0}),Object.defineProperties(r,{
toString:{get:function(){var e=this
;return function(){return e.href}}},href:{
get:function(){
return this._anchorElement.href.replace(/\?$/,"")
},set:function(e){
this._anchorElement.href=e,this._updateSearchParams()
},enumerable:!0},pathname:{get:function(){
return this._anchorElement.pathname.replace(/(^\/?)/,"/")
},set:function(e){this._anchorElement.pathname=e},
enumerable:!0},origin:{get:function(){var e={
"http:":80,"https:":443,"ftp:":21
}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port
;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")
},enumerable:!0},password:{get:function(){return""
},set:function(e){},enumerable:!0},username:{
get:function(){return""},set:function(e){},
enumerable:!0}}),e.createObjectURL=function(e){
return t.createObjectURL.apply(t,arguments)
},e.revokeObjectURL=function(e){
return t.revokeObjectURL.apply(t,arguments)
},h.URL=e
}(),void 0!==h.location&&!("origin"in h.location)){
var r=function(){
return h.location.protocol+"//"+h.location.hostname+(h.location.port?":"+h.location.port:"")
};try{Object.defineProperty(h.location,"origin",{
get:r,enumerable:!0})}catch(e){
setInterval(function(){h.location.origin=r()},100)
}}
}(void 0!==commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:"undefined"!=typeof self?self:commonjsGlobal)
;createCommonjsModule(function(module,exports){
!function(){function e(e){var n=this.constructor
;return this.then(function(t){
return n.resolve(e()).then(function(){return t})
},function(t){
return n.resolve(e()).then(function(){
return n.reject(t)})})}function n(){}
function t(e){
if(!(this instanceof t))throw new TypeError("Promises must be constructed via new")
;if("function"!=typeof e)throw new TypeError("not a function")
;this._state=0,this._handled=!1,
this._value=void 0,this._deferreds=[],u(e,this)}
function o(e,n){for(;3===e._state;)e=e._value
;0!==e._state?(e._handled=!0,t._immediateFn(function(){
var t=1===e._state?n.onFulfilled:n.onRejected
;if(null!==t){var o;try{o=t(e._value)}catch(f){
return void i(n.promise,f)}r(n.promise,o)
}else(1===e._state?r:i)(n.promise,e._value)
})):e._deferreds.push(n)}function r(e,n){try{
if(n===e)throw new TypeError("A promise cannot be resolved with itself.")
;if(n&&("object"==_typeof_1(n)||"function"==typeof n)){
var o=n.then
;if(n instanceof t)return e._state=3,e._value=n,void f(e)
;if("function"==typeof o)return void u(function(e,n){
return function(){e.apply(n,arguments)}}(o,n),e)}
e._state=1,e._value=n,f(e)}catch(r){i(e,r)}}
function i(e,n){e._state=2,e._value=n,f(e)}
function f(e){
2===e._state&&0===e._deferreds.length&&t._immediateFn(function(){
e._handled||t._unhandledRejectionFn(e._value)})
;for(var n=0,r=e._deferreds.length;r>n;n++)o(e,e._deferreds[n])
;e._deferreds=null}function u(e,n){var t=!1;try{
e(function(e){t||(t=!0,r(n,e))},function(e){
t||(t=!0,i(n,e))})}catch(o){if(t)return
;t=!0,i(n,o)}}var c=setTimeout
;t.prototype.catch=function(e){
return this.then(null,e)
},t.prototype.then=function(e,t){
var r=new this.constructor(n)
;return o(this,new function(e,n,t){
this.onFulfilled="function"==typeof e?e:null,
this.onRejected="function"==typeof n?n:null,
this.promise=t}(e,t,r)),r
},t.prototype.finally=e,t.all=function(e){
return new t(function(n,t){function o(e,f){try{
if(f&&("object"==_typeof_1(f)||"function"==typeof f)){
var u=f.then
;if("function"==typeof u)return void u.call(f,function(n){
o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}
if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array")
;var r=Array.prototype.slice.call(e)
;if(0===r.length)return n([])
;for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})
},t.resolve=function(e){
return e&&"object"==_typeof_1(e)&&e.constructor===t?e:new t(function(n){
n(e)})},t.reject=function(e){
return new t(function(n,t){t(e)})
},t.race=function(e){return new t(function(n,t){
for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})
},t._immediateFn="function"==typeof setImmediate&&function(e){
setImmediate(e)}||function(e){c(e,0)
},t._unhandledRejectionFn=function(e){
void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)
};var l=function(){
if("undefined"!=typeof self)return self
;if("undefined"!=typeof window)return window
;if(void 0!==commonjsGlobal)return commonjsGlobal
;throw Error("unable to locate global object")}()
;"Promise"in l?l.Promise.prototype.finally||(l.Promise.prototype.finally=e):l.Promise=t
}()});!function(exports){if(!exports.fetch){
var support={
searchParams:"URLSearchParams"in self,
iterable:"Symbol"in self&&"iterator"in Symbol,
blob:"FileReader"in self&&"Blob"in self&&function(){
try{return new Blob,!0}catch(e){return!1}}(),
formData:"FormData"in self,
arrayBuffer:"ArrayBuffer"in self}
;if(support.arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(obj){
return obj&&viewClasses.indexOf(Object.prototype.toString.call(obj))>-1
};Headers.prototype.append=function(name,value){
name=normalizeName(name),value=normalizeValue(value)
;var oldValue=this.map[name]
;this.map[name]=oldValue?oldValue+", "+value:value
},Headers.prototype.delete=function(name){
delete this.map[normalizeName(name)]
},Headers.prototype.get=function(name){
return name=normalizeName(name),this.has(name)?this.map[name]:null
},Headers.prototype.has=function(name){
return this.map.hasOwnProperty(normalizeName(name))
},Headers.prototype.set=function(name,value){
this.map[normalizeName(name)]=normalizeValue(value)
},Headers.prototype.forEach=function(callback,thisArg){
for(var name in this.map)this.map.hasOwnProperty(name)&&callback.call(thisArg,this.map[name],name,this)
},Headers.prototype.keys=function(){var items=[]
;return this.forEach(function(value,name){
items.push(name)}),iteratorFor(items)
},Headers.prototype.values=function(){var items=[]
;return this.forEach(function(value){
items.push(value)}),iteratorFor(items)
},Headers.prototype.entries=function(){
var items=[]
;return this.forEach(function(value,name){
items.push([name,value])}),iteratorFor(items)
},support.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries)
;var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"]
;Request.prototype.clone=function(){
return new Request(this,{body:this._bodyInit})
},Body.call(Request.prototype),Body.call(Response.prototype),
Response.prototype.clone=function(){
return new Response(this._bodyInit,{
status:this.status,statusText:this.statusText,
headers:new Headers(this.headers),url:this.url})
},Response.error=function(){
var response=new Response(null,{status:0,
statusText:""})
;return response.type="error",response}
;var redirectStatuses=[301,302,303,307,308]
;Response.redirect=function(url,status){
if(-1===redirectStatuses.indexOf(status))throw new RangeError("Invalid status code")
;return new Response(null,{status:status,headers:{
location:url}})
},exports.DOMException=self.DOMException;try{
new exports.DOMException}catch(err){
exports.DOMException=function(message,name){
this.message=message,this.name=name
;var error=Error(message);this.stack=error.stack
},exports.DOMException.prototype=Object.create(Error.prototype),
exports.DOMException.prototype.constructor=exports.DOMException
}
return fetch.polyfill=!0,self.fetch||(self.fetch=fetch,self.Headers=Headers,self.Request=Request,
self.Response=Response),
exports.Headers=Headers,exports.Request=Request,exports.Response=Response,
exports.fetch=fetch,exports}
function normalizeName(name){
if("string"!=typeof name&&(name=String(name)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name))throw new TypeError("Invalid character in header field name")
;return name.toLowerCase()}
function normalizeValue(value){
return"string"!=typeof value&&(value=String(value)),
value}function iteratorFor(items){var iterator={
next:function(){var value=items.shift();return{
done:void 0===value,value:value}}}
;return support.iterable&&(iterator[Symbol.iterator]=function(){
return iterator}),iterator}
function Headers(headers){
this.map={},headers instanceof Headers?headers.forEach(function(value,name){
this.append(name,value)
},this):Array.isArray(headers)?headers.forEach(function(header){
this.append(header[0],header[1])
},this):headers&&Object.getOwnPropertyNames(headers).forEach(function(name){
this.append(name,headers[name])},this)}
function consumed(body){
if(body.bodyUsed)return Promise.reject(new TypeError("Already read"))
;body.bodyUsed=!0}
function fileReaderReady(reader){
return new Promise(function(resolve,reject){
reader.onload=function(){resolve(reader.result)
},reader.onerror=function(){reject(reader.error)}
})}function readBlobAsArrayBuffer(blob){
var reader=new FileReader,promise=fileReaderReady(reader)
;return reader.readAsArrayBuffer(blob),promise}
function bufferClone(buf){
if(buf.slice)return buf.slice(0)
;var view=new Uint8Array(buf.byteLength)
;return view.set(new Uint8Array(buf)),view.buffer}
function Body(){
return this.bodyUsed=!1,this._initBody=function(body){
var obj
;this._bodyInit=body,body?"string"==typeof body?this._bodyText=body:support.blob&&Blob.prototype.isPrototypeOf(body)?this._bodyBlob=body:support.formData&&FormData.prototype.isPrototypeOf(body)?this._bodyFormData=body:support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)?this._bodyText=body.toString():support.arrayBuffer&&support.blob&&((obj=body)&&DataView.prototype.isPrototypeOf(obj))?(this._bodyArrayBuffer=bufferClone(body.buffer),
this._bodyInit=new Blob([this._bodyArrayBuffer])):support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))?this._bodyArrayBuffer=bufferClone(body):this._bodyText=body=Object.prototype.toString.call(body):this._bodyText="",
this.headers.get("content-type")||("string"==typeof body?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))
},support.blob&&(this.blob=function(){
var rejected=consumed(this)
;if(rejected)return rejected
;if(this._bodyBlob)return Promise.resolve(this._bodyBlob)
;if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]))
;if(this._bodyFormData)throw new Error("could not read FormData body as blob")
;return Promise.resolve(new Blob([this._bodyText]))
},this.arrayBuffer=function(){
return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)
}),this.text=function(){
var blob,reader,promise,rejected=consumed(this)
;if(rejected)return rejected
;if(this._bodyBlob)return blob=this._bodyBlob,reader=new FileReader,
promise=fileReaderReady(reader),
reader.readAsText(blob),promise
;if(this._bodyArrayBuffer)return Promise.resolve(function(buf){
for(var view=new Uint8Array(buf),chars=new Array(view.length),i=0;i<view.length;i++)chars[i]=String.fromCharCode(view[i])
;return chars.join("")}(this._bodyArrayBuffer))
;if(this._bodyFormData)throw new Error("could not read FormData body as text")
;return Promise.resolve(this._bodyText)
},support.formData&&(this.formData=function(){
return this.text().then(decode)
}),this.json=function(){
return this.text().then(JSON.parse)},this}
function Request(input,options){
var method,upcased,body=(options=options||{}).body
;if(input instanceof Request){
if(input.bodyUsed)throw new TypeError("Already read")
;this.url=input.url,this.credentials=input.credentials,
options.headers||(this.headers=new Headers(input.headers)),
this.method=input.method,
this.mode=input.mode,this.signal=input.signal,body||null==input._bodyInit||(body=input._bodyInit,
input.bodyUsed=!0)}else this.url=String(input)
;if(this.credentials=options.credentials||this.credentials||"same-origin",
!options.headers&&this.headers||(this.headers=new Headers(options.headers)),
this.method=(method=options.method||this.method||"GET",
upcased=method.toUpperCase(),
methods.indexOf(upcased)>-1?upcased:method),this.mode=options.mode||this.mode||null,
this.signal=options.signal||this.signal,
this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&body)throw new TypeError("Body not allowed for GET or HEAD requests")
;this._initBody(body)}function decode(body){
var form=new FormData
;return body.trim().split("&").forEach(function(bytes){
if(bytes){
var split=bytes.split("="),name=split.shift().replace(/\+/g," "),value=split.join("=").replace(/\+/g," ")
;form.append(decodeURIComponent(name),decodeURIComponent(value))
}}),form}function Response(bodyInit,options){
options||(options={}),this.type="default",
this.status=void 0===options.status?200:options.status,
this.ok=this.status>=200&&this.status<300,
this.statusText="statusText"in options?options.statusText:"OK",
this.headers=new Headers(options.headers),
this.url=options.url||"",this._initBody(bodyInit)}
function fetch(input,init){
return new Promise(function(resolve,reject){
var request=new Request(input,init)
;if(request.signal&&request.signal.aborted)return reject(new exports.DOMException("Aborted","AbortError"))
;var xhr=new XMLHttpRequest;function abortXhr(){
xhr.abort()}xhr.onload=function(){
var rawHeaders,headers,options={status:xhr.status,
statusText:xhr.statusText,
headers:(rawHeaders=xhr.getAllResponseHeaders()||"",headers=new Headers,
rawHeaders.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(line){
var parts=line.split(":"),key=parts.shift().trim()
;if(key){var value=parts.join(":").trim()
;headers.append(key,value)}}),headers)}
;options.url="responseURL"in xhr?xhr.responseURL:options.headers.get("X-Request-URL")
;var body="response"in xhr?xhr.response:xhr.responseText
;resolve(new Response(body,options))
},xhr.onerror=function(){
reject(new TypeError("Network request failed"))
},xhr.ontimeout=function(){
reject(new TypeError("Network request failed"))
},xhr.onabort=function(){
reject(new exports.DOMException("Aborted","AbortError"))
},xhr.open(request.method,request.url,!0),
"include"===request.credentials?xhr.withCredentials=!0:"omit"===request.credentials&&(xhr.withCredentials=!1),
"responseType"in xhr&&support.blob&&(xhr.responseType="blob"),
request.headers.forEach(function(value,name){
xhr.setRequestHeader(name,value)
}),request.signal&&(request.signal.addEventListener("abort",abortXhr),
xhr.onreadystatechange=function(){
4===xhr.readyState&&request.signal.removeEventListener("abort",abortXhr)
}),xhr.send(void 0===request._bodyInit?null:request._bodyInit)
})}}(window)}();
