const {validationResult} = require("express-validator")
const User = require("./../database/models").User

module.exports=function(req, res, next){
    let validaciones = validationResult(req)
        if(!validaciones.isEmpty()){
            let user = req.foundUserId
            res.render("myAccount",{edit:true,errors : validaciones.mapped(), old : req.body,user})
        } else {
            next()
        }
}