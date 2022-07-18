const modelsController = require("./../models/modelsController")
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
     }
}

module.exports = mainController