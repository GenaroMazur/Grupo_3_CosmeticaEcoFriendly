const express = require("express");
const routes = express.Router();

const userController = require("./../controllers/userController");
routes.get("/users",userController.apiGetUsers);
routes.get("/users/image/:image",userController.apiShowUserImage);
routes.get("/users/:idUser",userController.apiGetUserById);

const productController = require("./../controllers/productController");
routes.get("/products",productController.apiGetProducts);
routes.get("/products/image/:image",productController.apiShowProductImage);
routes.get("/products/:idProduct",productController.apiGetProductById);

module.exports = routes