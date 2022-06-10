const express=require("express")
const app=express()
const path=require("path")

//utiliza la carpeta public
const directory=path.join(__dirname,"./../public")
app.use(express.static(directory))

//motor de plantilla utilizado
app.set('views', __dirname + '/views')
app.set("view engine", "ejs")

//inicia el puerto de escucha
const port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log("funcionando en el puerto: "+port)
})

//Importa las rutas
const routes=require("./routes/routes")
app.use("/",routes)
