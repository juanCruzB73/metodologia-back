import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app=express();

app.get("/user",(req,res)=>{
    res.send('Typescript + node');
});

app.listen(process.env.PORT,()=>{
    console.log(`app runnig on port ${process.env.PORT}`);
});