const express = require("express")
const routes = express.Router()

//controlador mainController.js
const main = require("./main.routes")
routes.use("/", main)

//controlador userController.js
const users = require("./users.routes")
routes.use("/user", users)


//controlador productController.js
const products = require("./products.routes")
routes.use("/product", products)


module.exports = routes