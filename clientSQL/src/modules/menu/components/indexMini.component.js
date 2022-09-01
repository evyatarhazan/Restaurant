import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";
import MenusEdit, { OpenModalEdit } from "./edit.component";



const MenusIndexMini = (props) => {

    return (
        <>
            <div class="mini">
                <div class="miniNavbarRight">
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/menu"}>תפריט מלא</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/menu/starter"}>מנות ראשונות</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/menu/Soups"}>מרקים</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/menu/MainCourse"}>מנה עיקרית</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/menu/desserts"}>קינוחים</div>
                </div>
                <div class="miniNavbarLeft">
                    <div class="miniNavbarButton" onClick={() => OpenModalEdit()}>הוספת מנה</div>
                    <MenusEdit />
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default MenusIndexMini;
