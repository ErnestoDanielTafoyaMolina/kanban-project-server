//Este objeto representa la aplicación Express configurada.
import app from "./app";
//Esta función se utiliza para establecer la conexión con la base de datos.
import { getConnection } from "./db/connection";


//El nombre del puerto se obtiene de la configuración de la aplicación.
const port = app.get("port");
//El servidor comienza a esperar las solicitudes entrantes.
app.listen(port);
//Imprime un mensaje en la consola indicando en qué puerto se está ejecutando el servidor.
console.log(`\nServer on port ${port}`);
// Esta función probablemente configure la conexión y realice alguna inicialización necesaria.
getConnection();
