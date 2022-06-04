const express= require("express");
const path=require("path")
const controller = require("../controller/controller")

const routes= express.Router()

//rutas
routes.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})
routes.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})
routes.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
routes.get("/CarritoDeCompras",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productCard.html"))
})
routes.get("/DetalleDeProducto",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"))
})

module.exports = routes