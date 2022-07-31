const { body, validationResult } = require("express-validator")
const path = require("path")
const fs = require("fs/promises")
const { exists } = require("fs")

productsMiddlewares = {
    validations: [
        body("nameProduct")
            .notEmpty().withMessage("Este campo no puede estar vacio"),
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

            return res.render("newProduct", { errors: validaciones.mapped(), old: req.body })
        } else {
            return next()
        }
    },
    maintain:(req, res)=>{
        res.render("maintain")
    }
}

module.exports = productsMiddlewares