//Importa el objeto Router de Express para crear el enrutador.
import { Router } from "express";
//Estas funciones se encargan de manejar las diferentes acciones relacionadas con las tareas.
import { addTask, deleteTask, editTask, getAllTasksByUserId, getOneTaskById } from "../controllers/tasks.controllers";
//Este middleware se utiliza para proteger las rutas y verificar la autenticación del usuario.
import { authRequire } from "../middlewares/validateToken";

//Crea un nuevo enrutador utilizando el objeto Router de Express.
const router = Router();

//Esta ruta se utiliza para obtener todas las tareas de un usuario.
router.get("/tasks",authRequire,getAllTasksByUserId);
//Esta ruta se utiliza para obtener una tarea específica por su ID.
router.get("/task/:id",authRequire,getOneTaskById);

//Se utiliza para agregar una nueva tarea.
router.post("/task/add",authRequire,addTask);
//Esta ruta se utiliza para editar una tarea existente por su ID.
router.patch("/task/edit/:id",authRequire,editTask);
//Esta ruta se utiliza para eliminar una tarea existente por su ID.
router.delete("/task/delete/:id",authRequire,deleteTask);

//Exporta el enrutador para que pueda ser utilizado en otros archivos.
export default router;

