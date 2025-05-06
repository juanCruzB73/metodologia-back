const mongoose=require('mongoose');

const resercherSchema=new mongoose.Schema({
    name:{type:String,required:true},
    specialty:{type:String},
    email:{type:String,required:true,unique:true},
    proyects:[{type:mongoose.Schema.Types.ObjectId,ref:'Proyect'}]
});

module.exports=mongoose.model("Resercher",resercherSchema);