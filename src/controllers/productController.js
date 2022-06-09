const path=require("path")

const productController={

    //pagina de carrito de compras
    productCard:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/productCard.html"))
    },

    //pagina del detalle del producto
    productDetail:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/productDetail.html"))
    },

    //pagina de nuevo producto
    newProduct:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/newProduct.html"))
    },

    //pagina edicion de producto
    editProduct:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/editProduct.html"))
    }
}

module.exports=productController