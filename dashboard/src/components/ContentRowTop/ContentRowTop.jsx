import React from "react";
import ProductsInDb from "../ProductsInDb/ProductsInDb";

function ContentRowTop() {

    const productsData = [
        {
            title: 'Products in Data Base',
            borderColor: 'border-left-primary',
            value: 10,
            icon: 'fa-film',
        },
        {
            title: 'Total categories',
            borderColor: 'border-left-success',
            value: 4,
            icon: 'fa-award',
        },
        {
            title: 'Users quantity',
            borderColor: 'border-left-warning',
            value: 3,
            icon: 'fa-user',
        }
    ]

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <div className="row">
                {
                    productsData.map(function (element, i) {
                        return <ProductsInDb key={element.title + i} data={element} />
                    }
                    )
                }
            </div>
            {/* <!-- End movies in Data Base --> */}

            
            {/* <!-- Content Row Last Movie in Data Base --> */}
            {/* <div className="row">*/}
                {/* <!-- Last Movie in DB --> */}
                {/*<LastProductInDb />*/}
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                {/*<CategoriesInDb />*/}
            {/*</div>*/}
        </div>
    )
}

export default ContentRowTop;