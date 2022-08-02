module.exports = function (req, res, next) {
    if(req.session.user.status == "admin" || process.argv[2]) {
        next()
    } else if(req.session.user.status == "user"){
        res.redirect("/")
    } else {
        res.send("/user/login")
    }
    
}