import React from "react";
import Stats from "./../../Components/stats/Stats"
function Main() {
    return(
        <div>
            <Stats request="products"/>
            <Stats request="users"/>
        </div>
    )
}
export default Main