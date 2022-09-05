//importa mediante destructuracion a expressValidator
const { body, validationResult } = require("express-validator")
//importa controlador de modelos
const User = require("./../database/models").User
//importa path
const path = require("path")
//importa FS
const fs = require("fs/promises")
const {exists} = require ("fs")
//cifrado de contraseña
const bcrypt = require ("bcrypt")

const userMiddlewares = {

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
            return res.render("register", { errors: validaciones.mapped(), old: req.body, user: req.session.user })
        } else {
            return next()
        }
    },    
    login:function (req, res, next) {
        let validaciones = validationResult(req)
        if ( !validaciones.isEmpty() ) {
            res.render ("login", {errors : validaciones.mapped(), old : req.body, user: req.session.user})
        } else {
            next()
        }
    },
    //-------- dataBase ---------
    validationsCreate_v2: [
        body("username")
            .notEmpty().withMessage("Debe ingresar un nombre de usuario").bail()
            .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
        body("lastname")
            .notEmpty().withMessage("Debe ingresar un apellido"),
        body("password")
            .notEmpty().withMessage("Debe ingresar una contraseña").bail()
            .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
            .custom((value,{req})=>{
                let upper = false
                let num = false
                let special = false
                let lower = false
                let capitalLetters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
                let lowerLetters = capitalLetters.toLowerCase()
                let numbers = "0123456789"
                let specialLetters = ".,-_<>/=&%$#@!¡¿?"
                for (let i of value){
                    if (capitalLetters.includes(i)){
                        upper = true
                    }
                    if(numbers.includes(i)){
                        num = true
                    }
                    if(specialLetters.includes(i)){
                        special = true
                    }
                    if(lowerLetters.includes(i)){
                        lower = true
                    }
                }
                if (!(num && upper && special && lower)){
                    throw new Error("Debe tener al menos una letra mayuscula, minuscula, un caracter especial y un numero")
                }
                return true
            }),
        body("coPass")
            .notEmpty().withMessage("Este campo no debe estar vacio").bail()
            .custom((value,{req})=>{
                if (value != req.body.password) {
                    throw new Error("Las contraseñas no coinciden")
                }
                return true
            }),
        body("userEmail")
            .notEmpty().withMessage("Debe ingresar un Correo electronico").bail()
            .isEmail().withMessage("El correo electronico debe tener un formato valido").bail()
            .custom((value,{req})=>{
                let userFound = req.foundUser
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
    validationsLogin_v2:[
        body("userEmail")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .isEmail().withMessage("Debe ser un correo electronico").bail()
            .custom((value,{req})=>{
                let user= req.foundUser
                    if (user == null) {
                        throw new Error("Correo inexistente")
                    }
                    return true
            }),
        body("password")
            .notEmpty().withMessage("Debe completar este campo").bail()
            .custom((value, { req }) => {
                let user=req.foundUser
                if (user) {
                    if (!bcrypt.compareSync(value,user.passwordUser)) {
                        throw new Error("Contraseña invalida")
                    }
                }
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