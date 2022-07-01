const path = require("path")
const modelsController = require("./../models/modelsController")

const userController = {

    //pagina de login
    login: (req, res) => {
        return res.render("login",{title:"registro"})
    },

    //pagina de registro
    register: (req, res) => {
        return res.render("register",{title:"registro"})
    },

    //panel de administrador
    admin: (req, res) => {
        let productsJson = modelsController.FnRead("products")

        return res.render("admin", { title:"admin",products: productsJson })
    },

    //Crear usuario
    create: function (req, res) {

        let newUser = new function (username, password, email) {
            this.id = Date.now()
            this.username = req.body.username
            this.password = req.body.password
            this.email = req.body.email
        }

        modelsController.FnCreate("users", newUser)

        res.redirect("/")
    },

    //Eliminar usuario
    delete: function (req, res) {

        modelsController.FnDelete("users", req.params.userId)
        res.redirect("/")

    }
}

module.exports = userController