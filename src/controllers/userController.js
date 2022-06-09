const path=require("path")

const userController={

    //pagina de login
    login:(req,res)=>{
         return res.render("login")
    },

    //pagina de registro
    register:(req,res)=>{
        return res.render("register")
    }
}

module.exports=userController