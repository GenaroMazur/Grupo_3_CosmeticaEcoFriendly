const path=require("path")
const modelsController=require("./../models/modelsController")

const userController={

    //pagina de login
    login: (req,res) =>{
        return res.render("login")
    },

    //pagina de registro
    register: (req,res) =>{
        return res.render("register")
    },

    //panel de administrador
    admin: (req, res) => {
        let productsJson=modelsController.FnRead("products")

        return res.render("admin",{products:productsJson})
    },

    //Crear usuario
    create:function (req,res) {
        
        let usersJson=modelsController.FnRead("users")

        let coincidence=modelsController.FnSearch(usersJson,"username",req.body.username) || false;

        if (!coincidence){
            
            let newUser=new function(username , password , email){
                this.username=req.body.username
                this.password=req.body.password
                this.email=req.body.email
            }

            modelsController.FnCreate(usersJson,newUser)
            modelsController.FnSave("users",usersJson)

            res.redirect("/")
        } else {
            res.redirect("/user/registro")
        }
    },

    //Eliminar usuario
    delete:function(req,res) {
        let usersJson=modelsController.FnRead("users")
        let coincidence=modelsController.FnSearch(usersJson,"username",req.body.username)

        if (coincidence) {
            //se encontro usuario
            let filtered=modelsController.FnDelete(usersJson,req.body)
            modelsController.FnSave("users",filtered)
            res.redirect("/")
        }else{
            //No se encontro usuario
        }
    }
}

module.exports=userController