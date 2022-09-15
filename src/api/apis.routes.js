const express = require("express");
const routes = express.Router();

const apisController = require("./apisController");
routes.get("/users",apisController.apiGetUsers);
routes.get("/users/image/:image",apisController.apiShowUserImage);
routes.get("/users/:idUser",apisController.apiGetUserById);

routes.get("/products",apisController.apiGetProducts);
routes.get("/products/image/:image",apisController.apiShowProductImage);
routes.get("/products/:idProduct",apisController.apiGetProductById);

module.exports = routes