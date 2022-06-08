const express=require("express")
const app=express()
const path=require("path")
const routes=require("./routes/routes")

const port=process.env.PORT || 8080
const directory=path.join(__dirname,"./../public")

app.listen(port,()=>{
    console.log("funcionando en el puerto: "+port)
})

app.use(express.static(directory))
app.use("/",routes)