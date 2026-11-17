import express from "express";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js"

//Inicializo la app en express
const app = express();

//Middleware para parsear el body de las solicitudes como JSON
app.use(express.json());

app.use(productRoutes); //Endpoint para ruta de productos
app.use(userRoutes); //Endpoint para ruta de usuarios

export default app;