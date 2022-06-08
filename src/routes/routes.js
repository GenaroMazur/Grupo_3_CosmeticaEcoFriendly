const express=require("express")
const routes=express.Router()
const path=require("path")

routes.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/index.html"))
})
routes.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/login.html"))
})
routes.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/register.html"))
})
routes.get("/CarritoDeCompras",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/productCard.html"))
})
routes.get("/DetalleDeProducto",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/productDetail.html"))
})
routes.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/contacto.html"))
})
routes.get("/nosotros",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/nosotros.html"))
})

module.exports=routes