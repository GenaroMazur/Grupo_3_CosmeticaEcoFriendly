import React from "react"; 

function LastProductInDb(props) {
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
                    <h6 className="m-0 font-weight-bold text-gray-800">{props.lastProduct.nameProduct}</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "20rem" }} src={"http://"+props.lastProduct.Image} alt="shampoo-seco" />
                    </div>
                    <p>{props.lastProduct.descriptionProduct}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View Product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;