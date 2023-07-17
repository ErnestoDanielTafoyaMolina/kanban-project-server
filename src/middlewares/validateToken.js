//Importa el módulo jsonwebtoken, que se utiliza para verificar tokens JWT.
import jwt from "jsonwebtoken";
// Importa un archivo de configuración (config.js) desde la carpeta ../config este archivo contiene información sensible como la clave secreta utilizada para firmar y verificar los tokens JWT.
import config from "../config";
// Exporta una función de middleware llamada authRequire que toma tres argumentos: req (objeto de solicitud HTTP), res (objeto de respuesta HTTP) y next (función de paso al siguiente middleware).
export const authRequire = ( req,res,next ) => {

//  Extrae el token del objeto req.cookies, que contiene las cookies de la solicitud
    const { token } = req.cookies;
    //Verifica si no se ha proporcionado un token en la solicitud
    if(!token){
        return res
        .status(401)
        .json([
            "No hay token, acceso denegado"
        ]);
    }
//Utiliza el método verify del módulo jsonwebtoken para verificar la autenticidad del token.
    jwt.verify(token,config.SECRET,(err,user)=>{
        if(err){
            return res.status(403).json(
                ["token invalido"]
            );
        };
//Si el token se verifica correctamente, se asigna el usuario decodificado del token al objeto req.user
        req.user = user;
        next();
    });
}