const path = require("path")
const fs = require("fs")

const modelsController = {
    //Guardar JSON
    //Ingresar como parametro el nombre del archivo JSON sin extencion y el array a guardar
    FnSave: function (nameArchive, array) {
        let _string = JSON.stringify(array)
        fs.writeFileSync(path.join(__dirname, nameArchive + ".JSON"), _string, "utf-8")
    },
    //buscar Datos Dentro de JSON
    //ingresar Array de donde buscar, propiedad que se debe leer, elemento a buscar
    FnSearch: function (array, _properti, identifier) {
        return array.find(element => {
            if (element[_properti] == identifier) {
                let found =element
                return found
            }
        })
    },

    //leer JSON
    //Ingresar como parametro el nombre del archivo JSON sin extencion
    FnRead: function (nameArchive) {
        let _JSON = fs.readFileSync(path.join(__dirname, nameArchive + ".JSON"), "utf-8")
        let array
        if (_JSON == "") {
            array = []
        } else {
            array = JSON.parse(_JSON)
        }
        return array
    },

    //Editar Datos dentro de un JSON
    //Ingresar nombre del archivo JSON,ingresar pedido (Request)
    FnEdit: function (nameArchive, req) {
        let array = this.FnRead(nameArchive)
        array.map(element => {
            if (element.id == req.params.idProduct) {
                for (let property in element) {
                    if (property != "id" && property != "image") {
                        if (element[property] != req.body[property]) {
                            element[property] = req.body[property]
                        }
                    }
                }
                return element
            }
        })
        this.FnSave(nameArchive, array)
    },

    //Crea datos dentro de JSON
    //Ingresar nombre del archivo JSON sin extencion, Ingresar objeto nuevo
    FnCreate: function (nameArchive, object) {
        let array = this.FnRead(nameArchive)
        array.push(object)
        this.FnSave(nameArchive)
    },

    //Elimina datos dentro de un JSON
    //Ingresar Array donde eliminar el objeto, ingresar pedido(request)
    FnDelete: function (nameArchive, id) {
        let array= this.FnRead(nameArchive)
        newArray= array.filter(element => {
            return element.id != id
        })
        modelsController.FnSave(nameArchive,newArray)
    },

}
module.exports = modelsController