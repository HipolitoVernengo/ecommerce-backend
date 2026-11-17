import dotenv from "dotenv";
dotenv.config();
//Importamos libreria mongoose 
import mongoose from "mongoose";
import app from "./app.js";

//Creamos constante para la BD
const MONGOURI = process.env.MONGODB_URI;

app.get("/", (req,res) => {
    res.send("Servidor escuchando en puerto 3000");
})

const PORT = process.env.PORT || 3000;

mongoose.connect(MONGOURI).then(() => {
    console.log("Conectado a mongoDB correctamente!");

    //Iniciamos el servidor y ponemos a escuchar en el puerto especificado
    app.listen(PORT, () => {
        console.log(`Server funcionando en puerto http://localhost:${PORT}`);
    })

}).catch((error) => {
    console.log(error);
});



