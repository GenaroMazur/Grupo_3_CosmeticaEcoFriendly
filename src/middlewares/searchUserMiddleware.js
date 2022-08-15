const User = require("./../database/models").User

module.exports=function (req, res, next){
    User.findOne({include:[{association:"status"}],where:{email:req.body.userEmail}})
    .then(user=>{
        if(user != null){
            req.foundUser = user.dataValues
            console.log(req.foundUser.status);
        }
        return next()
    })
    .catch(err=>{
        console.error(err);
    })
}