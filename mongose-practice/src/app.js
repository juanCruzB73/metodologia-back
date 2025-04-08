const express = require('express');
const { dbConection } = require('./database/config');
const User = require('./modals/User');
require('dotenv').config();
const app=express();
const port= process.env.PORT;

dbConection();

app.use(express.json());

app.use('/users',require('./routes/UserRoutes'));

app.listen(port,()=>{
    console.log(`Server in http://localhost:${port}`);
  });