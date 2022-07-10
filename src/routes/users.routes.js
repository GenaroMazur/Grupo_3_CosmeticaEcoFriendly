const express = require("express")
const routes = express.Router()

//importa controlador
const userController = require("./../controllers/userController")

//importar middlewares
const userMiddlewares = require("./../middlewares/userMiddlewares")
const multerMiddleware = require("./../middlewares/multerMiddleware")

//GET
routes.get("/login", userController.login)
routes.get("/registro", userController.register)
routes.get("/admin", userController.admin)

//POST
routes.post("/registro",
    multerMiddleware.usersImage().single("userImage"),
    userMiddlewares.validations,
    userMiddlewares.register,
    userController.create)

//PUT

//DELETE

module.exports = routes