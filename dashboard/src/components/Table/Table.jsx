import React from "react";
import Row from "./Subcomponents/Row";
import {useEffect} from "react"


function Table(props) {
    useEffect(()=>{
    },[props])
    return (
        <div>
            <h3>Lista de Productos </h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Gramos</th>
                    <th scope='col'>Categoría</th>
                    <th scope='col'>Fragrancia</th>
                    <th scope='col'>Precio</th>
                </tr>
            </thead>
            <tbody>
                
                    {props.data[0]?.map((element, i) => <Row key={element.nameProduct + i} rowData={element} />)}
                
            </tbody>

        </table>
        </div>
        
    )
}

export default Table;