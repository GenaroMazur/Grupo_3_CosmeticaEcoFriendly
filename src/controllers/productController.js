const path=require("path")

const productController={

    //pagina de carrito de compras
    productCard:(req,res)=>{
         return res.render("productCard")
    },

    //pagina del detalle del producto
    productDetail:(req,res)=>{
         return res.render("productDetail")
    }
}

module.exports=productController