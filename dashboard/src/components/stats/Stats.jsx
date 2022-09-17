import "./Stats.css"
import {useEffect, useState} from "react"

function Stats(props) {
    let apiDirection = "localhost:8080/api/"+props.request
    let [response, setResponse] = useState(0)
//monta el componente haciendo un pedido asincronico a la api de LaVie
    useEffect(()=>{
        console.log("%cSe monto el componente","color:yellow");
        fetch(apiDirection)
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            setResponse(res.count)
        })
        .catch(err=>{
            let msg = "No se pudo contactar a la base de datos"
            console.error(msg);
        })
    }, [])

//actualiza el dom cuando recibe cambios en el response
    useEffect(()=>{
        console.log("%cSe actualizo el componente","color:green");
    },[response])

//desmonta el componente no sin antes borrar las variables creadas
    useEffect(()=>{
        return function(){
            response = undefined;
            setResponse = undefined;
            console.log("%cSe desmonto el componente","color:red");
        }
    },[])

function actualizarManual(){
    fetch(apiDirection)
    .then(res=>res.json())
    .then(data=>response.count)
}
    return (
        <div>
            
        </div>
    )
}

export default Stats