
const db = require("./../database/models")
const mainController = {

     //pagina de inicio
     index: function (req, res) {
          let user = req.session.user
          db.Product.findAll()
               .then(products => {
                    res.render("index", { products, user })
               })
               .catch(err => {

                    console.log(err);
                    res.render("maintain", { user })
               })
     },

     //pagina de nosotros
     nosotros: (req, res) => {
          let status = req.session.user
          let user = status
          return res.render('nosotros', { status, user })
     },

     //pagina de contacto
     contacto: (req, res) => {
          let status = req.session.user
          let user = status
          return res.render('contacto', { status, user })
     },

}

module.exports = mainController