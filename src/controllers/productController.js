const path = require("path")
const modelsController = require("./../models/modelsController")

const productController = {

    //pagina de carrito de compras
    productCard: (req, res) => {
        return res.render("productCard")
    },

    //pagina del detalle del producto
    productDetail: (req, res) => {
        return res.render("productDetail")
    },

    //pagina de nuevo producto
    newProduct: (req, res) => {
        res.render("newProduct")
    },

    //pagina edicion de producto
    editProduct: (req, res) => {
        res.render("editProduct")
    },

    //Crear un nuevo producto
    createProduct: function (req, res) {

        let productsJson = modelsController.FnRead("products")

        let newProduct = new function () {
            this.id=Date.now()
            this.nameProduct = req.body.nameProduct
            this.price = req.body.price || 0
            this.description = req.body.description
            this.grams=req.body.grams
            this.fragance=req.body.fragance
            this.category = req.body.category
            this.image = req.file.filename
        }
        modelsController.FnCreate(productsJson, newProduct)
        modelsController.FnSave("products", productsJson)

        res.redirect("/product/DetalleDeProducto")
    },
    usersList: function () {
        return modelsController.FnRead("products")
    }
}

module.exports = productController