"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var sapper = _interopRequireWildcard(require("../__sapper__/client.js"));

sapper.start({
  target: document.querySelector('#sapper')
});