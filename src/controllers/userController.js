//importa el controlador de modelos
const db = require("./../database/models")
//importa el modulo bcrypt
const bcrypt = require("bcrypt")
const path = require("path")
const userController = {

    //pagina de login
    login: (req, res) => {
        return res.render("login", { user: req.session.user })
    },
    unlogin: (req, res) => {
        req.session.user.status = "guest"
        req.cookies.remember = undefined
        return res.redirect("/")
    }
    ,

    //pagina de registro
    register: (req, res) => {
        return res.render("register", { user: req.session.user })
    },
    //------------ database --------------

    admin_v2: function (req, res) {
        let adminId = req.session.user.id
        admin = db.User.findOne({
            where: {
                "id": adminId
            }
        })
        products = db.Product.findAll()

        Promise.all([admin, products]).then(([admin, products]) => {

            res.render("admin", { admin, products, user: req.session.user })
        }).catch(err => {

            console.log(err);
            res.redirect("/")

        })
    },
    userPanel_v2: function (req, res) {
        db.User.findAll()
            .then(users => {
                return res.render("userPanel", { users, user: req.session.user })
            })
            .catch(err => {
                console.log(err);
                return res.redirect("/")
            })
    },
    myAccount_v2: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(user => {
                user.status = req.session.user.status
                res.render("myAccount", { user, edit: false })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    },
    editAccount_v2: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(user => {
                user.status = req.session.user.status
                res.render("myAccount", { user, edit: true })
            })
            .catch(err => {
                console.log(err);
                res.redirect("/")
            })
    },
    create_v2: function (req, res) {
        let dateCreation = new Date()
        let month = dateCreation.getMonth() + 1
        dateCreation = dateCreation.getFullYear() + "-" + month + "-" + dateCreation.getDate()
        db.User.create({
            dateCreation: dateCreation,
            username: req.body.username,
            lastname: req.body.lastname,
            passwordUser: bcrypt.hashSync(req.body.password, 10),
            email: req.body.userEmail,
            image: req.file ? req.file.filename : undefined,
            idStatusUser: 1
        })
            .then(() => {
                res.redirect("/user/login")
            })
            .catch(err => {
                console.log(err);
                res.redirect("/")
            })
    },
    delete_v2: function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect("/")
        })
            .catch(err => {
                console.log(err);
                res.redirect("/")
            })
    },
    putAccount_v2: function (req, res) {
        let user = req.foundUserId
        let form = req.body
        if (req.file) {
            form.image = req.file.filename
        }
        let userDb = user
        for (let key in user) {
            if (user[key] != form[key] && form[key]) {
                userDb[key] = form[key]
            }
        }
        db.User.update(userDb, { where: { id: userDb.id } })
            .then(() => {
                res.redirect("/user/myAccount/" + req.params.id)
            })
            .catch(err => {
                console.error(err);
                res.redirect("/user/editAccount/" + req.params.id)
            })
    },
    loginUser_v2: function (req, res) {
        let user = req.foundUser
        req.session.user = {
            id: user.id,
            username: user.username,
            status: user.status.dataValues.nameStatus,
            image: user.image
        }
        if (req.body.remember) {
            res.cookie("remember", req.session.user, { maxAge: 3600000 * 12 })
        }
        return res.redirect("/")
    },
    apiGetUsers: async function (req, res) {
        try {

            let users = []
            let responseDb = await db.User.findAll({
                attributes: ["id", "userName", "email"]
            })

            responseDb.map(user => {
                users.push(user.dataValues)
            })

            users = users.map(user => {
                user.detail = "localhost:8080/api/users/" + user.id
                return user
            })
            let response = {
                count: users.length,
                users
            }
            return res.status(200).json(response)

        } catch (err) {

            console.error(err);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde")
        }
    },
    apiGetUserById: async function (req, res) {
        try {
            let user = await db.User.findByPk(req.params.idUser, {
                attributes: { exclude: ["passwordUser", "idStatusUser", "postalCode", "telephone", "direction"] }
            })
            user = user.dataValues
            user.image="localhost:8080/api/users/image/"+user.image
            return res.status(200).json(user)
        } catch (error) {
            console.error(error);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde")
        }
    },
    apiShowUserImage: function (req, res) {
        let image = path.join(__dirname,"./../../public/img/users_images/",req.params.image)
        return res.sendFile(image)
    }
}

module.exports = userController