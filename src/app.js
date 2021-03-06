const express = require("express")
const app = express()
const path = require("path")
const session = require("express-session")
const cookie = require("cookie-parser")

//utiliza la carpeta public
const directory = path.join(__dirname, "./../public")
app.use(express.static(directory))

//Indicar que capture datos de forms
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Method Override
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

//motor de plantilla utilizado
app.set('views', __dirname + '/views')
app.set("view engine", "ejs")

//express session
app.use(session({
    secret:"jabones",
    resave:false,
    saveUninitialized:false
}))
app.use((req, res, next)=> {
    if (req.cookies && req.session.user == undefined) {
        req.session.user = req.cookies.remember
    } else if (req.cookies == undefined && req.session.user == undefined) {
        req.session.user = {status : "guest"}
    }
    next()
})

//Cookie Parser
app.use(cookie())

//inicia el puerto de escucha
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("funcionando en el puerto: " + port)
})

//Importa las rutas
const routes = require("./routes/index.routes")
const cookieParser = require("cookie-parser")
app.use("/", routes)
app.use((req, res, next) => {
    res.status(404).render("not-found")
})
