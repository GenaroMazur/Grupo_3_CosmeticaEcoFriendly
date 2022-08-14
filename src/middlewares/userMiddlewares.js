//importa mediante destructuracion a expressValidator
const { body, validationResult } = require("express-validator")
//importa controlador de modelos
const modelsController = require("./../models/modelsController")
const User = require("./../database/models").User
//importa path
const path = require("path")
//importa FS
const fs = require("fs/promises")
const {exists} = require ("fs")
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
                let ext = [".jpg",".jepg",".png"]
                if (req.body.image && !ext.some(extencion => path.extname(req.body.image) == extencion) ){
                    throw new Error ("Solo se aceptan formatos JPG, JEPG o PNG")
                }
                return true
            })
    ],

    //comprueba que paso todas las validaciones
    register: function (req, res, next) {
        let validaciones = validationResult(req)

        if (!validaciones.isEmpty()) {
            if (req.file) {
                let directory = path.join(__dirname, "./../../public/img/users_images", req.file.filename)
                fs.unlink(directory)
                    .catch(err=>{
                        exists("./../logs",exist=>{
                            if(exist){
                                fs.appendFile("./../logs/erros.txt",err,"utf-8")
                            } else {
                                fs.mkdir("./../logs")
                                    .then(()=>{
                                        fs.appendFile("./../logs/erros.txt",err,"utf-8")
                                    })
                            }
                        })
                    })
            }
            return res.render("register", { errors: validaciones.mapped(), old: req.body })
        } else {
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
    },
    //-------- dataBase ---------
    validationsCreate_v2: [
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
                User.findOne({
                    where:{
                        "email":value
                    }
                })
                .then(userFound=>{
                    if (userFound) {
                        throw new Error ("Este correo ya existe")
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
                return true
            }),
        body("image")
            .custom((value,{req})=>{
                let ext = [".jpg",".jepg",".png"]
                if (req.body.image && !ext.some(extencion => path.extname(req.body.image) == extencion) ){
                    throw new Error ("Solo se aceptan formatos JPG, JEPG o PNG")
                }
                return true
            })
    ],
    validationsLogin_v2:[
        body("userEmail")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .isEmail().withMessage("Debe ser un correo electronico").bail()
            .custom((value,{req})=>{
                User.findOne({
                    where:{
                        "email":value
                    }
                })
                .then(user=>{
                    if (!user) {
                        throw new Error("Correo inexistente")
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
                return true
            }),
        body("password")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .custom((value, { req }) => {
                User.findOne({
                    where:{
                        email:req.body.userEmail
                    }
                })
                .then(user=>{
                    if (user) {
                        if (!bcrypt.compareSync(value,user.password)) {
                            throw new Error("Contraseña invalida")
                        }
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
                return true
            })
    ],
    account_v2 : function (req, res, next) {
        let idUser = req.params.id
        User.findByPk(idUser)
        .then(foundUser=>{
            if (idUser) {
                if (foundUser) {
                    return next()
                }
            }
            return res.redirect("/")
        })
        .catch(err=>{
            console.log(err);
            return res.redirect("/")
        })
    },
}

module.exports = userMiddlewares