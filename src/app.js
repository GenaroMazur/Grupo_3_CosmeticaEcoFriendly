const express = require("express")
const app = express()
const path = require("path")
const routes = require("./routes/index.routes")

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
const session = require("express-session")
const sessionAppMiddleware = require("./middlewares/sessionAppMiddleware")

app.use(session({
    secret:"jabones",
    resave:false,
    saveUninitialized:false
}))
app.use(sessionAppMiddleware)

//Cookie Parser
const cookie = require("cookie-parser")
app.use(cookie())

//inicia el puerto de escucha
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("funcionando en el puerto: " + port)
    if(process.argv[2]){
        console.log("Corriendo el servidor en modo desarrollo")
    }
})

//Importa las rutas
app.use("/", routes)
app.use((req, res, next) => {
    res.status(404).render("not-found")
})
