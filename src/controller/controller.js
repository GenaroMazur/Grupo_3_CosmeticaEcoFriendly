const path = require("path")
const controller = {

    index: (req,res)=>{
        res.sendFile(path.join(__dirname,"/views/index.html"))
    }),
    login: (req,res)=>{
        res.sendFile(path.join(__dirname,"/views/login.html"))
    }),
    productCard:(req,res)=>{
        res.sendFile(path.join(__dirname,"/views/productCard.html"))
    })
    productDetail:(req,res)=>{
        res.sendFile(path.join(__dirname,"/views/productDetail.html"))
    })
    register: (req,res)=>{
        res.sendFile(path.join(__dirname,"/views/register.html"))
    })
}

module.exports = controller;