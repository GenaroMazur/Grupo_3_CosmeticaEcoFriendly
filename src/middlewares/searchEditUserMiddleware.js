const User = require("./../database/models").User

module.exports = function (req, res, next){
    User.findByPk(req.params.id,{include:[{association:"status"}]})
    .then(user => {
        req.foundUserId = user.dataValues
        return next()
    })
}