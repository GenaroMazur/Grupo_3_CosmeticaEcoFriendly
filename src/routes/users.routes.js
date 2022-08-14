const express = require("express");
const routes = express.Router();

//importa controlador
const userController = require("./../controllers/userController");

//importar middlewares
const userMiddlewares = require("./../middlewares/userMiddlewares");
const multerMiddleware = require("./../middlewares/multerMiddleware");
const authAdminMiddleware = require ("./../middlewares/authAdminMiddleware");
const authUserMiddleware = require ("./../middlewares/authUserMiddleware");
const authGuestMiddleware = require ("./../middlewares/authGuestMiddleware");
const maintainMiddleware = require ("./../middlewares/maintainMiddleware");

//GET
routes.get("/login",
    authGuestMiddleware, 
    userController.login);
routes.get("/un-login",
    authUserMiddleware,
    userController.unlogin);
routes.get("/registro",
    authGuestMiddleware, 
    userController.register);
routes.get("/admin",
    authAdminMiddleware,
    userController.admin_v2);
routes.get("/userPanel",
    authAdminMiddleware,
    userController.userPanel_v2);
routes.get("/myAccount/:id",
    userMiddlewares.account_v2,
    userController.myAccount_v2);
routes.get("/editAccount/:id",
    authUserMiddleware,
    userController.editAccount_v2);

//POST
routes.post("/registro",
    maintainMiddleware,
    multerMiddleware.usersImage().single("image"),
    userMiddlewares.validationsCreate,
    userMiddlewares.register,
    userController.create_v2);
routes.post("/login",
    userMiddlewares.validationsLogin_v2,
    userMiddlewares.login,
    userController.loginUser_v2);
    
//PUT
    
//DELETE
routes.delete("/delete/:idUser",
    maintainMiddleware,
    userController.delete_v2);
    
module.exports = routes