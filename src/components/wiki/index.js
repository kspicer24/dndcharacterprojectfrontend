import React from "react";
import "../../index.css";
import Wiki from "./wiki-component";
import Navigation from "../navigation";

const WikiScreen= () => {
    return(
        <>
            <div className={"row header"}>
                <span><b>Dungeons and Dragons Forum</b></span>
            </div>
            <div className={"row flex-noWrap"}>
                <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                    <Navigation active={'Wiki'}/>
                </div>
                <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>
                    <Wiki/>
                </div>
            </div>
        </>
    )
}

export default WikiScreen;