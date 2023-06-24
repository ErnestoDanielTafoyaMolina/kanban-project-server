import jwt from "jsonwebtoken";
import config from "../config";
export const authRequire = ( req,res,next ) => {

    const { token } = req.cookies;
    
    if(!token){
        return res
        .status(401)
        .json({
            msg:"No hay token, acceso denegado"
        });
    }

    jwt.verify(token,config.SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({
                msg:"token invalido"
            });
        };
        req.user = user;
        next();
    });
}