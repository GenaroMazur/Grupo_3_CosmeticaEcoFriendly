const express = require("express")
const routes = express.Router()
const multer=require("multer")
const path=require("path")
const strorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        let directory = path.join(__dirname,"./../../public/img/user_images")
        cb(null,directory)
    },
    filename:(req,file,cb)=>{
        let name=req.body.username+req.body.lastname+path.extname(file.originalname)
        cb(null,name)
    }
})

//importa controlador
const userController = require("./../controllers/userController")

//importar middlewares
const userMiddlewares = require("./../middlewares/userMiddlewares")

//GET
routes.get("/login", userController.login)
routes.get("/registro", userController.register)
routes.get("/admin", userController.admin)

//POST
routes.post("/registro", userMiddlewares.validations, userMiddlewares.register, userController.create)

//PUT

//DELETE

module.exports = routes