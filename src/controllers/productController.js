const path=require("path")
const modelsController=require("./../models/modelsController")

const productController={

    //pagina de carrito de compras
    productCard:(req,res)=>{
        return res.render("productCard")
    },

    //pagina del detalle del producto
    productDetail:(req,res)=>{
        return res.render("productDetail")
    },

    //pagina de nuevo producto
    newProduct:(req,res)=>{
        res.render("newProduct")
    },

    //pagina edicion de producto
    editProduct:(req,res)=>{
        res.render("editProduct")
    },

    //Crear un nuevo producto
    createProduct:function(req,res) {

        let productsJson=modelsController.FnRead("products")
        let coincidence=modelsController.FnSearch(productsJson,"nameProduct",req.body.nameProduct).object || false;

        if ( coincidence ) {
        //Crea un producto si no esta previamente
            let newProduct=new function(){
                this.nameProduct=req.body.nameProduct
                this.description=req.body.description
                this.productImg=req.file.filename|| null
                this.category=req.body.category
                this.price=req.body.price || 0
            }
            modelsController.FnCreate(productsJson,newProduct)
            modelsController.FnSave("products",productsJson)

            res.redirect("/product/DetalleDeProducto")
        } else {
        //no hace nada
            res.redirect("/product/newProduct")
        }
    }
}

module.exports=productController