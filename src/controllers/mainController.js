const path=require("path")

const mainController={

    home:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/index.html"))
    },

    nosotros:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/nosotros.html"))
    },

    contacto:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/contacto.html"))
    }
}

module.exports=mainController