import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";



const HomeIndexMini = (props) => {

    return (
        <>
            <div class="mini">
            <div class="miniNavbarRight">
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/"}>בית</div>
                </div>
                <div class="miniNavbarLeft">
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default HomeIndexMini;