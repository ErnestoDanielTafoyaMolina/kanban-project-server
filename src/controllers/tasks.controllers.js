import { getConnection, querys, sql } from "../db";

export const addTask = async(req,res)=>{
    const { idUser, taskName, taskDescription, taskUrlImage } = req.body;
    if(!idUser || !taskName || !taskDescription){
        res.status(400).json({
            msg:"Se requiere al menos el nombre de la tarea y su descripcion "
        });
    }
    try {
        //@idUser, @taskName, @taskDescription, @taskUrlImage
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
        console.log(error);
        res.status(500).json({"message":error.message})
    }
};
export const deleteTask = async(req,res)=>{
    const { idTask } = req.params;
    if(!idTask){
        res.status(400).json({
            msg:"El id de la tarea es requerido"
        });
    };
    try {
        const pool = await getConnection();

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
export const editTask= async(req,res)=>{
    const idTask  = req.params.id;
    if(!idTask){
        return res.status(400).json({
            msg:"El id de la tarea es requerido"
        });
    };
    const { idUser, taskName,taskDescription, taskUrlImage } = req.body;
    if(!idUser || !taskName || !taskDescription){
        res.status(400).json({
            msg:"Se requiere al menos el nombre de la tarea y su descripcion "
        });
    }
    try {
        const pool = await getConnection();
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
export const getAllTasksByUserId = async(req,res)=>{
    const userId = req.params.id;
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
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error en el servidor",
            errorMsg:error.message
        })
    }
}