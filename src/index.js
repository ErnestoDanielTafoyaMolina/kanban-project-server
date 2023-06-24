import app from "./app";
import { getConnection } from "./db/connection";

const port = app.get("port");
app.listen(port);
console.log(`\nServer on port ${port}`);
getConnection();
