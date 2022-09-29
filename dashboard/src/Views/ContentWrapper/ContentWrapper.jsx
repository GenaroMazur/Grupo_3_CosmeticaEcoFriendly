import React from "react";
import {get} from "../../utils/Request"
import ContentRowTop from "../../components/ContentRowTop/ContentRowTop";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState} from "react"
import Table from "../../components/Table/Table";


function ContentWrapper(){

    const [products, setProducts] = useState([])
    useEffect(()=>{
        get("http://localhost:8080/api/products")
        .then(data=>{
            console.log(data);
            setProducts([data.products])
        })
    },[])

    useEffect(()=>{},[products])
    
        return(
            <div>
                <ContentRowTop/>
    
                <Table data={products}/>
    
                <Footer/>
            </div >
        )
    
}

export default ContentWrapper;