import User from "../models/user.model.js";

async function createUser(req,res){
    //Necesito poder guardar un usuario en la bd
    try{
        const newUser = new User(req.body);
        await newUser.save();

        return res.status(201).send({
            success: true,
            message: "Usuario creado correctamente",
            user: newUser
        });
    }catch(error){
        console.log(error);
        return res.status(500).send("Error al crear el usuario");
    }
}

function login(req,res){
    res.send("Usuario logueandose");
}

function getUsers(req,res){
    res.send("Obteniendo usuarios");
}

function getUserById(req,res){
    res.send("Usuario encontrado");
}

function updateUser(req,res){
    res.send("Usuario actualizado");
}

export {createUser, login, getUsers, getUserById, updateUser};