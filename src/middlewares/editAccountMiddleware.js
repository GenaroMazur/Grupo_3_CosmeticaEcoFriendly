const {validationResult} = require("express-validator")
const User = require("./../database/models").User
const fs = require("fs/promises")
const path = require("path")

module.exports=function(req, res, next){
    let validaciones = validationResult(req)
        if(!validaciones.isEmpty()){
            if (req.file) {
                let directory = path.join(__dirname, "./../../public/img/users_images", req.file.filename)
                fs.unlink(directory)
                    .catch(err=>{
                        exists("./../logs",exist=>{
                            if(exist){
                                fs.appendFile("./../logs/erros.txt",err,"utf-8")
                            } else {
                                fs.mkdir("./../logs")
                                    .then(()=>{
                                        fs.appendFile("./../logs/erros.txt",err,"utf-8")
                                    })
                            }
                        })
                    })
            }
            let user = req.foundUserId
            res.render("myAccount",{edit:true,errors : validaciones.mapped(), old : req.body,user})
        } else {
            next()
        }
}