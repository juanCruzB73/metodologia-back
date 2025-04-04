require('dotenv').config();
const startServer=require('./server/server.js')

const envs ={
    port: process.env.PORT,
    //publicPath: get("PUBLIC_PATH").default('public').asString(),
};

startServer(envs);