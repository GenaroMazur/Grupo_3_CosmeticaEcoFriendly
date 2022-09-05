const product = require("./../database/models").Product

module.exports=function(req,res,next){
    product.findByPk(req.params.idProduct)
        .then(product=>{
            req.foundProductId=product
            next()
        })
        .catch(err=>{
            console.log(err);
            res.redirect("/")
        })
}