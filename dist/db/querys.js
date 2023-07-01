"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  //auth querys
  login: "EXEC SP_login @userEmail, @userPassword",
  signUp: "EXEC SP_CreateUser @Username, @Email,  @Password",
  userProfile: "SELECT * FROM users WHERE idUser = @idUser",
  //task querys
  getAllTasksById: "EXEC SP_GetAllTasksById @id",
  getOneTaskById: "SELECT * FROM tasks WHERE idTask=@idTask",
  addTask: "SP_Addtask @idUser, @taskName, @taskDescription, @taskUrlImage",
  editTask: "SP_EditTask  @idTask, @taskName, @taskDescription, @taskStatus, @taskUrlImage",
  deleteTask: "SP_DeleteTask @idTask",
  //check if exist the email
  checkQuery: "SELECT userEmail FROM users WHERE userEmail = @userEmail",
  checkPassword: "SELECT * FROM users WHERE userEmail = @userEmail"
};
exports.querys = querys;