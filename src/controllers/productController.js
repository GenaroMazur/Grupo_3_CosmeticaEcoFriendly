const path=require("path")

const productController={

    //pagina de carrito de compras
    productCard:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/productCard.html"))
    },

    //pagina del detalle del producto
    productDetail:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/productDetail.html"))
    }
}

module.exports=productController