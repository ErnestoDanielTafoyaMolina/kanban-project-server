export const querys = {
    //auth querys
    //ejecuta un procedimiento almacenado llamado SP_login que toma como parámetros el correo electrónico y la contraseña del usuario
    login:`EXEC SP_login @userEmail, @userPassword`,
    //ejecuta un procedimiento almacenado llamado SP_CreateUser que toma como parámetros el nombre de usuario, correo electrónico y contraseña
    signUp:"EXEC SP_CreateUser @Username, @Email,  @Password",
    //selecciona todos los campos de la tabla "users" donde el ID de usuario coincide con el parámetro idUser
    userProfile:"SELECT * FROM users WHERE idUser = @idUser",
    //task querys
    //consulta ejecuta un procedimiento almacenado llamado SP_GetAllTasksById que toma como parámetro el ID de usuario
    getAllTasksById:"EXEC SP_GetAllTasksById @id",
    // selecciona todos los campos de la tabla "tasks" donde el ID de tarea coincide con el parámetro idTask
    getOneTaskById:"SELECT * FROM tasks WHERE idTask=@idTask",
    // ejecuta un procedimiento almacenado llamado SP_Addtask que toma como parámetros el ID de usuario, el nombre de la tarea, la descripción de la tarea y la URL de la imagen de la tarea. Se utiliza para agregar una nueva tarea a la aplicación.
    addTask:"SP_Addtask @idUser, @taskName, @taskDescription, @taskUrlImage",
    //ejecuta un procedimiento almacenado llamado SP_EditTask que toma como parámetros el ID de la tarea, el nombre de la tarea, la descripción de la tarea, el estado de la tarea y la URL de la imagen de la tarea.
    editTask:"SP_EditTask  @idTask, @taskName, @taskDescription, @taskStatus, @taskUrlImage",
    //procedimiento almacenado llamado SP_DeleteTask que toma como parámetro el ID de la tarea. Se utiliza para eliminar una tarea existente de la aplicación.
    deleteTask:"SP_DeleteTask @idTask",

    //check if exist the email
    // Se utiliza para verificar si el correo electrónico ya existe en la base de datos.
    checkQuery:"SELECT userEmail FROM users WHERE userEmail = @userEmail",
    //Se utiliza para verificar si el correo electrónico existe en la base de datos y obtener la información del usuario para realizar la comparación de contraseñas 
    checkPassword:"SELECT * FROM users WHERE userEmail = @userEmail",
    //se utiliza para checar si existe el usuario por el id
    checkUserById:"SELECT * FROM users WHERE idUser = @idUser"


};