import Product from "../models/product.model.js";

//Funcion para obtener todos los productos
async function getProducts(req,res){
    try{

        const productos = await Product.find();

        return res.status(200).send({
            success: true,
            message: "Productos obtenidos correctamente",
            products: productos
        });

    } catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message: "Error al obtener el producto"
        })
    }
}

async function getProductById(req,res){
    try{
        //Primero debemos obtener el id del producto que se busca
        //Buscamos de params que fue lo que le pusimos en el routes
        const id = req.params.id;
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).send({
                success: false,
                message: "El producto no se encontro",
            });
        }

        return res.status(200).send({
            success: true,
            message: "Se obtuvo el producto correctamente",
            product
        })

    }catch(error){
        console.log(error);
        return res.status(500).send({
            success : false,
            message: "Error al obtener el producto"
        })
    }
}

async function createProduct(req,res){
    try{
    req.body.createdAt = new Date();

    const nuevoProducto = new Product(req.body);

    console.log(nuevoProducto);

    await nuevoProducto.save();

    return res.status(201).send({
        success: true,
        message: "Producto creado exitosamente",
        product: nuevoProducto
    })


    }
    catch(error){
        if(error.name === "ValidationError"){
            return res.status(400).send({
                success: false,
                message: "Error de validacion"
            });
        }

        return res.status(500).send({
            success: false,
            message: "Error al crear el producto"
        });
    }
}

async function updateProduct(req,res){
    try{
        //Obtenemos el ID
        const id = req.params.id;
        //Buscamos el producto                                              //para guardar el prod actualizado, y para que valide contra el esquema
        const productUpdated = await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});

        if(!productUpdated){
            return res.status(404).send({
                success: false,
                message: "No se encuentra el producto"
            })
        }

        return res.status(200).send({
            success: true,
            message: "Producto actualizado correctamente",
            product: productUpdated
        })

    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Hubo un error al actualizar el producto"
        })
    }
}

async function deleteProduct(req,res){
    try{
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: "Producto eliminado exitosamente",
            deletedProduct
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "No se pudo borrar"       
        })
    }
}

export {getProducts, getProductById, updateProduct,createProduct, deleteProduct}