const express = require('express');

const app= express();
require("dotenv").config();

const PORT= process.env.PORT || 4000;

app.use(express.json());


const blogRoutes = require('./routes/blogs')
app.use("/api/v2", blogRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at port number ${PORT}`)
})

const dbConnect=require('./config/database')
dbConnect;




app.get('/',(req,res)=>{
    res.send("<h1>Hello to my bloging Site</h1>")
})

app.get('/createBlog',(req,res)=>{
    res.send(req)
})

