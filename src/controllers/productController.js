const fs = require ("fs")
const db = require("../database/models")

const productController = {
    //pagina de carrito de compras
    productCard: (req, res) => {
        return res.render("productCard",{status :req.session.user, user: req.session.user})
    },
    //pagina de catalogo de productos
    catalogoProductos: (req, res) => {
        return res.render("catalogoProductos",{ user: req.session.user})
    },

    //pagina de nuevo producto
    newProduct: (req, res) => {
        res.render("newProduct", {user: req.session.user})
    },

    //----------- database ------------
    createProduct_v2:function(req, res) {
        res.send(req.body)
    },
    productCard_v2:function (req, res) {
        db.Order.findAll()
            .then(cart=>{
                return res.render("productCard",{cart,user: req.session.user})
            })
            .catch(err=>{
                console.error(err);
                return res.redirect("/")
            })
    },
    catalogoProductos_v2: function (req, res){
        let fragrances = db.Fragrance.findAll()
        let products = db.Product.findAll()
        Promise.all([fragrances,products])
            .then(([fragrances,products])=>{
                res.render("catalogoProductos",{products,fragrances, user: req.session.user})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    productDetail_v2: function (req, res){

        db.Product.findByPk(req.params.id) //Buscará el producto por su id
            .then(product=>{
                res.render("productDetail",{products, user: req.sessions.user})
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