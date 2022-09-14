const express = require("express");
const routes = express.Router();


//importar middlewares
const multerMiddleware = require("./../middlewares/multerMiddleware");
const productsMiddlewares = require ("./../middlewares/productsMiddlewares");
const searchProductMiddleware = require("./../middlewares/searchProductMiddleware");

const authAdminMiddleware = require ("./../middlewares/authAdminMiddleware");
const authUserMiddleware = require ("./../middlewares/authUserMiddleware");

//importa controlador
const productController = require("./../controllers/productController");

//GET
routes.get("/CarritoDeCompras",
    authUserMiddleware, 
    productController.productCart);
routes.get("/DetalleDeProducto/:id", productController.productDetail);
routes.get("/catalogoProductos", productController.catalogoProductos);
routes.get("/favoritos", productController.favoritos);
routes.get("/newProduct",
    authAdminMiddleware,
    productController.newProduct);
routes.get("/editProduct/:idProduct",
    authAdminMiddleware,
    productController.editProduct);
    
//POST
routes.post("/newProduct",
    authAdminMiddleware,
    multerMiddleware.productsImage().single("image"),
    productsMiddlewares.validations,
    productsMiddlewares.product,
    productController.createProduct);
routes.post("/addCart/:id",
    authUserMiddleware,
    productController.addToCart
    )
    
//Put
routes.put("/editProduct/:idProduct",
    authAdminMiddleware,
    multerMiddleware.productsImage().single("image"),
    searchProductMiddleware,
    productsMiddlewares.putValidations,
    productsMiddlewares.putProduct,
    productController.putProduct);
    
//DELETE
routes.delete("/deleteProduct/:idProduct",
    productController.deleteProduct);

module.exports = routes