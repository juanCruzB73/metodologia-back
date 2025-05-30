import { Router } from "express";
import { createUsuario, delUser, obtenerUsuarios, updateUsuario } from "../controllers/usuarioController.js";
const router = Router();
router.get("/", obtenerUsuarios);
router.post("/", createUsuario);
router.put("/:usuarioId", updateUsuario);
router.delete("/:usuarioId", delUser);
export default router;
