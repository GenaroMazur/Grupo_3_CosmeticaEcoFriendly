module.exports = function (req, res, next) {
    let status = req.session.user.status
    if (  status == "user" || status == "admin") {
        next()
    } else {
        res.redirect("/user/login")
    }
}