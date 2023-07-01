"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRequire = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var authRequire = function authRequire(req, res, next) {
  var token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      msg: "No hay token, acceso denegado"
    });
  }
  _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err, user) {
    if (err) {
      return res.status(403).json({
        msg: "token invalido"
      });
    }
    ;
    req.user = user;
    next();
  });
};
exports.authRequire = authRequire;