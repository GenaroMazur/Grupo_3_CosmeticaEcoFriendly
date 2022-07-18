//importa mediante destructuracion a expressValidator
const { body, validationResult } = require("express-validator")
//importa controlador de modelos
const modelsController = require("./../models/modelsController")
//importa path
const path = require("path")
//importa FS
const fs = require("fs")
//
const bcrypt = require ("bcrypt")

const userMiddlewares = {
    //Validaciones BASICAS de creacion
    validationsCreate: [
        body("username")
            .notEmpty().withMessage("Debe ingresar un nombre de usuario"),
        body("lastname")
            .notEmpty().withMessage("Debe ingresar un apellido"),
        body("password")
            .notEmpty().withMessage("Debe ingresar una contraseña").bail()
            .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
        body("coPass")
            .notEmpty().withMessage("Este campo no debe estar vacio"),
        body("email")
            .notEmpty().withMessage("Debe ingresar un Correo electronico").bail()
            .isEmail().withMessage("El correo electronico debe tener un formato valido")
    ],

    //Validaciones Complejas de creacion
    coincidences: function (req, res) {

        let userList = modelsController.FnRead("users")
        let coincidences = userList.some(user => user.email == req.body.email)
        let confirmation = req.body.password == req.body.coPass
        let validaciones = validationResult(req)

        if (coincidences) {

            validaciones.errors.push({
                "value": req.body.email,
                "msg": "Este Correo ya existe",
                "param": "email",
                "location": "body"
            })

        } else if (!confirmation) {

            validaciones.errors.push({
                "value": req.body.coPass,
                "msg": "La contraseña no coincide",
                "param": "coPass",
                "location": "body"
            })

        }

        if (req.file && !(path.extname(req.file.filename) == ".jpg" || path.extname(req.file.filename) == ".png")) {

            validaciones.errors.push({
                "value": req.body.userImage,
                "msg": "Solo se aceptan formatos JPG o PNG",
                "param": "userImage",
                "location": "body"
            })

        }
        return validaciones
    },

    //comprueba que paso todas las validaciones y controla carpeta %temp%
    register: function (req, res, next) {
        let validaciones = userMiddlewares.coincidences(req, res)


        if (!validaciones.isEmpty()) {
            if (req.file) {
                let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
                fs.rmSync(temporals)
            }

            res.render("register", { errors: validaciones.mapped(), old: req.body })

        } else {

            if (req.file) {

                let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
                let users_images = path.join(__dirname, "./../../public/img/users_images", req.file.filename)

                fs.renameSync(temporals, users_images)
            }

            next()
        }
    },
    //Validaciones basicas de login
    validationsLogin:[
        body("userEmail")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .isEmail().withMessage("Debe ser un correo electronico"),
        body("password")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .custom((value, { req }) => {
                let user = modelsController.FnSearch("users","email",req.body.userEmail)
                if (req.body.userEmail == user.email) {
                    if (!bcrypt.compareSync(value,user.password)) {
                        throw new Error("Contraseña invalida")
                    } else {
                        req.session.user ={
                            id:user.id,
                            username:user.username,
                            status:user.status
                        } 
                    }
                } else {
                    throw new Error ("Correo inexistente")
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