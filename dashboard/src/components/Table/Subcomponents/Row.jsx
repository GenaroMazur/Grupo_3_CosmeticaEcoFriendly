import React from "react";

function Row(props) {
    return(
        <tr>
            <td>{props.rowData.id}</td>
            <td>{props.rowData.nameProduct}</td>
            <td>{props.rowData.grams}</td>
            <td>{props.rowData.idCategory}</td>
            <td>{props.rowData.idFragrance}</td>
            <td>{props.rowData.price}</td>
        </tr>
    )
}
export default Row;