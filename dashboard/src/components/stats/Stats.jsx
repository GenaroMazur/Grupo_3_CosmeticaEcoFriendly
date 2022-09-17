import "./Stats.css"
import {useEffect, useState} from "react"

function Stats(props) {
    let apiDirection = "/api/"+props.request;
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
            {count != 0? 
                <div>
                    <p>{count}</p>
                    <p>detalle</p>
                    <ul>
                        {response.map((data,i)=>{
                            {props.request == "products"?<li key={data+i}>{data.nameProduct}</li>:<li key={data+i}>{data.userName}</li>;}
                        })}
                    </ul>
                </div>
            :<p>...cargando</p>}
            
            <button onClick={actualizarManual}>actualizar</button>
        </div>
    )
}

export default Stats