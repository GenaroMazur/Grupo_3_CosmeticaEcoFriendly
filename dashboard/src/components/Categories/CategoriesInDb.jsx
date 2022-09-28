import React from "react";
import Categories from "./Categories";
import {useEffect} from "react"

function CategoriesInDb(props) {

    useEffect(()=>{},[props])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Categories in Data Base </h5>
                </div>
                <div className="card-body body_del_genero">
                    <div className="row">
                        {
                            Object.entries(props.categories).map((element, index)=>{
                                return <Categories key={index} dataCategoria = {element}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesInDb;