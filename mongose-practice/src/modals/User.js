const mongoose = require('mongoose');
const users = mongoose.Schema({
    name:String,
    lastname:String,
    edad:Number
});

module.exports=mongoose.model('User',users)