import sql from "mssql"; //importa el módulo mssql, que es una biblioteca de Node.js utilizada para interactuar con bases de datos SQL.
import config from "../config";// importa el objeto config desde el archivo "../config". Presumiblemente, este archivo contiene la configuración de la base de datos.



//Aquí se exporta un objeto llamado dbSettings que contiene la configuración de la base de datos.
//Los valores de user, password, server y database se obtienen del objeto config importado anteriormente.
// Estos valores representan el usuario de la base de datos, la contraseña, el servidor y la base de datos a los que se conectará la aplicación. 
//El objeto options contiene opciones adicionales para la conexión a la base de datos, como el cifrado y la confianza en el certificado del servidor.
export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

//Se exporta una función llamada getConnection, que se utiliza para establecer una conexión con la base de datos. 
//Esta función utiliza la función sql.connect del módulo mssql para establecer la conexión utilizando la configuración dbSettings.
// Se utiliza await para esperar a que se establezca la conexión antes de continuar
export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log("Connected to database :D")
    return pool;
  } catch (error) {
    console.error(error);
  }
};
//Se exporta el objeto sql del módulo mssql. Esto permite que otros módulos importen y utilicen el objeto sql para realizar consultas y operaciones en la base de datos.
export { sql };
