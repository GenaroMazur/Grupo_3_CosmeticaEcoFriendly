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
        let admin = modelsController.FnSearch("users","username",req.session.user.username)
        admin.id=undefined
        admin.password=undefined
        admin.dateCreation=undefined
        return res.render("admin", { products: productsJson , admin : admin})
        }
    ,
     //panel de usuario
    userPanel: (req, res) => {
        return res.render("userPanel")
    },

    //Vista Mi cuenta
    myAccount: function (req,res) {
        let user = modelsController.FnSearch("users","id",req.params.idUser)
        user.dateCreation=undefined
        user.password=undefined
        return res.render("myAccount",{user : user,edit:false})
    },
    editAccount: function(req, res) {
        let user = modelsController.FnSearch("users","id",req.params.idUser)
        user.dateCreation=undefined
        user.password=undefined
        return res.render("myAccount",{user : user,edit:true})
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
        return res.redirect("/")
    },

    //Eliminar usuario
    delete: function (req, res) {
        modelsController.FnDelete("users", req.params.idUser)
        return res.redirect("/")
    },

    loginUser: function (req,res) {

        let user = modelsController.FnSearch("users","email",req.body.userEmail)
        req.session.user ={
            id:user.id,
            username:user.username,
            status:user.status
        } 

        if (req.body.remember) {
            res.cookie("remember",req.session.user,{maxAge : 3600000*12})
        }
        return res.redirect("/")
    }
}

module.exports = userController