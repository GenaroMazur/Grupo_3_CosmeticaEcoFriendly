const express = require("express")
const routes = express.Router()

//importa controlador
const userController = require("./../controllers/userController")

//importar middlewares
const userMiddlewares = require("./../middlewares/userMiddlewares")
const multerMiddleware = require("./../middlewares/multerMiddleware")

//GET
routes.get("/login", userController.login)
routes.get("/un-login",userController.unlogin)
routes.get("/registro", userController.register)
routes.get("/admin", userController.admin)
routes.get("/panel-usuario", userController.paneluser)
routes.get("/miCuenta",userController.miCuenta)

//POST
routes.post("/registro",
    multerMiddleware.usersImage().single("userImage"),
    userMiddlewares.validationsCreate,
    userMiddlewares.register,
    userController.create)
routes.post("/login",
    userMiddlewares.validationsLogin,
    userMiddlewares.login,
    userController.loginUser)

//PUT

//DELETE

module.exports = routes