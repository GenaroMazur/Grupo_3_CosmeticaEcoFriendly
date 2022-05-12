const express=require("express")
const app=express()
const path=require("path")

const directory=path.join(__dirname,"/public")

app.listen(8080,()=>{
    console.log("funcionando")
})

app.use(express.static(directory))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})