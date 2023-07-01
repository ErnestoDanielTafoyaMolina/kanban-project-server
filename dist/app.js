"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _morgan = _interopRequireDefault(require("morgan"));
var _config = _interopRequireDefault(require("./config"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//dependences

//import routes

//init app
var app = (0, _express["default"])();
app.set("port", _config["default"].port);
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _helmet["default"])());
app.use((0, _cookieParser["default"])());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());

//use routes

app.use("/api", _tasks["default"]);
app.use("/api", _auth["default"]);
app.use("/*", function (req, res) {
  return res.status(404).send("bad request");
});
var _default = app;
exports["default"] = _default;