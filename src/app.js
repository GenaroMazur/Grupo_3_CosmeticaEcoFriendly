const express=require("express")
const app=express()
const path=require("path")
const port=process.env.PORT || 8080
const directory=path.join(__dirname,"./../public")

app.listen(port,()=>{
    console.log("funcionando en el puerto: "+port)
})

app.use(express.static(directory))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})
app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get("/CarritoDeCompras",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productCard.html"))
})
app.get("/DetalleDeProducto",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"))
})
app.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/contacto.html"))
})
app.get("/nosotros",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/nosotros.html"))
})