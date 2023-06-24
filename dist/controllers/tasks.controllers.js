"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneTaskById = exports.getAllTasksByUserId = exports.editTask = exports.deleteTask = exports.addTask = void 0;
var _db = require("../db");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, idUser, taskName, taskDescription, taskUrlImage, pool, addedTask;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, idUser = _req$body.idUser, taskName = _req$body.taskName, taskDescription = _req$body.taskDescription, taskUrlImage = _req$body.taskUrlImage;
          if (!idUser || !taskName || !taskDescription) {
            res.status(400).json({
              msg: "Se requiere al menos el nombre de la tarea y su descripcion "
            });
          }
          _context.prev = 2;
          _context.next = 5;
          return (0, _db.getConnection)();
        case 5:
          pool = _context.sent;
          _context.next = 8;
          return pool.request().input("idUser", _db.sql.Int, idUser).input("taskName", _db.sql.VarChar, taskName).input("taskDescription", _db.sql.VarChar, taskDescription).input("taskUrlImage", _db.sql.VarChar, taskUrlImage).query(_db.querys.addTask);
        case 8:
          addedTask = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            msg: "tarea agregada",
            addedTask: addedTask.recordset
          }));
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          res.status(500).json({
            "message": _context.t0.message
          });
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  }));
  return function addTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.addTask = addTask;
var deleteTask = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var idTask, pool, deletedTask;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          idTask = req.params.idTask;
          if (!idTask) {
            res.status(400).json({
              msg: "El id de la tarea es requerido"
            });
          }
          ;
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _db.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input("idTask", _db.sql.Int, idTask).query(_db.querys.deleteTask);
        case 9:
          deletedTask = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            msg: "tarea con el id ".concat(idTask, " eliminada con exito")
          }));
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
          res.status(500).json({
            "message": _context2.t0.message
          });
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 13]]);
  }));
  return function deleteTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.deleteTask = deleteTask;
var editTask = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var idTask, _req$body2, idUser, taskName, taskDescription, taskUrlImage, pool, editedTask;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          idTask = req.params.id;
          if (idTask) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: "El id de la tarea es requerido"
          }));
        case 3:
          ;
          _req$body2 = req.body, idUser = _req$body2.idUser, taskName = _req$body2.taskName, taskDescription = _req$body2.taskDescription, taskUrlImage = _req$body2.taskUrlImage;
          if (!idUser || !taskName || !taskDescription) {
            res.status(400).json({
              msg: "Se requiere al menos el nombre de la tarea y su descripcion "
            });
          }
          _context3.prev = 6;
          _context3.next = 9;
          return (0, _db.getConnection)();
        case 9:
          pool = _context3.sent;
          _context3.next = 12;
          return pool.request().input("idTask", _db.sql.Int, idTask).input("idUser", _db.sql.Int, idUser).input("taskName", _db.sql.VarChar, taskName).input("taskDescription", _db.sql.VarChar, taskDescription).input("taskUrlImage", _db.sql.VarChar, taskUrlImage).query(_db.querys.editTask);
        case 12:
          editedTask = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            msg: "tarea editada",
            editedTask: editedTask.recordset
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](6);
          console.log(_context3.t0);
          res.status(500).json({
            "message": _context3.t0.message
          });
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[6, 16]]);
  }));
  return function editTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editTask = editTask;
var getAllTasksByUserId = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userId, pool, tasks;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          userId = req.params.id;
          if (userId) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: "El id del usuario es requerido"
          }));
        case 3:
          ;
          _context4.prev = 4;
          _context4.next = 7;
          return (0, _db.getConnection)();
        case 7:
          pool = _context4.sent;
          _context4.next = 10;
          return pool.request().input("id", _db.sql.Int, userId).query(_db.querys.getAllTasksById);
        case 10:
          tasks = _context4.sent;
          if (tasks.recordsets[0]) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            msg: "no se encontraron tareas con este usuario"
          }));
        case 13:
          return _context4.abrupt("return", res.status(200).json({
            tasks: tasks.recordset
          }));
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](4);
          console.log(_context4.t0);
          res.status(500).json({
            "message": _context4.t0.message
          });
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 16]]);
  }));
  return function getAllTasksByUserId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getAllTasksByUserId = getAllTasksByUserId;
var getOneTaskById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var idTask, pool, task;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          idTask = req.params.id;
          if (idTask) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            msg: "El id de la tarea es requerido"
          }));
        case 3:
          ;
          _context5.prev = 4;
          _context5.next = 7;
          return (0, _db.getConnection)();
        case 7:
          pool = _context5.sent;
          _context5.next = 10;
          return pool.request().input("idTask", _db.sql.Int, idTask).query(_db.querys.getOneTaskById);
        case 10:
          task = _context5.sent;
          if (task.recordset[0]) {
            _context5.next = 13;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            msg: "la tarea no se encontró"
          }));
        case 13:
          return _context5.abrupt("return", res.status(200).json({
            msg: "tarea encontrada!!",
            task: task.recordset
          }));
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](4);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            msg: "Error en el servidor",
            errorMsg: _context5.t0.message
          }));
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[4, 16]]);
  }));
  return function getOneTaskById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getOneTaskById = getOneTaskById;