const path=require("path")

const mainController={

    //pagina de inicio
    home:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/index.html"))
    },

    //pagina de nosotros
    nosotros:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/nosotros.html"))
    },

    //pagina de contacto
    contacto:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/contacto.html"))
    }
}

module.exports=mainController