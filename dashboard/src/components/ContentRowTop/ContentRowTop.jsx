import React from "react";
import {useEffect, useState} from "react"
import ProductsInDb from "../ProductsInDb/ProductsInDb";
import LastProductInDb from "../LastProductInDb/LastProductInDb";
import {get} from "./../../utils/Request"
import CategoriesInDb from "../Categories/CategoriesInDb";

function ContentRowTop() {
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState([])
    const [requestData, setRequestData] = useState([]);
    const [lastProduct, setLastProduct] = useState({});
    useEffect(()=>{
        const products = get("http://localhost:8080/api/products")
        const users = get("http://localhost:8080/api/users")
        Promise.all([products, users])
        .then(([products, users])=>{

            let categoryLength =  Object.entries(products.countByCategory).length
            let usersQuantity={
                title : "Users quantity",
                borderColor: "border-left-warning",
                value: users.count,
                icon: "fa-user"
            }
            let productsQuantity={
                title: 'Products in Data Base',
                borderColor: 'border-left-primary',
                value: products.count,
                icon: 'fa-film',
            }
            let categoriesQuantity={
                title: 'Total categories',
                borderColor: 'border-left-success',
                value:categoryLength,
                icon: 'fa-award',
            }
            setCategories(products.countByCategory)
            setProducts([products.products])
            setRequestData( [usersQuantity, productsQuantity, categoriesQuantity]   )
            let ultimo = products.products.pop();
            return get("http://"+ultimo.detail)
        }).then(last=>{
            setLastProduct(last)
        })
    },[])

    useEffect(()=>{

    },[requestData, lastProduct, products, categories])

    useEffect(()=>{
        return function(){
            requestData = undefined;
            setRequestData = undefined;
        }
    },[])

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            {/* <!-- Content Row Products--> */}
            <div className="row">
                {
                    requestData.map(function (element, i) {
                        return <ProductsInDb key={element.title + i} data={element} />
                    }
                    )
                }
            </div>
            {/* <!-- End Products in Data Base --> */}

            
            {/* <!-- Content Row Last Product in Data Base --> */}
            <div className="row">
                {/* <!-- Last Product in DB --> */}
                <LastProductInDb lastProduct = {lastProduct}/>
                {/* <!-- End content row last Product in Data Base --> */}

                {/* <!-- Categories in DB --> */}
                <CategoriesInDb categories = {categories}/>
            </div>
        </div>
    )
}

export default ContentRowTop;