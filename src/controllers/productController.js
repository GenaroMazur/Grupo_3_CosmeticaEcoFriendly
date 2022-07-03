const res = require("express/lib/response")
const path = require("path")
const modelsController = require("./../models/modelsController")

const productController = {
    //pagina de carrito de compras
    productCard: (req, res) => {
        return res.render("productCard")
    },

    //pagina del detalle del producto
    productDetail: (req, res) => {
        let products = modelsController.FnRead("products")
        return res.render("productDetail", { products: products })
    },

    //pagina de nuevo producto
    newProduct: (req, res) => {
        res.render("newProduct",{title:"newProduct"})
    },

    //pagina edicion de producto
    editProduct: (req, res) => {
        let productsJson = modelsController.FnRead("products")
        let product = modelsController.FnSearch(productsJson, "id", req.params.idProduct)
        res.render("editProduct", { product: product })
    },
    //Editar un producto
    editProductId: (req, res) => {
        modelsController.FnEdit("products", req)
        res.redirect("/product/editProduct/" + req.params.idProduct)
    },

    //Crear un nuevo producto
    createProduct: function (req, res) {

        let newProduct = new function () {
            this.id = Date.now()
            this.nameProduct = req.body.nameProduct
            this.price = req.body.price || 0
            this.description = req.body.description
            this.grams = req.body.grams
            this.fragance = req.body.fragance
            this.category = req.body.category
            this.image = req.file.filename
        }
        modelsController.FnCreate("products", newProduct)

        res.redirect("/product/DetalleDeProducto")
    },
    //Eliminar un producto
    deleteProduct: function (req, res) {
        modelsController.FnDelete("products", req.params.idProduct)
        res.redirect("/user/admin")
    },
    usersList: function () {
        return modelsController.FnRead("products")
    }
}

module.exports = productController