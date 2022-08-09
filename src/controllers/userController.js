//importa el controlador de modelos
const modelsController = require("./../models/modelsController")
const db = require ("./../database/models")
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
        let users = modelsController.FnRead("users")
        return res.render("userPanel",{users})
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
    },

    //------------ database --------------

    admin_v2:function(req, res) {
        let adminName = req.session.user.username 
        admin = db.User.findOne({
            where:{
                "username": adminName
            }
        })
        products = db.Product.findAll()

        Promise.all([admin, products]).then(([admin, products])=>{
            
            // admin.id = undefined
            // admin.dateCreation = undefined
            // admin.password = undefined

            res.render("admin",{admin, products})
        }).catch(err =>{

            console.log(err);
            res.redirect("/")

        })
    },
    userPanel_v2:function (req, res) {
        db.User.findAll()
            .then(users=>{
                return res.render("userPanel",{users})
            })
            .catch(err=>{
                console.log(err);
                return res.redirect("/")
            })
    },
    myAccount_v2:function (req, res) {
        db.User.findByPk(req.params.idUser)
            .then(user =>{
                // user.dateCreation = undefined
                // user.password= undefined
                res.render("myAccount",{user, edit:false})
            })
            .catch(err => {
                console.log(err)
                res.redirect("/")
            })
    },
    editAccount_v2: function (req, res) {
        db.User.findByPk(req.params.idUser)
            .then(user=>{
                // user.dateCreation = undefined
                // user.password = undefined
                res.render("myAccount",{user, edit:true})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    create_v2:function (req, res){
        let dateCreation=new Date()
        dateCreation=[dateCreation.getFullYear(),dateCreation.getMonth()+1,dateCreation.getDate()]
        db.User.create({
            dateCreation:dateCreation,
            username : req.body.username,
            lastname: req.body.lastname,
            password : bcrypt.hashSync(req.body.password,10),
            email : req.body.email,
            userImage : req.file? req.file.filename : "default.jpg"
        })
        .then(()=>{
            res.redirect("/user/login")
        })
        .catch(err=>{
            console.log(err);
            res.redirect("/")
        })
    },
    delete_v2: function(req, res) {
        db.User.destroy({
            where:{
                id:req.params.idUser
            }
        }).then(()=>{
            res.redirect("/")
        })
        .catch(err=>{
            console.log(err);
            res.redirect("/")
        })
    },
    loginUser_v2:function(req, res){
        db.User.findOne({
            where:{
                email:req.body.userEmail
            }
        }).then(user=>{
            
            req.session.user ={
                id:user.id,
                username:user.username,
                status:user.status
            } 
            if (req.body.remember) {
                res.cookie("remember",req.session.user,{maxAge : 3600000*12})
            }
            return res.redirect("/")

        }).catch(err=>{
            console.log(err);
            return res.redirect("/")
        })
    }
}

module.exports = userController