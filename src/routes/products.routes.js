const express = require("express");
const routes = express.Router();


//importar middlewares
const multerMiddleware = require("./../middlewares/multerMiddleware");
const productsMiddlewares = require ("./../middlewares/productsMiddlewares");
const authAdminMiddleware = require ("./../middlewares/authAdminMiddleware");
const authUserMiddleware = require ("./../middlewares/authUserMiddleware");
const maintainMiddleware = require ("./../middlewares/maintainMiddleware");
//importa controlador
const productController = require("./../controllers/productController");

//GET
routes.get("/CarritoDeCompras",
    authUserMiddleware, 
    productController.productCard);
routes.get("/DetalleDeProducto", productController.productDetail);
routes.get("/newProduct",
    authAdminMiddleware,
    productController.newProduct);
routes.get("/editProduct/:idProduct",
    authAdminMiddleware,
    productController.editProduct);
    
//POST
routes.post("/newProduct",
    authAdminMiddleware,
    maintainMiddleware,
    multerMiddleware.productsImage().single("image"),
    productsMiddlewares.validations,
    productsMiddlewares.product,
    productController.createProduct);
    
//PUt
routes.put("/editProduct/:idProduct",
    authAdminMiddleware,
    maintainMiddleware,
    productController.editProductId);
    
//DELETE
routes.delete("/deleteProduct/:idProduct",
    maintainMiddleware,
    productController.deleteProduct);

module.exports = routes