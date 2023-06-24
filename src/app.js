//dependences
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import cookieParser from "cookie-parser";
//import routes

import TasksRoutes from "./routes/tasks.routes";
import AuthRoutes from "./routes/auth.routes";
//init app
const app = express();
app.set("port",config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//use routes

app.use("/api",TasksRoutes);
app.use("/api",AuthRoutes);

app.use("/*",(req,res)=>res.status(404).send("bad request"));
export default app;