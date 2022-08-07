const modelsController = require("./../models/modelsController")
const db = require("./../database/models")
const mainController = {

     //pagina de inicio
     index: (req, res) => {
          let products = modelsController.FnRead("products")
          return res.render('index', {products: products , user :req.session.user})
     },

     //pagina de nosotros
     nosotros: (req, res) => {
          return res.render('nosotros',{status :req.session.user})
     },

     //pagina de contacto
     contacto: (req, res) => {
          return res.render('contacto',{status :req.session.user})
     },

     //---------- database ------------

     index_v2: function (req, res) {
          db.Product.findAll()
               .then(products=>{
                    res.render("index",{products,user:req.session.user})
               })
               .catch(err=>{
                    console.log(err);
                    res.render("maintain")
               })
     }
}

module.exports = mainController