const express = require("express")
const routes = express.Router()


//importar middlewares
const multerMiddleware = require("./../middlewares/multerMiddleware")
const productsMiddlewares = require ("./../middlewares/productsMiddlewares")
//importa controlador
const productController = require("./../controllers/productController")

//GET
routes.get("/CarritoDeCompras", productController.productCard)
routes.get("/DetalleDeProducto", productController.productDetail)
routes.get("/newProduct", productController.newProduct)
routes.get("/editProduct/:idProduct", productController.editProduct)

//POST
routes.post("/newProduct",
    productsMiddlewares.maintain,
    multerMiddleware.productsImage().single("image"),
    productsMiddlewares.validations,
    productsMiddlewares.product,
    productController.createProduct)
    
    //PUt
    routes.put("/editProduct/:idProduct",
    productsMiddlewares.maintain,
    productController.editProductId)
    
    //DELETE
    routes.delete("/deleteProduct/:idProduct",
    productsMiddlewares.maintain,
    productController.deleteProduct)

module.exports = routes