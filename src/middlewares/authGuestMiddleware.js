module.exports = function (req, res, next) {
    let status = req.session.user.status;
    if ( status == "guest" || status == "admin") {
        return next ();
    } else {
        return res.redirect("/");
    }
}