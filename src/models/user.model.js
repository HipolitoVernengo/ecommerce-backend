import { Schema, model } from "mongoose";

//Name, email, password, passwordConfirmation, role, bornDate, createdAt, updateAt, image

const userSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlenght: 3, 
        maxlenght: 30, 
        trim: true
    },
    email: {
        type: String, 
        required: true, 
        minlenght: 2, 
        maxlenght: 150, 
        trim: true, 
        lowercase: true, 
        unique: true, //Garantiza que no haya dos usuarios con el mismo email
        index: true,
        match:  [/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/, "Por favor ingresa un email válido"]
    },
    password: {
        type: String, 
        required: true,
        minlenght: 4,
        maxlenght: 128,
        trim: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user","client","admin"],
    },
    bornDate: {
        type: Date,

        validate: {
            validator: function(fechaNacimiento){
                if(!fechaNacimiento) return true;

                const diezAniosAtras = new Date().getTime() - 10 * 365 * 24 * 60 * 60 * 1000;
                return fechaNacimiento < diezAniosAtras;
            },
            message: "La fecha de nacimiento debe ser una fecha anterior a 10 años atras"
        }
    },
    image: {
        type: String,
    }
}, {timestamps: true});

const User = model("User", userSchema);

export default User;



