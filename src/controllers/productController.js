const path=require("path")

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
    }
}

module.exports=productController