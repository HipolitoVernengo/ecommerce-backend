import { Router } from "express";
import { createUser, login, getUsers, getUserById, updateUser } from "../controllers/user.controller.js";

//Inicializamos router
const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.post("/users", login);
router.put("/users/:id", updateUser);


export default router;