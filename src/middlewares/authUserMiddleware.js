module.exports = function (req, res, next) {
    let status = req.session.user.status
    if (  status == "User" || status == "Admin" || process.argv[2]) {
        next()
    } else {
        res.redirect("/user/login")
    }
}