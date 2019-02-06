<!-- [![NPM Version][npm-image]][npm-url] -->
<!-- [![NPM Downloads][downloads-image]][downloads-url] -->
<!-- [![Node.js Version][node-version-image]][node-version-url] -->
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

# Description

For quickly create NodeJs command line module using these command:

(Create new empty repository before)

```cmd
SET DIR_NAME=<directory name>
SET YOUR_REPO_URL=<your new repository url>

git clone --origin template --branch cli https://github.com/NikolayMakhonin/nodejs-templates.git %DIR_NAME%
cd %DIR_NAME%
git remote set-url --push template no_push
git remote add origin %YOUR_REPO_URL%
git checkout -b develop

git push --all origin

```

Or you can just clone repository without history using this command:
```bash
npx degit NikolayMakhonin/nodejs-templates#cli <app name> && cd <app name> && npm i && npm run test
```

# License

[CC0-1.0](LICENSE)

[npm-image]: https://img.shields.io/npm/v/nodejs-templates.svg
[npm-url]: https://npmjs.org/package/nodejs-templates
[node-version-image]: https://img.shields.io/node/v/nodejs-templates.svg
[node-version-url]: https://nodejs.org/en/download/
[travis-image]: https://travis-ci.org/NikolayMakhonin/nodejs-templates.svg?branch=cli
[travis-url]: https://travis-ci.org/NikolayMakhonin/nodejs-templates?branch=cli
[coveralls-image]: https://coveralls.io/repos/github/NikolayMakhonin/nodejs-templates/badge.svg?branch=cli
[coveralls-url]: https://coveralls.io/github/NikolayMakhonin/nodejs-templates?branch=cli
[downloads-image]: https://img.shields.io/npm/dm/nodejs-templates.svg
[downloads-url]: https://npmjs.org/package/nodejs-templates
[npm-url]: https://npmjs.org/package/nodejs-templates
