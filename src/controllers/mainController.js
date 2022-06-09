const path=require("path")

const mainController={

    //pagina de inicio
    index:(req,res)=>{
         return res.render('index')
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