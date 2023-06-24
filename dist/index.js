"use strict";

var _app = _interopRequireDefault(require("./app"));
var _connection = require("./db/connection");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = _app["default"].get("port");
_app["default"].listen(port);
console.log("\nServer on port ".concat(port));
(0, _connection.getConnection)();