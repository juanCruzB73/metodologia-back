const mongoose=require('mongoose');

const publicationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    resume:{type:String},
    releaseDate:{type:String},
    proyects:[{type:mongoose.Schema.Types.ObjectId,ref:'Proyect'}],
    authors:[{type:mongoose.Schema.Types.ObjectId,ref:'Researcher'}]
});

module.exports=mongoose.model("Publication",publicationSchema);