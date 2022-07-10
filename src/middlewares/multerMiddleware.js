const multer= require ("multer")
const path=require ("path")

multerMiddleware = {
    usersImage:function(){
        const config = multer.diskStorage({
            destination:(req,file,cb)=>{
                let destino = path.join(__dirname,"./../../public/img/%temp%")
                cb(null,destino)
            },
            filename:(req,file,cb)=>{
                let filename=req.body.username+req.body.lastname+Date.now()+path.extname(file.originalname)
                cb(null,filename)
            }
        })
        const upload = multer({storage:config})
        return upload
    }
}

module.exports=multerMiddleware