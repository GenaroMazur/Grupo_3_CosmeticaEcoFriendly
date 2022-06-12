const express=require("express")
const routes=express.Router()

//importa controlador
const productController=require("./../controllers/productController")

//controladores
routes.get("/CarritoDeCompras",productController.productCard)
routes.get("/DetalleDeProducto",productController.productDetail)
routes.get("/newProduct",productController.newProduct)
routes.get("/editProduct",productController.editProduct)

module.exports=routes