import React from "react";
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Stats from "../../Components/stats/Stats";


function ContentWrapper() {
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
export default ContentWrapper;