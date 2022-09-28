import React from "react";
import {get} from "../../utils/Request"
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState} from "react"
import Table from "../../Components/Table/Table";


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