const path=require("path")
const fs=require("fs")

const modelsController={

    //leer JSON
    //Ingresar como parametro el nombre del archivo JSON sin extencion
    FnRead:function( nameArchive ) {
        let _JSON=fs.readFileSync ( path.join(__dirname,"./" + nameArchive + ".JSON") ,"utf-8")
        return JSON.parse( _JSON )
    },

    //Guardar JSON
    //Ingresar como parametro el nombre del archivo JSON sin extencion y el array a guardar
    FnSave:function( nameArchive , array ) {
        let _string = JSON.stringify (array)
        fs.writeFileSync ( path.join(__dirname,"./"+ nameArchive +".JSON"), _string , "utf-8" )
    },

    //buscar Datos Dentro de JSON
    //ingresar Array de donde buscar, propiedad que se debe leer, elemento a buscar
    FnSearch:function( array , _properti , identifier ) {

        return array.find(element=>{
            return element[_properti] == identifier

        })

    },

    //Crea datos dentro de JSON
    //Ingresar Array donde crear el objeto, Ingresar objeto
    FnCreate:function( array , object ) {

        let newObject=object
        array.push(newObject)

    },

    //Elimina datos dentro de un JSON
    //Ingresar Array donde eliminar el objeto, ingresar objeto
    FnDelete: function ( array , object ) {

        return array.filter(element=>{
            return element != object
        })

    }

    //Editar Datos dentro de un JSON
}
module.exports=modelsController