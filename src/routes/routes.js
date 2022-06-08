const express=require("express")
const routes=express.Router()
const path=require("path")
const mainController=require("./../controllers/mainController")
const userController=require("./../controllers/userController")


//controladores por mainController.js
routes.get("/",mainController.home)
routes.get("/nosotros",mainController.nosotros)
routes.get("/contacto",mainController.contacto)


//controladores por userController.js
routes.get("/login",userController.login)
routes.get("/registro",userController.register)


routes.get("/CarritoDeCompras",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/productCard.html"))
})
routes.get("/DetalleDeProducto",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/productDetail.html"))
})

module.exports=routes