const express=require("express")
const routes=express.Router()
const path=require("path")
const mainController=require("./../controllers/mainController")

//controladores por mainController.js

routes.get("/",mainController.home)
routes.get("/nosotros",mainController.nosotros)
routes.get("/contacto",mainController.contacto)


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

module.exports=routes