const db = require("./../database/models");
const path = require("path");
apisController = {
        //_________APIS__________
    //api para enviar usuarios
    apiGetUsers: async function (req, res) {
        try {

            let users = [];
            let responseDb = await db.User.findAll({
                attributes: ["id", "userName", "email"]
            });

            responseDb.map(user => {
                users.push(user.dataValues)
            });

            users = users.map(user => {
                user.detail = "localhost:8080/api/users/" + user.id;
                return user
            });
            let response = {
                count: users.length,
                users
            };
            return res.status(200).json(response);

        } catch (err) {

            console.error(err);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde");
        };
    },

    //api envia detalle de un usuario
    apiGetUserById: async function (req, res) {
        try {
            let user = await db.User.findByPk(req.params.idUser, {
                attributes: { exclude: ["passwordUser", "idStatusUser", "postalCode", "telephone", "direction"] }
            });

            user = user.dataValues;
            user.image = "localhost:8080/api/users/image/" + user.image;

            return res.status(200).json(user);

        } catch (error) {

            console.error(error);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde");
        };
    },

    //envia la imagen del detalle del usuario
    apiShowUserImage: function (req, res) {
        let image = path.join(__dirname, "./../../public/img/users_images/", req.params.image);
        return res.sendFile(image);
    },
    //_________________APIS________________
    //Envia todos los productos
    apiGetProducts: async function (req, res) {
        try {
            let productDb = await db.Product.findAll({
                include: [{ association: "category", attributes: { exclude: ["id", "image"] } }],
                attributes: ["id", "nameProduct"]
            });
            let products = [];
            let categories = {};

            productDb.map(producto => {
                products.push(producto.dataValues);
            });

            products = products.map(product => {

                if (categories[product.category.dataValues.categoryName] == undefined) {
                    categories[product.category.dataValues.categoryName] = 1;
                } else {
                    categories[product.category.dataValues.categoryName]++;
                };

                product.detail = "localhost:8080/api/products/" + product.id;
                return product
            });
            let response = {
                count: products.length,
                countByCategory: categories,
                products
            };

            return res.status(200).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde");
        };
    },

    //envia informacion de un producto
    apiGetProductById: async function (req, res) {
        try {
            let product = await db.Product.findByPk(req.params.idProduct, {
                include: [{ association: "category", attributes: { exclude: ["id", "image"] } }, { association: "fragrance", attributes: { exclude: ["id"] } }],
                attributes: { exclude: ["idCategory", "idFragrance"] }
            });
            product = product.dataValues;
            product.Image = "localhost:8080/api/products/image/" + product.Image;

            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Opps, no se pudo realizar la solicitud.\n Intente mas tarde");
        };
    },

    //envia la imagen de un producto
    apiShowProductImage: function (req, res) {
        let imagen = path.join(__dirname, "./../../public/img/products_images/", req.params.image);
        return res.sendFile(imagen);
    }
}

module.exports=apisController