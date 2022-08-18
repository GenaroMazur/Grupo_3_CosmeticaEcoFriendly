const {body} = require("express-validator")
const path = require("path")

module.exports=[
    body("userEmail")
        .notEmpty().withMessage("No puede estar vacio").bail()
        .isEmail().withMessage("Debe ser un correo electronico").bail()
        .custom((value,{req})=>{
            
            let userDb = req.foundUser
            if(userDb && userDb.id != req.foundUserId.id){
                throw new Error("Correo en uso")
            }
            return true
        }),
    body("username").notEmpty().withMessage("No puede estar vacio"),
    body("lastname").notEmpty().withMessage("No puede estar vacio"),
    body("image")
    .custom((value,{req})=>{
        let ext = [".jpg",".jepg",".png"]
        if (req.body.image && !ext.some(extencion => path.extname(req.body.image) == extencion) ){
            throw new Error ("Solo se aceptan formatos JPG, JEPG o PNG")
        }
    
        return true
    })
]