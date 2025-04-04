const express=require('express');
const path=require('path');
const {port,reactApp}=require('./config/config')
const app=express();

const buildPath=path.join(__dirname,reactApp);
console.log(port,reactApp)
app.use(express.static(buildPath));

app.listen(port,()=>{
  console.log(`Server in http://localhost:${port}`);
});
