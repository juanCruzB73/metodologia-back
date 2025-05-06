const mongoose=require('mongoose');

const proyectSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    startLine:{type:String},
    endLine:{type:String},
    state:{type:String,enum:["proposed","inprogress","completed"],requires:true},
    researchers:[{type:mongoose.Schema.Types.ObjectId,ref:'Researcher'}]
    

});

module.exports=mongoose.model("Proyect",proyectSchema);