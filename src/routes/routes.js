const express=require("express")
const routes=express.Router()

//importa los controladores
const mainController=require("./../controllers/mainController")
const userController=require("./../controllers/userController")
const productController=require("./../controllers/productController")
const { route } = require("express/lib/application")


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
routes.get("/newProduct",productController.newProduct)
routes.get("/editProduct",productController.editProduct)

module.exports=routes