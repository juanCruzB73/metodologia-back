const {response}=require('express');
const Proyect = require('../models/Proyect');

const getProyects=async(req,res)=>{
    const proyects=await Proyect.find();
    if(!proyects)return res.status(400).json({message:"could not bring the proyects"});
    res.json({
        ok:true,
        proyects:proyects
    })
};

const getProyectById=async(req,res)=>{
    const {proyectId}=req.params;
    try{
        const proyect=await Proyect.findById(proyectId);
        if(!proyect)return res.status(400).json({message:"could not bring the proyect"});
        res.json({
            ok:true,
            proyect:proyect
        })
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"internal error"
        })
    }

}

const addProyect=async(req,res)=>{
    try{
        const proyect=new Proyect(req.body);
        if(!proyect)return res.status(400).json({message:"could not bring the proyects"});
        await proyect.save();
        res.json({
            ok:true,
            proyect:proyect,
            msg:"proyect created succesfully"
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"internal error"
        })
    }
}

const editProyect=async()=>{

}

const removeProyect=async()=>{

}

const addResearcherToProyect=async()=>{

}

module.exports={getProyects,getProyectById,addProyect,editProyect,removeProyect,addResearcherToProyect}