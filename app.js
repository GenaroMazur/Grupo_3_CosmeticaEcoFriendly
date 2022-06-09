const express=require("express")
const app=express()
const path=require("path") //ponerlo en otro lado
//const routes= require("./src/routes/index.routes.js")
const port= process.env.PORT || 8080

const directory=path.join(__dirname,"/public")


//server
app.listen(port,(req,res)=>{
    console.log('corriendo en el puerto ${port}')
})

//routes
//app.use("/", routes)

//archivos estaticos
app.use(express.static(directory))

