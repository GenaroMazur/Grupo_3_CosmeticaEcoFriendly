const express=require("express")
const routes=express.Router()

//importa controlador
const productController=require("./../controllers/productController")

//GET
routes.get("/CarritoDeCompras",productController.productCard)
routes.get("/DetalleDeProducto",productController.productDetail)
routes.get("/newProduct",productController.newProduct)
routes.get("/editProduct",productController.editProduct)

//POST
routes.post("/newProduct",productController.createProduct)

//PUT

//DELETE

module.exports=routes