//importa el controlador de modelos
const db = require("./../database/models");

//importa el modulo bcrypt
const bcrypt = require("bcrypt");

const userController = {

    //pagina de login
    login: (req, res) => {
        return res.render("login", { user: req.session.user });
    },

    //deslog
    unlogin: (req, res) => {
        req.session.user.status = "guest";
        req.cookies.remember = undefined;
        return res.redirect("/");
    },
    
    //logica de logeo de usuario
    loginUser: function (req, res) {
        let user = req.foundUser;

        req.session.user = {
            id: user.id,
            username: user.username,
            status: user.status.dataValues.nameStatus,
            image: user.image
        };

        if (req.body.remember) {
            res.cookie("remember", req.session.user, { maxAge: 3600000 * 12 });
        };

        return res.redirect("/");
    },
    
    //pagina de registro
    register: (req, res) => {
        return res.render("register", { user: req.session.user });
    },

    //vista de administrador
    admin: function (req, res) {
        let adminId = req.session.user.id;

        let admin = db.User.findOne({
            where: { "id": adminId }
        });
        let products = db.Product.findAll();

        Promise.all([admin, products])
            .then(([admin, products]) => {
                res.render("admin", { admin, products, user: req.session.user });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //vista de usuarios de admin
    userPanel: function (req, res) {
        db.User.findAll()
            .then(users => {
                return res.render("userPanel", { users, user: req.session.user });
            })
            .catch(err => {
                console.log(err);
                return res.redirect("/");
            });
    },

    //vista de mi cuenta
    myAccount: function (req, res) {
        let userId = req.params.id;

        db.User.findByPk(userId)
            .then(user => {
                user.status = req.session.user.status;
                res.render("myAccount", { user, edit: false });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //vista de formulario para editar cuenta
    editAccount: function (req, res) {
        let userId = req.params.id;

        db.User.findByPk(userId)
            .then(user => {
                user.status = req.session.user.status;
                res.render("myAccount", { user, edit: true });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //modificar el usuario en la DB
    putAccount: function (req, res) {
        let idUser = req.params.id;
        let user = req.foundUserId;
        let userMod = user;
        let form = req.body;

        if (req.file) {
            form.image = req.file.filename;
        };

        for (let key in user) {
            if (user[key] != form[key] && form[key]) {
                userMod[key] = form[key];
            };
        };

        db.User.update(userMod, { where: { id: userMod.id } })
            .then(() => {
                res.redirect("/user/myAccount/" + idUser);
            })
            .catch(err => {
                console.error(err);
                res.redirect("/user/editAccount/" + idUser);
            });
    },

    //crear un usuario en la DB
    create: function (req, res) {
        let dateCreation = new Date();
        let month = dateCreation.getMonth() + 1;
        dateCreation = dateCreation.getFullYear() + "-" + month + "-" + dateCreation.getDate();

        let createdUser = {
            dateCreation: dateCreation,
            userName: req.body.name,
            lastname: req.body.lastname,
            passwordUser: bcrypt.hashSync(req.body.password, 10),
            email: req.body.userEmail,
            image: req.file ? req.file.filename : undefined,
            idStatusUser: 1
        };

        db.User.create(createdUser)
            .then(() => {
                res.redirect("/user/login");
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //eliminar usuario en la DB
    delete: function (req, res) {
        let idUser = req.params.id;
        db.User.destroy({
            where: { id: idUser }
        })
        .then(() => {
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
            res.redirect("/");
        });
    }
}
module.exports = userController