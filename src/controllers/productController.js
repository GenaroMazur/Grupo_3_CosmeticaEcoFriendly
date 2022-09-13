const fs = require ("fs")
const path = require("path")
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
        const fragraces = db.Fragrance.findAll()
        const categories = db.Category.findAll()
        Promise.all([fragraces,categories])
        .then(([fragrances,categories])=>{
            res.render("newProduct", {user: req.session.user,fragrances,categories})
        })
    },

    //----------- database ------------
    createProduct_v2:function(req, res) {
        if (req.file){
            req.body.Image = req.file.filename
        }
        let dateCreation=new Date()
        let month=dateCreation.getMonth()+1
        dateCreation=dateCreation.getFullYear()+"-"+month+"-"+dateCreation.getDate()
        db.Product.create({
            nameProduct:req.body.nameProduct,
            price:req.body.price,
            descriptionProduct:req.body.descriptionProduct,
            modeOfUse:req.body.modeOfUse,
            ingredients:req.body.ingredients,
            grams:req.body.grams,
            idFragrance:req.body.fragrance,
            idCategory:req.body.category,
            Image:req.body.Image,
            dateCreation:dateCreation
        })
        res.redirect("/user/admin")
    },
    productCart_v2:function (req, res) {
        res.render("productCard",{user:req.session.user})
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
    favoritos_v2: function (req, res){
        let fragrances = db.Fragrance.findAll()
        let products = db.Product.findAll()
        Promise.all([fragrances,products])
            .then(([fragrances,products])=>{
                res.render("favoritos",{products,fragrances, user: req.session.user})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    productDetail_v2: function (req, res){

        db.Product.findByPk(req.params.id) //Buscará el producto por su id
            .then(product=>{
                res.render("productDetail",{product, user: req.session.user})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    editProduct_v2: function (req, res) {
        let category = db.Category.findAll()
        let fragrance = db.Fragrance.findAll()
        let product =db.Product.findByPk(req.params.idProduct)
        Promise.all([category,fragrance,product])
            .then(([category,fragrances,product])=>{
                res.render("editProduct",{product,fragrances,category, user: req.session.user})
            })
            .catch(err=>{
                console.log(err);
                res.redirect("/")
            })
    },
    editProductId_v2: function (req, res) {
        let form = req.body
        if (req.file){
            form.Image = req.file.filename
        }
        let product = req.foundProductId.dataValues
        let productDb = product
        for(let key in product){
            if (product[key] != form[key] && form[key]){
                productDb[key] = form[key]
            }
        }
        db.Product.update(productDb,{where:{id:req.params.idProduct}
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
    },
    addToCart: function(req, res){
        db.User.findByPk(req.session.user.id)
        .then(user=>{
            
        return db.Order.create({
                idProduct:req.params.id,
                idUser:req.session.user.id,
                idDelivery:user.postalCode
            })
        })
        return res.redirect("/product/DetalleDeProducto/2")
    },
    apiGetProducts: async function(req, res) {
        try {
            let product = await db.Product.findAll({
                include:[{association:"category", attributes:{exclude:["id","image"]}}],
                attributes:["id", "nameProduct"]
            })
            let products = []
            let categories = {}
            product.map(producto=>{
                products.push(producto.dataValues)
            })
            products = products.map(product=>{
                if (categories[product.category.dataValues.categoryName] == undefined){
                    categories[product.category.dataValues.categoryName]=1  
                } else {
                    categories[product.category.dataValues.categoryName] ++
                }
                product.detail ="localhost:8080/api/products/"+product.id
                return product
            })
            let response = {
                count : products.length,
                countByCategory : categories,
                products
            }
    
            return res.status(200).json(response)
        } catch (error) {
            console.error(error);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde")
        }
        
    },
    apiGetProductById : async function(req, res) {
        try {
            let product = await db.Product.findByPk(req.params.idProduct,{
                include:[{association:"category",attributes:{exclude:["id","image"]}},{association:"fragrance",attributes:{exclude:["id"]}}],
                attributes:{exclude:["idCategory","idFragrance"]}
            })
            product = product.dataValues
            product.Image = "localhost:8080/api/products/image/"+product.Image
            return res.status(200).json(product)
        } catch (error) {
            console.error(error);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde")
        }
    },
    apiShowProductImage: function (req, res) {
        let imagen = path.join(__dirname,"./../../public/img/products_images/",req.params.image)
        return res.sendFile(imagen)
    }
}

module.exports = productController