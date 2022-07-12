//importa el controlador de modelos
const modelsController = require("./../models/modelsController")
//importa el modulo bcrypt
const bcrypt = require ("bcrypt")

const userController = {

    //pagina de login
    login: (req, res) => {
        return res.render("login")
    },
    unlogin: (req, res) => {
        req.session.user.status="guest"
        req.cookies.remember = undefined
        return res.redirect("/")
    }
    ,

    //pagina de registro
    register: (req, res) => {
        return res.render("register")
    },

    //panel de administrador
    admin: (req, res) => {
        let productsJson = modelsController.FnRead("products")
        if (req.session.user.status == "admin") {
            return res.render("admin", { products: productsJson })
        } else if (req.session.user.status == "guest"){
            return res.redirect("/user/login")
        } else {
            return res.redirect("/")
        }
        }
    ,
     //panel de usuario
     paneluser: (req, res) => {
        return res.render("paneluser")
    },
    //Crear usuario
    create: function (req, res) {
        let dateCreation=new Date()
        dateCreation=[dateCreation.getFullYear(),dateCreation.getMonth()+1,dateCreation.getDate()]
        let newUser = {
            id : Date.now(),
            dateCreation:dateCreation,
            username : req.body.username,
            lastname: req.body.lastname,
            password : bcrypt.hashSync(req.body.password,10),
            email : req.body.email,
            userImage : req.file? req.file.filename : "default.jpg",
            status: "user"
        }

        modelsController.FnCreate("users", newUser)

        res.redirect("/")
    },

    //Eliminar usuario
    delete: function (req, res) {

        modelsController.FnDelete("users", req.params.userId)
        res.redirect("/")

    },

    loginUser: function (req,res) {
        if (req.body.remember) {
            res.cookie("remember",req.session.user,{maxAge : 120000})
        }
        res.redirect("/")
    }
}

module.exports = userController