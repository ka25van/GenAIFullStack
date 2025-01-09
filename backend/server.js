const express= require('express');
const cors=require('cors');
require("dotenv").config();


const app=express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> res.send("GenAi running"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server Running on ${PORT}`))