"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sirv = _interopRequireDefault(require("sirv"));

var _polka = _interopRequireDefault(require("polka"));

var _compression = _interopRequireDefault(require("compression"));

var sapper = _interopRequireWildcard(require("../__sapper__/server.js"));

const {
  PORT,
  NODE_ENV
} = process.env;
const dev = NODE_ENV === 'development';
(0, _polka.default)() // You can also use Express
.use((0, _compression.default)({
  threshold: 0
}), (0, _sirv.default)('static', {
  dev
}), sapper.middleware()).listen(PORT, err => {
  if (err) console.log('error', err);
});