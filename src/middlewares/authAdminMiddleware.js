module.exports = function (req, res, next) {
    if(req.session.user.status == "admin") {
        next()
    } else if(req.session.user.status == "user"){
        res.redirect("/")
    } else {
        res.send("/user/login")
    }
}