const express=require("express")
const routes=express.Router()
const multer=require("multer")
const path=require("path")

//Configurar el multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        let direction=path.join(__dirname,"./../../public/img/products_images")
        cb(null,direction)
    },
    filename:(req,file,cb)=>{
        let filename="pruct_"+productController.usersList().length+path.extname(file.originalname)
        cb(null,filename)
    }
})
const upload=multer({storage})

//importa controlador
const productController=require("./../controllers/productController")

//GET
routes.get("/CarritoDeCompras",productController.productCard)
routes.get("/DetalleDeProducto",productController.productDetail)
routes.get("/newProduct",productController.newProduct)
routes.get("/editProduct",productController.editProduct)

//POST
routes.post("/newProduct",upload.single("productImg"),productController.createProduct)

//PUT

//DELETE

module.exports=routes