const path = require("path");
const db = require("../database/models");

const productController = {

    //pagina de carrito de compras
    productCard: (req, res) => {
        let status = req.session.user;
        let user = status;
        return res.render("productCard", { status, user });
    },

    //pagina de catalogo de productos
    catalogoProductos: (req, res) => {
        return res.render("catalogoProductos", { user: req.session.user });
    },

    //pagina de nuevo producto
    newProduct: (req, res) => {
        const fragraces = db.Fragrance.findAll();
        const categories = db.Category.findAll();
        Promise.all([fragraces, categories])
            .then(([fragrances, categories]) => {
                res.render("newProduct", { user: req.session.user, fragrances, categories });
            })
            .catch(err => {
                console.error(err);
                res.redirect("/")
            })
    },

    //logida de creacion de producto
    createProduct: function (req, res) {
        if (req.file) {
            req.body.Image = req.file.filename;
        };
        let dateCreation = new Date();
        let month = dateCreation.getMonth() + 1;
        dateCreation = dateCreation.getFullYear() + "-" + month + "-" + dateCreation.getDate();
        let createdProduct = {
            nameProduct: req.body.nameProduct,
            price: req.body.price,
            descriptionProduct: req.body.descriptionProduct,
            modeOfUse: req.body.modeOfUse,
            ingredients: req.body.ingredients,
            grams: req.body.grams,
            idFragrance: req.body.fragrance,
            idCategory: req.body.category,
            Image: req.body.Image,
            dateCreation: dateCreation
        };

        db.Product.create(createdProduct)
            .then(() => {
                res.redirect("/user/admin");
            })
            .catch(err => {
                console.error(err);
                res.redirect("/");
            });
    },

    //vista de carrito de producto
    productCart: function (req, res) {
        res.render("productCard", { user: req.session.user });
    },

    //vista de catalogo de producto
    catalogoProductos: function (req, res) {
        let fragrances = db.Fragrance.findAll();
        let products = db.Product.findAll();

        Promise.all([fragrances, products])
            .then(([fragrances, products]) => {
                res.render("catalogoProductos", { products, fragrances, user: req.session.user });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //vista de productos favoritos
    favoritos: function (req, res) {
        let fragrances = db.Fragrance.findAll();
        let products = db.Product.findAll();

        Promise.all([fragrances, products])
            .then(([fragrances, products]) => {
                res.render("favoritos", { products, fragrances, user: req.session.user });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //detalle de un producto
    productDetail: function (req, res) {
        let idProduct = req.params.id;

        db.Product.findByPk(idProduct) //Buscará el producto por su id
            .then(product => {
                res.render("productDetail", { product, user: req.session.user });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //vista de edicion de producto
    editProduct: function (req, res) {
        let idProduct = req.params.idProduct
        let category = db.Category.findAll();
        let fragrance = db.Fragrance.findAll();
        let product = db.Product.findByPk(idProduct);

        Promise.all([category, fragrance, product])
            .then(([category, fragrances, product]) => {
                res.render("editProduct", { product, fragrances, category, user: req.session.user });
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //logica para editar un producto
    putProduct: function (req, res) {
        let form = req.body;
        if (req.file) {
            form.Image = req.file.filename;
        };
        let product = req.foundProductId.dataValues;
        let modProduct = product;

        for (let key in product) {
            if (product[key] != form[key] && form[key]) {
                modProduct[key] = form[key];
            };
        };

        db.Product.update(modProduct, {
            where: { id: req.params.idProduct }
        })
            .then(() => {
                res.redirect("/user/admin");
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //logica para la eliminacion de producto
    deleteProduct: function (req, res) {
        let idProduct = req.params.idProduct;

        db.Product.destroy({
            where: { id: idProduct }
        })
            .then(() => {
                res.redirect("/user/admin");
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    //logipa para añadir al carrito (incompleto)
    addToCart: function (req, res) {
        db.User.findByPk(req.session.user.id)
            .then(user => {

                return db.Order.create({
                    idProduct: req.params.id,
                    idUser: req.session.user.id,
                    idDelivery: user.postalCode
                })
            })
        return res.redirect("/product/DetalleDeProducto/2")
    }
}

module.exports = productController