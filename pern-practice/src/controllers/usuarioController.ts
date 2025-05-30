import { Request,Response } from "express"
import { Usuario } from "../models/usuarioModel.js";
import bcrypt from "bcrypt";


export const obtenerUsuarios=async(req:Request,res:Response)=>{
    try{
        const usuarios=await Usuario.findMany();
        res.status(200).json({ok:true,usuarios:usuarios});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error obteniendo usuarios"})
    }
}

export const createUsuario = async (req: Request, res: Response) =>{
    try{
        const { nombre, email, password } = req.body;
        if (!nombre || !email || !password) {
            res.status(400).json({ message: "Nombre, email y password son requeridos" });
        }
        const existingUser = await Usuario.findUnique({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: "El usuario ya existe" });
        }
        const saltRounds = 5;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await Usuario.create({
            data: {
                nombre,
                email,
                password: hashedPassword,
            },
        });
        const { password: _, ...userWithoutPassword } = newUser;
        res.status(201).json({ ok: true, usuario: userWithoutPassword });
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error creando usuario"}) 
    }
}

export const updateUsuario=async(req:Request,res:Response)=>{
    try {
        const { usuarioId } = req.params;
        if (!usuarioId) {
             res.status(400).json({ message: "usuario no encontrado" });
        }
        const { nombre, email, password } = req.body;
        if (!nombre || !email || !password) {
             res.status(400).json({ message: "Nombre, email y password son requeridos" });
        }
        const existingUser = await Usuario.findUnique({ where: { id: usuarioId } });
        if (!existingUser) {
             res.status(404).json({ message: "Usuario no encontrado" });
        }
        const saltRounds = 5;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const updatedUser = await Usuario.update({
            where: { id: usuarioId },
            data: {
                nombre,
                email,
                password: hashedPassword,
            },
        });
        const { password: _, ...userWithoutPassword } = updatedUser;
         res.status(201).json({ ok: true, usuario: userWithoutPassword });
        }catch (error) {
            console.log(error);
             res.status(500).json({ message: "Error actualizando usuario" });
        }
}

export const delUser=async(req:Request,res:Response)=>{
    try{
        const {usuarioId}=req.params;
        if (!usuarioId) {
            res.status(400).json({ message: "usuario no encontrado" });
        }
        const existingUser = await Usuario.findUnique({ where: { id: usuarioId } });
        if (!existingUser) {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
        await Usuario.delete({
            where: { id: usuarioId }
        });

        res.status(201).json({ ok: true, msg:"user deleted sucesfully" });
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error borrando usuario"}) 
    }
}

export const login=async(req:Request,res:Response)=>{
    console.log("login");
}