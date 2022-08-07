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
    userController.userPanel);
routes.get("/myAccount/:idUser",
    userMiddlewares.account,
    userController.myAccount);
routes.get("/editAccount/:idUser",
    authGuestMiddleware,
    userController.editAccount);

//POST
routes.post("/registro",
    maintainMiddleware,
    multerMiddleware.usersImage().single("image"),
    userMiddlewares.validationsCreate,
    userMiddlewares.register,
    userController.create);
routes.post("/login",
    userMiddlewares.validationsLogin,
    userMiddlewares.login,
    userController.loginUser);
    
    //PUT
    
    //DELETE
routes.delete("/delete/:idUser",
    maintainMiddleware,
    userController.delete);
module.exports = routes