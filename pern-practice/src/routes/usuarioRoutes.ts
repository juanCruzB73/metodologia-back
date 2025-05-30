import { Router } from "express";
import { createUsuario, delUser, login, obtenerUsuarios,updateUsuario } from "../controllers/usuarioController.js";

const router = Router();

router.get("/", obtenerUsuarios);
router.post("/", createUsuario);
router.put("/:usuarioId",updateUsuario)
router.delete("/:usuarioId", delUser);

//AUTH
router.post("/auth/login",login);

export default router;