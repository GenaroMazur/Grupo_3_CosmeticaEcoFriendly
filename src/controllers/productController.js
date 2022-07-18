const fs = require ("fs")
const modelsController = require("./../models/modelsController")

const productController = {
    //pagina de carrito de compras
    productCard: (req, res) => {
        return res.render("productCard",{status :req.session.user})
    },

    //pagina del detalle del producto
    productDetail: (req, res) => {
        let products = modelsController.FnRead("products")
        return res.render("productDetail", { products: products, status :req.session.user })
    },

    //pagina de nuevo producto
    newProduct: (req, res) => {
        res.render("newProduct")
    },

    //pagina edicion de producto
    editProduct: (req, res) => {
        let product = modelsController.FnSearch("products", "id", req.params.idProduct)
        res.render("editProduct", { product: product})
    },
    //Editar un producto
    editProductId: (req, res) => {
        modelsController.FnEdit("products", req)
        res.redirect("/product/editProduct/" + req.params.idProduct)
    },

    //Crear un nuevo producto
    createProduct: function (req, res) {

        let newProduct ={
            id : Date.now(),
            nameProduct : req.body.nameProduct,
            price : req.body.price || 0,
            description : req.body.description,
            grams : req.body.grams,
            fragance : req.body.fragance,
            category : req.body.category,
            image : req.file.filename
        }
        modelsController.FnCreate("products", newProduct)

        res.redirect("/product/DetalleDeProducto")
    },
    //Eliminar un producto
    deleteProduct: function (req, res) {
        let imagen = (modelsController.FnSearch("products","id",req.params.idProduct)).image
        fs.rmSync(__dirname+"./../../public/img/products_images/"+imagen)
        modelsController.FnDelete("products", req.params.idProduct)
        res.redirect("/user/admin")
    },
    usersList: function () {
        return modelsController.FnRead("products")
    }
}

module.exports = productController