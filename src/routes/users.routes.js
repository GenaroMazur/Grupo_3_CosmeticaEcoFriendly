const express=require("express")
const routes=express.Router()

//importa controlador
const userController=require("./../controllers/userController")

//Get
routes.get("/login",userController.login)
routes.get("/registro",userController.register)

//Post
routes.post("/registro",userController.create)

module.exports=routes