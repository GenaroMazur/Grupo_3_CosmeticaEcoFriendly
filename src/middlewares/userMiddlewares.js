const { body, validationResult } = require("express-validator")
const modelsController = require("./../models/modelsController")

const userMiddlewares = {
    validations: [
        body("username")
            .notEmpty().withMessage("Debe ingresar un nombre de usuario").bail(),
        body("password")
            .notEmpty().withMessage("Debe ingresar una contraseña").bail()
            .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
        body("coPass")
            .notEmpty().withMessage("Este campo no debe estar vacio"),
        body("email")
            .notEmpty().withMessage("Debe ingresar un Correo electronico").bail()
            .isEmail().withMessage("El correo electronico debe tener un formato valido")
    ],

    coincidences: function (req, res) {
        let userList = modelsController.FnRead("users")
        let coincidences = userList.some(user => user.username == req.body.username)
        let confirmation = req.body.password == req.body.coPass
        let validaciones = validationResult(req)
        if (coincidences) {
            validaciones.errors.push({
                "value": req.body.username,
                "msg": "Nombre de usuario ya existente",
                "param": "username",
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
        return validaciones
    },

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