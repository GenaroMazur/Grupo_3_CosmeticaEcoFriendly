const express = require("express")
const routes = express.Router()

//importa controlador
const mainController = require("./../controllers/mainController")

//controladores
routes.get("/", mainController.index_v2)
routes.get("/nosotros", mainController.nosotros)
routes.get("/contacto", mainController.contacto)

module.exports = routes