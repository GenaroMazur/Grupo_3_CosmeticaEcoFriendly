const fs = require ("fs")
const db = require("../database/models")
const modelsController = require("./../models/modelsController")

const productController = {
    //pagina de carrito de compras
    productCard: (req, res) => {
        return res.render("productCard",{status :req.session.user, user: req.session.user})
    },
    //pagina de catalogo de productos
    catalogoProductos: (req, res) => {
        return res.render("catalogoProductos",{ user: req.session.user})
    },
    //pagina del detalle del producto
    productDetail: (req, res) => {
        let products = modelsController.FnRead("products")
        return res.render("productDetail", { products: products, status :req.session.user })
    },

    //pagina de nuevo producto
    newProduct: (req, res) => {
        res.render("newProduct", {user: req.session.user})
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
        modelsController.FnCreate("products", {newProduct, user: req.session.user})

        res.redirect("/product/DetalleDeProducto")
    },
    //Eliminar un producto
    deleteProduct: function (req, res) {
        let imagen = (modelsController.FnSearch("products","id",req.params.idProduct)).image
        fs.rmSync(__dirname+"./../../public/img/products_images/"+imagen)
        modelsController.FnDelete("products", req.params.idProduct)
        res.redirect("/user/admin")
    },

    //----------- database ------------
    createProduct_v2:function(req, res) {
        
    },
    productCard_v2:function (req, res) {
        db.Order.findAll()
            .then(cart=>{
                return res.render("productCard",cart)
            })
            .catch(err=>{
                console.error(err);
                return res.redirect("/")
            })
    },
    catalogoProductos_v2: function (req, res){
        db.Product.findAll()
            .then(products=>{
                res.render("catalogoProductos",{products, user: req.session.user})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    productDetail_v2: function (req, res){

        db.Product.findByPk(req.params.id) //Buscará el producto por su id
            .then(product=>{
                res.render("productDetail",{product:product})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    editProduct_v2: function (req, res) {
        db.Product.findByPk(req.params.idProduct)
            .then(product=>{
                res.render("editProduct",{product, user: req.session.user})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    editProductId_v2: function (req, res) {
        db.Product.update({
            nameProduct : req.body.nameProduct,
            price : req.body.price || 0,
            description : req.body.description,
            grams : req.body.grams,
            image : req.file.filename
        },{
            where:{
                id:req.params.idProduct
            }
        }).then(()=>{
            res.redirect("/user/admin")
        })
        .catch(err=>{
            console.log(err);
            res.redirect("/")
        })
    },
    deleteProduct_v2: function(req, res){
        db.Product.destroy({
            where:{
                id:req.params.idProduct
            }
        })
        .then(()=>{
            res.redirect("/user/admin")
        })
        .catch(err=>{
            console.log(err);
            res.redirect("/")
        })
    }
}

module.exports = productController