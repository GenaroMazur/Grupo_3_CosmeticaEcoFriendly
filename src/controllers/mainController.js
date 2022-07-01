const modelsController = require("./../models/modelsController")
const mainController = {

     //pagina de inicio
     index: (req, res) => {
          let products = modelsController.FnRead("products")
          return res.render('index', { title:"home",products: products })
     },

     //pagina de nosotros
     nosotros: (req, res) => {
          return res.render('nosotros',{title:"nosotros"})
     },

     //pagina de contacto
     contacto: (req, res) => {
          return res.render('contacto',{title:"contacto"})
     }
}

module.exports = mainController