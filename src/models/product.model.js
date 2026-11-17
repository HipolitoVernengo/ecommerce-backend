//En el modelo de productos vamos a definir
//la estructura de los documentos de productos en la base de datos

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    //name, description, price, stock, category, image, ----- createdAt, updatedAt

    name: {type: String, required: true, minLength: 3, maxLenght: 100, trim: true, lowercase: true},
    price: {type: Number, required: true, min : 0 },
    description: {type: String, required: true, minLength: 4, maxLenght: 500, trim: true},
    stock: {type: Number, min: 0, default: 0},
    image: {type: String, trim: true},

}, {timestamps: true})

//El modelo nos va a permitir vincularnos con nuestra conexion de productos
//en la base de datos
const Product = mongoose.model("Product" , productSchema);

export default Product ;

