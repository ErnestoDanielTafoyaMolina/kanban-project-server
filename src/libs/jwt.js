//mporta un archivo de configuración (config.js) desde la carpeta ../config. Este archivo contiene información sensible como la clave secreta utilizada para firmar los tokens JWT.
import config from "../config";
//Importa el módulo jsonwebtoken, que se utiliza para generar y verificar tokens JWT.
import jwt from "jsonwebtoken";

//Exporta una función asincrónica llamada createAccessToken que toma un argumento payload, que es la información que se va a incluir en el token JWT.
export async function createAccessToken(payload) {
  // Crea una nueva promesa que envuelve la generación del token JWT.
  return new Promise((resolve, reject) => {
    //Utiliza el método sign del módulo jsonwebtoken para firmar un token JWT.
    jwt.sign(payload, config.SECRET, { expiresIn: "1d" }, (err, token) => {
//Es una función de devolución de llamada que se ejecuta una vez que se ha generado el token JWT
      if (err) reject(err);
//Si el token se firma correctamente, se resuelve la promesa con el token generado.
      resolve(token);
    });
  });
}