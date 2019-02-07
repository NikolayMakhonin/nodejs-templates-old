<!-- Markdown Docs: -->
<!-- https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown -->
<!-- https://daringfireball.net/projects/markdown/basics -->
<!-- https://daringfireball.net/projects/markdown/syntax -->

<!-- [![NPM Version][npm-image]][npm-url] -->
<!-- [![NPM Downloads][downloads-image]][downloads-url] -->
<!-- [![Node.js Version][node-version-image]][node-version-url] -->
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

# Description

For quickly create NodeJs command line module using these command (just copy/paste it to the console):

(Create new clear empty repository before)

```cmd
SET TEMPLATE_NAME=cli
SET /p DIR_NAME=Enter project directory name
SET /p YOUR_REPO_URL=Enter your new clear repository url
git clone --origin template --branch %TEMPLATE_NAME% https://github.com/NikolayMakhonin/nodejs-templates.git %DIR_NAME%
cd %DIR_NAME%
git branch -m %TEMPLATE_NAME% master
git tag -a -m "New project from template \"%TEMPLATE_NAME%\"" v0.0.0
git remote set-url --push template no_push
git remote add origin %YOUR_REPO_URL%
git checkout -b develop
git push --all origin
git push --tags origin
 
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
