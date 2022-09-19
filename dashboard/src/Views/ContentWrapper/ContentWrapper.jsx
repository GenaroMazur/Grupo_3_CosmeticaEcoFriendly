import React from "react";
import ContentRowTop from "../../components/ContentRowTop/ContentRowTop";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Stats from "../../components/stats/Stats"


function Main() {
    return(
        <div>
            <Topbar/>
            <ContentRowTop/>

            <Stats request="products"/>
            <Stats request="users"/>

            <Footer/>
        </div>
    )
}
export default Main