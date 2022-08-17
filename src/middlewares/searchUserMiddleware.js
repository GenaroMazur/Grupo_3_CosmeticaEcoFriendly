const User = require("./../database/models").User

module.exports=function (req, res, next){
    if(req.body.userEmail){

        User.findOne({include:[{association:"status"}],where:{email:req.body.userEmail}})
        .then(user=>{
            if(user != null){
                req.foundUser = user.dataValues
            console.log(req.foundUser);
        }
        return next()
    })
    .catch(err=>{
        console.error(err);
    })
} else {
    next()
}
}