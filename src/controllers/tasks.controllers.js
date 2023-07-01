import { getConnection, querys, sql } from "../db";

// se utiliza para agregar una nueva tarea. Extrae el nombre de la tarea, la descripción y la URL de la imagen de la solicitud del cuerpo (req.body).
// También obtiene el ID del usuario actualmente autenticado (req.user.id).
export const addTask = async(req,res)=>{
    const { taskName, taskDescription, taskUrlImage } = req.body;
    const idUser = req.user.id;
    if(!idUser || !taskName || !taskDescription){
        res.status(400).json({
            msg:"Se requiere al menos el nombre de la tarea y su descripcion "
        });
    }
    try {
        //@idUser, @taskName, @taskDescription, @taskUrlImage
        // se intenta establecer una conexión a la base de datos
        const pool = await getConnection();
        const addedTask = await pool
        .request()
        .input("idUser",sql.Int,idUser)
        .input("taskName",sql.VarChar,taskName)
        .input("taskDescription",sql.VarChar,taskDescription)
        .input("taskUrlImage",sql.VarChar,taskUrlImage)
        .query(querys.addTask)
        return res
        .status(200)
        .json({
            msg:"tarea agregada",
            addedTask:addedTask.recordset
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"message":error.message})
    }
};
//se utiliza para eliminar una tarea existente. 
export const deleteTask = async(req,res)=>{
    const { idTask } = req.params;
    if(!idTask){
        res.status(400).json({
            msg:"El id de la tarea es requerido"
        });
    };
    try {
        // // se intenta establecer una conexión a la base de datos
        const pool = await getConnection();
// se ejecuta una consulta para eliminar la tarea
        const deletedTask = await pool
        .request()
        .input("idTask",sql.Int,idTask)
        .query(querys.deleteTask)

        return res
            .status(200)
            .json({
                msg:`tarea con el id ${idTask} eliminada con exito`
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({"message":error.message})
    }
};
//se utiliza para editar una tarea existente
export const editTask= async(req,res)=>{
    const idTask  = req.params.id;
    const idUser = req.user.id;
    if(!idTask){
        return res.status(400).json({
            msg:"El id de la tarea es requerido"
        });
    };
    // se extraen el nombre de la tarea, la descripción y la URL de la imagen del cuerpo de la solicitud
    const { taskName,taskDescription, taskUrlImage } = req.body;
    if(!idUser || !taskName || !taskDescription){
        res.status(400).json({
            msg:"Se requiere al menos el nombre de la tarea y su descripcion "
        });
    }
    try {
        const pool = await getConnection();
        //se ejecuta una consulta para editar la tarea
        const editedTask = await pool
        .request()
        .input("idTask",sql.Int,idTask)
        .input("idUser",sql.Int,idUser)
        .input("taskName",sql.VarChar,taskName)
        .input("taskDescription",sql.VarChar,taskDescription)
        .input("taskUrlImage",sql.VarChar,taskUrlImage)
        .query(querys.editTask)
        return res
        .status(200)
        .json({
            msg:"tarea editada",
            editedTask:editedTask.recordset
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({"message":error.message})
    }
};
//se utiliza para obtener todas las tareas de un usuario específico
export const getAllTasksByUserId = async(req,res)=>{
    //se extrae el ID del usuario actualmente autenticado
    console.log(req.user.id)
    const userId = req.user.id;
    if(!userId){
        return res.status(400).json({
            msg:"El id del usuario es requerido"
        });
    };
    try {
        const pool = await getConnection();
        const tasks = await pool
        .request()
        .input("id",sql.Int,userId)
        .query(querys.getAllTasksById)

        if(!tasks.recordsets[0]){
            return res.status(404).json({
                msg:"no se encontraron tareas con este usuario"
            });
        }
        return res
            .status(200)
            .json({
               tasks: tasks.recordset
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({"message":error.message})
    }
};
//se utiliza para obtener una tarea específica por su ID extrae el ID de la tarea de los parámetros de la solicitud 
export const getOneTaskById = async(req,res)=>{
    const idTask = req.params.id;
    if(!idTask){
        return res.status(400).json({
            msg:"El id de la tarea es requerido"
        });
    };
    try {
        const pool = await getConnection();
        const task = await pool
        .request()
        .input("idTask",sql.Int,idTask)
//se ejecuta la consulta 
        .query(querys.getOneTaskById)

        if (!task.recordset[0]){
            return res.status(404).json({
                msg:"la tarea no se encontró"
            })
        }
        return res.status(200).json({
            msg:"tarea encontrada!!",
            task:task.recordset
        });
//En caso de producirse un error durante el proceso, se captura y se devuelve un estado 500 con un mensaje indicando 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error en el servidor",
            errorMsg:error.message
        })
    }
}