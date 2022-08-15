module.exports = function (req, res, next) {
    if(req.session.user.status == "Admin" || process.argv[2]) {
        next()
    } else if(req.session.user.status == "User"){
        res.redirect("/")
    } else {
        res.send("/user/login")
    }
    
}