module.exports=function (req, res, next){
    if (process.argv[2] && req.session.user == undefined) {
        req.session.user = {
            "id": 1,
            "username":"desarrollador",
            "status":"admin"
        }
    }
    if (req.cookies && req.session.user == undefined) {
        req.session.user = req.cookies.remember
    } else if (req.cookies == undefined && req.session.user == undefined) {
        req.session.user = {status : "guest"}
        req.session.user.image="default.jpg"
    }
    return next()
}