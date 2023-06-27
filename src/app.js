//dependencias
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import cookieParser from "cookie-parser";

//rutas importadas

import TasksRoutes from "./routes/tasks.routes";
import AuthRoutes from "./routes/auth.routes";
//inizializar app
const app = express();
app.set("port",config.port);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//uso de rutas 
app.use("/api",TasksRoutes);
app.use("/api",AuthRoutes);


//ruta por defecto
app.use("/*",(req,res)=>res.status(404).send("bad request"));
export default app;