const {body , validationResult} = require ("express-validator")
const path = require ("path")
const fs = require ("fs")

productsMiddlewares={
    validations:[
        body("nameProduct").notEmpty().withMessage("Este campo no puede estar vasio"),
        body("price").notEmpty().withMessage("Este campo no puede estar vasio")
    ],
    product: function (req, res, next) {
        let validaciones = validationResult(req)
        if (!validaciones.isEmpty()) {
            if (req.file) {
                let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
                fs.rmSync(temporals)
            }
            res.render("newProduct", { errors: validaciones.mapped(), old: req.body })
        } else {
            if (req.file) {
                let temporals = path.join(__dirname, "./../../public/img/%temp%", req.file.filename)
                let products_images = path.join(__dirname, "./../../public/img/products_images", req.file.filename)
                fs.renameSync(temporals, products_images)
            }
            next()
        }
    }
}

module.exports=productsMiddlewares