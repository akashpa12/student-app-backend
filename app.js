const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/contact",(req,res)=>{
    res.send("welcome my contact page")
})

app.listen(8080,()=>{
    console.log("server started")
})