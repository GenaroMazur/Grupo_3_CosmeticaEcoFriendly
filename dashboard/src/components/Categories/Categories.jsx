import React from "react";
import {useEffect} from "react"

function Categories(props) {

    let [categoryName,quantity]=props.dataCategoria;

    useEffect(()=>{},[props])
    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <p>{categoryName}</p>
                    <p>{quantity}</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;