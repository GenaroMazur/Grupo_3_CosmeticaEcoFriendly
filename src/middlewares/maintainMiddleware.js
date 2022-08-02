module.exports= (req, res, next) => {
    if(process.argv[2]){
        return next();
    };
    return res.render("maintain");
}