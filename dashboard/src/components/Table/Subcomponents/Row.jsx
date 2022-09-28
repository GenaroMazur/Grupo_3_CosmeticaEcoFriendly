import React from "react";
import {useEffect, useState} from "react"
import {get} from "./../../../utils/Request"
function Row(props) {
    const [product, setProduct] = useState({
        id : "cargando",
        nameProduct : "cargando",
        grams : "cargando",
        category :{ categoryName:"cargando"},
        fragrance : {nameFragrance:"cargando"},
        price : "cargando"
    })
    useEffect(()=>{
        get("http://"+props.rowData.detail).then(data=>{
            setProduct(data)
        })
    },[])
    useEffect(()=>{},[product])
    return(
            <tr>
                <td>{product.id}</td>
                <td>{product.nameProduct}</td>
                <td>{product.grams}</td>
                <td>{product.category.categoryName}</td>
                <td>{product.fragrance.nameFragrance}</td>
                <td>{product.price}</td>
            </tr>
               
            
    )
}
export default Row;