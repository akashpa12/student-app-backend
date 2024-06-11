const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")
const student=require("./models/student")
const {studentmodel}=require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://akashpa:akashpa@cluster0.uevktkq.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let student=new studentmodel(input)
    student.save()
    console.log(student)
    res.json({"status":"success"})
})
app.get("/view",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.listen(8080,()=>{
    console.log("server started")
})