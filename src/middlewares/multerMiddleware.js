//importa el multer
const multer= require ("multer")
//importa el path
const path=require ("path")

multerMiddleware = {
    
    //Guardado de archivos para los USUARIOS
    usersImage:function(){
        const config = multer.diskStorage({
            destination:(req,file,cb)=>{
                let destino = path.join(__dirname,"./../../public/img/users_images")
                cb(null,destino)
            },
            filename:(req,file,cb)=>{
                let filename=req.body.name+req.body.lastname+path.extname(file.originalname)
                cb(null,filename)
            }
        })
        const upload = multer({
            storage:config,
            fileFilter:(req, file, cb)=>{
                req.body.image=file.originalname
                let ext = [".jpg", ".jepg", ".png"]
                if (ext.some(extencion => path.extname(file.originalname)==extencion)) {
                    cb(null,true)
                } else {
                    cb(null,false)
                }
            }
        })
        return upload
    },
    
    //Guardado de archivos para los PRODUCTOS
    productsImage:function(){
        const config = multer.diskStorage({
            destination:(req,file,cb)=>{
                let destino = path.join(__dirname,"./../../public/img/products_images")
                cb(null,destino)
            },
            filename:(req,file,cb)=>{
                let filename=req.body.category+"_"+Date.now()+path.extname(file.originalname)
                cb(null,filename)
            }
        })
        const upload = multer({
            storage:config,
            fileFilter:(req, file, cb)=>{
                let ext = [".jpg", ".jepg", ".png"]
                req.body.image=file.originalname
                if (ext.some(extencion => path.extname(file.originalname)==extencion)) {
                    cb(null,true)
                } else {
                    cb(null,false)
                }
            },
        })
        return upload
    }
}

module.exports=multerMiddleware