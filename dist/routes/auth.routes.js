"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controllers");
var _validateToken = require("../middlewares/validateToken");
var router = (0, _express.Router)();
router.post("/login", _auth.handleLogin);
router.post("/register", _auth.handleRegister);
router.post("/logout", _auth.logout);
router.get("/profile", _validateToken.authRequire, _auth.profile);
var _default = router;
exports["default"] = _default;