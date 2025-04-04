const express = require('express');
const path=require('path');

const startServer=(envs)=>{

    const app = express();
    app.use(express.static("../../public"));
    //app.use(express.static(`${env.publicPath}/home`));

    app.get('/',(req,res)=>{
        const pathUrl=path.join(__dirname,"../../public/index.html")
        res.sendFile(pathUrl)
    });

    app.listen(3000,()=>{
        console.log("Listening to port: ",3000);
    });
}
module.exports=startServer;