const {validationResult} = require("express-validator")

module.exports=function(req, res, next){
    let validaciones = validationResult(req)
    if(!validaciones.isEmpty()){
        res.render("myAccount",{edit:true,errors : validaciones.mapped(), old : req.body})
    } else {
        next()
    }
}