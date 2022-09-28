import React from "react";
import * as Request from "../../utils/Request"
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Stats from "../../Components/stats/Stats";
import Table from "../../Components/Table/Table";


class ContentWrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    // acá hago el fetch pero no funciona. Lo que quiero hacer es que en el componente Table se coloquen la lista de productos
    async componentDidMount() {
        const response = await Request.get("http://localhost:8080/api/products")
        this.setState({products: response.data})
    }
    
    render() {
        return(
            <div>
                <Topbar/>
                <ContentRowTop/>
    
                <Stats request="products"/>
                <Stats request="users"/>
    
                <Table data={this.state.products}/>
    
                <Footer/>
            </div >
        )
    }
    
}

export default ContentWrapper;