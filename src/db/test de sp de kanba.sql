USE Kanban

--testing de los stored procedures desde Base de datos

--Este stored procedure agrega una tarea segun el id del usuario
	--EXEC  SP_Addtask 4,'comprar queso','ir al mercado a comprar queso',''

--Este stored procedure crea un usuario con su userName, userEmail y una password (se encripta desde el server)
	--EXEC SP_CreateUSer 'Ernesto Daniel Tafoya Molina','200222@utags.edu.mx','200222'

--Este stored procedure puede eliminar una task por su id PRECAUCION!!!
	--EXEC SP_DeleteTask 4

--Este stored procedure recibe los parametros para editar una tarea segun su id y solo modifica los datos que no vengan vacios.
	--EXEC SP_EditTask 1,'','','doing',''

--Este trae todas las tareas segun el id del usuario, si no tiene tareas, solo dice eso "no hay tareas aqui"
	--EXEC SP_GetAllTasksById 4

--Este stored procedure es basicamente el login, si hay un usuario trae su informacion. Si no, imprime que el usuario o la contrase�a son incorrectos
	--EXEC SP_Login '',''