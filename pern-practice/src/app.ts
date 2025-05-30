import express from 'express';
import dotenv from 'dotenv';
import router from './routes/usuarioRoutes.js';
dotenv.config();

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send('Typescript + node');
});

app.use("/usuario",router);

export default app;