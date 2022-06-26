const res = require("express/lib/response")
const path = require("path")
const modelsController = require("./../models/modelsController")

const productController = {
    
    deleteProduct:function(req,res){
        let productsJson = modelsController.FnRead("products")
        let object=modelsController.FnSearch(productsJson,"id",req.params.idProduct)
        let arrayFilter=modelsController.FnDelete(productsJson,object)
        modelsController.FnSave("products",arrayFilter)
    },
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
        let productsJson = modelsController.FnRead("products")
        let product = modelsController.FnSearch(productsJson, "id", req.params.idProduct)
        res.render("editProduct", { product: product })
    },
    editProductId: (req, res) => {
        
        let productsJson = modelsController.FnRead("products")
        productsJson.map(product => {
            if (product.id == req.params.idProduct) {
                for (let property in product) {
                    if (property != "id" && property!="image") {
                        if (product[property] != req.body[property]) {
                            product[property] = req.body[property]
                        }
                    }
                }
                return product
            }
        })
        modelsController.FnSave("products",productsJson)
        res.redirect("/product/editProduct/"+req.params.idProduct)
    },

    //Crear un nuevo producto
    createProduct: function (req, res) {

        let productsJson = modelsController.FnRead("products")

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
        modelsController.FnCreate(productsJson, newProduct)
        modelsController.FnSave("products", productsJson)

        res.redirect("/product/DetalleDeProducto")
    },
    usersList: function () {
        return modelsController.FnRead("products")
    }
}

module.exports = productController