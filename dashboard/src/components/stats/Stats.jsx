import "./Stats.css"
import {useEffect, useState} from "react"

// respuesta de la api se guarda en la variable products o users dependiendo de la prop ingresada
// para acceder a las propiedades se tiene que hacer uso de la variable response para el array 
// y count para la cantidad de elementos en ese array

function Stats(props) {
    let apiDirection = "http://localhost:8080/api/"+props.request;
    let [response, setResponse] = useState([]);
    let [count, setCount] = useState(0)

//monta el componente haciendo un pedido asincronico a la api de LaVie
    useEffect(()=>{
        console.log("%cSe monto el componente","color:yellow");
        fetch(apiDirection)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            if (props.request === "products"){
                let {count,products} = data
                setCount(count)
                setResponse(products)
            } else if (props.request === "users"){
                let {count,users} = data
                setCount(count)
                setResponse(users)
            }
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
            count = undefined;
            setCount = undefined;
            console.log("%cSe desmonto el componente","color:red");
        }
    },[])

//pedido asincrono para actualizar cada componente por separado
function actualizarManual(){
    fetch(apiDirection)
    .then(res=>res.json())
    .then(data=>{
        if (props.request == "products"){
            let {count,products} = data
            setCount(count)
            setResponse(products)
        } else if (props.request == "users"){
            let {count,users} = data
            setCount(count)
            setResponse(users)
        }
    })
    .catch(()=>{
        console.error("opps, hubo un error, intente mas tarde")
    });
}


    return (
        <div>
            {/* esto lo deje asi para que entiendan que funciona la base de datos y 
            los pedidos... */}
            {count !== 0? 
                <div>
                    <p>{count}</p>
                    <p>detalle</p>
                    <ul>
                        {response.map((data,i)=>{
                            if(props.request === "products"){
                                return (
                                    <li key={data.nameProduct+i}>{data.nameProduct}</li>
                                    )
                            }else if(props.request === "users"){
                                return (
                                    <li key={data.userName+i}>{data.userName}</li>
                                    )
                            }
                        })}
                    </ul>
                </div>
            :<p>...cargando</p>}
            
            <button onClick={actualizarManual}>actualizar</button>
        </div>
    )
}

export default Stats