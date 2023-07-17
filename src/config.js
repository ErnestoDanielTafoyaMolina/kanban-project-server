// Configuracion de las variables globales
import { config } from "dotenv";

config();

export default {
    port: process.env.PORT || 4101,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || "",
    SECRET:process.env.SECRET
  };