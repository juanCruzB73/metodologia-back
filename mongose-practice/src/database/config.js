const mongoose=require('mongoose');
require('dotenv');

const dbConection=async()=>{
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log("DB CONNECTED");
    } catch (error) {
        console.log(error);
        throw new Error("error al actualizar la base de datos");
    }
}
module.exports={
    dbConection
}