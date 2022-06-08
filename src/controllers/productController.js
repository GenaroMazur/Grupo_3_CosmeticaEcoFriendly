const path=require("path")

const productController={

    productCard:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/productCard.html"))
    },

    productDetail:(req,res)=>{
        res.sendFile(path.join(__dirname,"./../views/productDetail.html"))
    }
}

module.exports=productController