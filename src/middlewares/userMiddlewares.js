//importa mediante destructuracion a expressValidator
const { body, validationResult } = require("express-validator")
//importa controlador de modelos
const modelsController = require("./../models/modelsController")
//importa path
const path = require("path")
//importa FS
const fs = require("fs/promises")
const {exists, existsSync} = require ("fs")
//cifrado de contraseña
const bcrypt = require ("bcrypt")

const userMiddlewares = {
    //Validaciones de creacion
    validationsCreate: [
        body("username")
            .notEmpty().withMessage("Debe ingresar un nombre de usuario"),
        body("lastname")
            .notEmpty().withMessage("Debe ingresar un apellido"),
        body("password")
            .notEmpty().withMessage("Debe ingresar una contraseña").bail()
            .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
        body("coPass")
            .notEmpty().withMessage("Este campo no debe estar vacio").bail()
            .custom((value,{req})=>{
                if (value != req.body.password) {
                    throw new Error("Las contraseñas no coinciden")
                }
                return true
            }),
        body("email")
            .notEmpty().withMessage("Debe ingresar un Correo electronico").bail()
            .isEmail().withMessage("El correo electronico debe tener un formato valido").bail()
            .custom((value,{req})=>{
                let userFound = modelsController.FnSearch("users","email",value)
                if (userFound) {
                    throw new Error ("Este correo ya existe")
                }
                return true
            }),
        body("image")
            .custom((value,{req})=>{
                if (req.file && !(path.extname(req.file.filename) == ".jpg" || path.extname(req.file.filename) == ".png")) {
                    throw new Error ("Solo se aceptan formatos JPG o PNG")
                }
                return true
            })
    ],

    //comprueba que paso todas las validaciones y controla carpeta %temp%
    register: function (req, res, next) {
        let validaciones = validationResult(req)

        if (!validaciones.isEmpty()) {
            if (req.file) {
                let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
                fs.unlink(temporals)
                    .catch(err=>{
                        if(existsSync("./../logs")){
                            fs.appendFile("./../logs/erros.txt",err,"utf-8")
                        } else {
                            fs.mkdir("./../logs")
                            fs.appendFile("./../logs/erros.txt",err,"utf-8")
                        }
                    })
            }
            return res.render("register", { errors: validaciones.mapped(), old: req.body })
        } else {

            if (req.file) {
                let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
                let users_images = path.join(__dirname, "./../../public/img/users_images", req.file.filename)
                fs.rename(temporals, users_images)
                    .catch(err=>{
                        if(existsSync("./../logs")){
                            fs.appendFile("./../logs/erros.txt",err,"utf-8")
                        } else {
                            fs.mkdir("./../logs")
                            fs.appendFile("./../logs/erros.txt",err,"utf-8")
                        }
                    })
            }

            return next()
        }
    },


    //Validaciones basicas de login
    validationsLogin:[
        body("userEmail")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .isEmail().withMessage("Debe ser un correo electronico").bail()
            .custom((value,{req})=>{
                let user = modelsController.FnSearch("users","email",value)
                if (!user) {
                    throw new Error("Correo inexistente")
                }
                return true
            }),
        body("password")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .custom((value, { req }) => {
                let user = modelsController.FnSearch("users","email",req.body.userEmail)
                if (user) {
                    if (!bcrypt.compareSync(value,user.password)) {
                        throw new Error("Contraseña invalida")
                    }
                }
                return true
            })
    ],
    
    login:function (req, res, next) {
        let validaciones = validationResult(req)
        if ( !validaciones.isEmpty() ) {
            res.render ("login", {errors : validaciones.mapped(), old : req.body})
        } else {
            next()
        }
    },
    account : function (req, res, next) {
        let idUser = req.params.idUser
        let foundUser = modelsController.FnSearch("users","id",req.params.idUser)
        if (idUser) {
            if (foundUser) {
                return next()
            }
        }
        return res.redirect("/")
    }
}

module.exports = userMiddlewares