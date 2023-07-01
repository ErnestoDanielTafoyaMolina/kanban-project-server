//importacion de bcrypt para encriptacion
import bcrypt from "bcryptjs";
import { querys, getConnection, sql } from "../db";
import { createAccessToken } from "../libs/jwt";
//  handleLogin maneja el proceso de inicio de sesión del usuario. Obtiene el correo electrónico y la contraseña de la solicitud y verifica que ambos estén presentes. 
export const handleLogin=async(req,res)=>{

    const { email, password }=req.body;
    if(!email || !password){
        return res.status(400).json({ message: 'Correo electrónico y contraseña requeridos' });
    }
    try {
  
      const pool = await getConnection();

        const userFound = await pool.request()
        .input("userEmail",sql.VarChar,email)
        .query(querys.checkPassword);

        

        if(!userFound.recordset[0]){
          return res.status(409).json({
            msg:"El correo no existe"
          });
        };
      
      // console.log(userFound)
      const { idUser,userName,userEmail, userPassword } = await userFound.recordset[0];
      // const userPassword = userFound.recordset[0].userPassword;

//se compara la contraseña proporcionada con la contraseña almacenada en la base de datos
      const isMatch= await bcrypt.compare(password,userPassword);
      if(!isMatch){
        return res.status(400).json({
          msg:"contraseña o correo erroneos"
        });
      };
//Si las credenciales son correctas, se crea un token de acceso y se devuelve como una cookie en la respuesta
      const token = await createAccessToken({
        id:idUser,
        username:userName
      })
//se ejecuta cuando el registro de un nuevo usuario es exitoso
      return res
        .status(200)
        .cookie("token",token)
        .json({
          id:idUser,
          username:userName,
          email:userEmail
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const handleRegister = async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    };
    try {
      const pool = await getConnection();

        const userFound = await pool.request()
        .input("userEmail",sql.VarChar,email)
        .query(querys.checkPassword);

        if(userFound.recordset.length>0){
          return res.status(409).json({
            msg:"El correo ya está en uso"
          });
        };
//para generar el hash del password proporcionado. El número 10 indica el costo del algoritmo  de hashing
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await pool
        .request()
        .input("Username",sql.VarChar,username)
        .input("Email",sql.VarChar,email)
        .input("Password",sql.VarChar,hashedPassword)
        .query(querys.signUp);

        const { userName,userEmail, idUser } =await newUser.recordset[0];
        
        const token = await createAccessToken({
          id:idUser
        });

        return res
          .status(201)
          .cookie("token",token)
          .json({
          userStatus:"Usuario Registrado",
          idUser,
          userName,
          userEmail
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  };
//se encarga de cerrar sesión del usuario borra la cookie llamada "token" estableciendo su valor como una cadena vacía
export const logout = async(req, res) =>{
  res.cookie('token',"",{
    expires:new Date(0)
  });
  return res.sendStatus(200);
};
//se utiliza para obtener el perfil de un usuario. Utiliza el ID del usuario extraído de req.user para realizar una consulta a la base de datos y obtener la información del usuario utilizando la consulta 
export const profile = async(req,res)=>{
    const { id } = req.user;
    try {
        const pool = await getConnection();

        const userFound = await pool
        .request()
        .input("idUser",sql.Int,id)
        .query(querys.userProfile);

       if(!userFound.recordset[0]){
          return res.status(400).json({
            msg:"usuario no encontrado"
          });
       };

// se extrae el ID del usuario, el nombre de usuario y el correo electrónico del primer registro devuelto por la consulta userFound
      const { idUser, userName, userEmail } = await userFound.recordset[0];
      return res.status(200).json({
        id:idUser,
        username:userName,
        email:userEmail
      })

//Si ocurre algún error durante el proceso, se captura y se devuelve un estado 500 con un mensaje indicando que hubo un error en el servidor
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        msg:"error en el servidor",
        error:error.message
      })
    }
   
}