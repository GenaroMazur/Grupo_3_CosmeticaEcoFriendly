module.exports = function (req, res, next) {
    let status = req.session.user.status;
    if ( status == "guest" || status == "Admin" || process.argv[2]) {
        return next ();
    } else {
        return res.redirect("/");
    }
}