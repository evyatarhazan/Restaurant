import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";
import TablesEdit, { OpenModalEdit } from "./edit.component";



const TableIndexMini = (props) => {

    return (
        <>
            <div class="mini">
            <div class="miniNavbarRight">
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/tables"}>כל השולחנות</div>
                </div>
                <div class="miniNavbarLeft">
                    <div class="miniNavbarButton" onClick={() => OpenModalEdit()}>הוספת שולחן</div>
                    <TablesEdit/>
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default TableIndexMini;
