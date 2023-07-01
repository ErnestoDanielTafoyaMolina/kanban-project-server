"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.controllers");
var _validateToken = require("../middlewares/validateToken");
var router = (0, _express.Router)();
router.get("/tasks", _validateToken.authRequire, _tasks.getAllTasksByUserId);
router.get("/task/:id", _validateToken.authRequire, _tasks.getOneTaskById);
router.post("/task/add", _validateToken.authRequire, _tasks.addTask);
router.patch("/task/edit/:id", _validateToken.authRequire, _tasks.editTask);
router["delete"]("/task/delete/:id", _validateToken.authRequire, _tasks.deleteTask);
var _default = router;
exports["default"] = _default;