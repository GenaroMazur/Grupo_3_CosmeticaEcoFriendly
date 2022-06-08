const express=require("express")
const routes=express.Router()
const path=require("path")
const mainController=require("./../controllers/mainController")
const userController=require("./../controllers/userController")
const productController=require("./../controllers/productController")


//controlador mainController.js
routes.get("/",mainController.home)
routes.get("/nosotros",mainController.nosotros)
routes.get("/contacto",mainController.contacto)


//controlador userController.js
routes.get("/login",userController.login)
routes.get("/registro",userController.register)

//controlador productController.js
routes.get("/CarritoDeCompras",productController.productCard)
routes.get("/DetalleDeProducto",productController.productDetail)

module.exports=routes