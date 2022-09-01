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
    productController.productCard_v2);
routes.get("/DetalleDeProducto/:id", productController.productDetail_v2);
routes.get("/catalogoProductos", productController.catalogoProductos_v2);
routes.get("/favoritos", productController.favoritos_v2);
routes.get("/newProduct",
    authAdminMiddleware,
    productController.newProduct);
routes.get("/editProduct/:idProduct",
    authAdminMiddleware,
    productController.editProduct_v2);
    
//POST
routes.post("/newProduct",
    authAdminMiddleware,
    multerMiddleware.productsImage().single("image"),
    productsMiddlewares.validations,
    productsMiddlewares.product,
    productController.createProduct_v2);
    
//PUt
routes.put("/editProduct/:idProduct",
    authAdminMiddleware,
    maintainMiddleware,
    productController.editProductId_v2);
    
//DELETE
routes.delete("/deleteProduct/:idProduct",
    productController.deleteProduct_v2);

module.exports = routes