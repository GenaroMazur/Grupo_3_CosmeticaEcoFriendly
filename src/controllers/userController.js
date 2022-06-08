const path=require("path")

const userController={

    //pagina de login
    login:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/login.html"))
    },

    //pagina de registro
    register:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/register.html"))
    }
}

module.exports=userController