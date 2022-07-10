//importa mediante destructuracion a expressValidator
const { body, validationResult } = require("express-validator")
//importa controlador de modelos
const modelsController = require("./../models/modelsController")
//importa path
const path = require("path")
//importa FS
const fs = require("fs")

const userMiddlewares = {
    //Validaciones BASICAS
    validations: [
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

    //Validaciones Complejas y control de carpeta %temp%
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

            let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)

            validaciones.errors.push({
                "value": req.body.userImage,
                "msg": "Solo se aceptan formatos JPG o PNG",
                "param": "userImage",
                "location": "body"
            })

            fs.rmSync(temporals)

        } else if (req.file) {

            let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
            let users_images = path.join(__dirname, "./../../public/img/users_images", req.file.filename)

            fs.renameSync(temporals, users_images)

        }
        return validaciones
    },

    //comprueba que paso todas las validaciones
    register: function (req, res, next) {
        let validaciones = userMiddlewares.coincidences(req, res)

        if (!validaciones.isEmpty()) {
            res.render("register", { errors: validaciones.mapped(), old: req.body })
        } else {
            next()
        }
    }
}

module.exports = userMiddlewares