import { Router } from "express";
import { addTask, deleteTask, editTask, getAllTasksByUserId, getOneTaskById } from "../controllers/tasks.controllers";
import { authRequire } from "../middlewares/validateToken";

const router = Router();

router.get("/tasks",authRequire,getAllTasksByUserId);
router.get("/task/:id",authRequire,getOneTaskById);

router.post("/task/add",authRequire,addTask);
router.patch("/task/edit/:id",authRequire,editTask);
router.delete("/task/delete/:id",authRequire,deleteTask);

export default router;

