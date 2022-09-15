const { body, validationResult } = require("express-validator")
const path = require("path")
const fs = require("fs/promises")
const { exists } = require("fs")
const db = require("./../database/models")

productsMiddlewares = {
    validations: [
        body("nameProduct")
            .notEmpty().withMessage("Este campo no puede estar vacio").bail()
            .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
        body("descriptionProduct")
            .notEmpty().withMessage("Este campo no puede estar vacio").bail()
            .isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),
        body("price")
            .notEmpty().withMessage("Este campo no puede estar vacio"),
        body("image")
            .notEmpty().withMessage("Debe ingresar una imagen").bail()
            .custom((value, { req }) => {
                let ext = [".jpg", ".jepg", ".png"]
                if (req.body.image && !ext.some(extencion => path.extname(req.body.image) == extencion)) {
                    throw new Error("Los formatos permitidos son :" + ext.join(", "))
                }
                return true
            })

    ],
    putValidations: [
        body("nameProduct")
            .notEmpty().withMessage("Este campo no puede estar vacio").bail()
            .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
        body("descriptionProduct")
            .notEmpty().withMessage("Este campo no puede estar vacio").bail()
            .isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),
        body("price")
            .notEmpty().withMessage("Este campo no puede estar vacio"),
        body("image")
            .custom((value, { req }) => {
                let ext = [".jpg", ".jepg", ".png"]
                if (req.body.image && !ext.some(extencion => path.extname(req.body.image) == extencion)) {
                    throw new Error("Los formatos permitidos son :" + ext.join(", "))
                }
                return true
            })
        ],
    product: function (req, res, next) {
        let validaciones = validationResult(req)
        if (!validaciones.isEmpty()) {
            if (req.file) {
                let directory = path.join(__dirname, "./../../public/img/products_images", req.file.filename)
                fs.unlink(directory)
                    .catch(err => {
                        exists("./../logs", exist => {
                            if (exist) {
                                fs.appendFile("./../logs/errors.txt", err, "utf-8")
                            } else {
                                fs.mkdir("./../logs")
                                    .then(() => {
                                        fs.appendFile("./../logs/errors.txt", err, "utf-8")
                                    })
                            }
                        })
                    })
            }
            let categories = db.Category.findAll()
            let fragrances = db.Fragrance.findAll()
            Promise.all([categories,fragrances])
                .then(([categories,fragrances])=>{
                    return res.render("newProduct", { errors: validaciones.mapped(), old: req.body, user: req.session.user,categories,fragrances })
                })
            
        } else {
            return next()
        }
    },
    putProduct: function (req, res, next) {
        let validaciones = validationResult(req)
        if (!validaciones.isEmpty()) {
            
            if (req.file) {
                let directory = path.join(__dirname, "./../../public/img/products_images", req.file.filename)
                fs.unlink(directory)
                    .catch(err => {
                        exists("./../logs", exist => {
                            if (exist) {
                                fs.appendFile("./../logs/errors.txt", err, "utf-8")
                            } else {
                                fs.mkdir("./../logs")
                                    .then(() => {
                                        fs.appendFile("./../logs/errors.txt", err, "utf-8")
                                    })
                            }
                        })
                    })
            }
            let category = db.Category.findAll()
            let fragrance = db.Fragrance.findAll()
            let product =req.foundProductId.dataValues
            Promise.all([category,fragrance,product])
            .then(([category,fragrances,product])=>{
                res.render("editProduct",{product,fragrances,category, user: req.session.user,errors: validaciones.mapped(), old: req.body})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
            } else {
            return next()
        }
    }
}

module.exports = productsMiddlewares