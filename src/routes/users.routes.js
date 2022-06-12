const express=require("express")
const routes=express.Router()

//importa controlador
const userController=require("./../controllers/userController")

//controladores
routes.get("/login",userController.login)
routes.get("/registro",userController.register)

module.exports=routes