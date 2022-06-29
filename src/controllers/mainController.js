const modelsController=require("./../models/modelsController")
const mainController={

    //pagina de inicio
     index:(req,res)=>{
          let products=modelsController.FnRead("products")
     return res.render('index',{products:products})
     },

    //pagina de nosotros
     nosotros:(req,res)=>{
          return res.render('nosotros')
     },

    //pagina de contacto
     contacto:(req,res)=>{
          return res.render('contacto')
     }
}

module.exports=mainController