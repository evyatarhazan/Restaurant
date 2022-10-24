import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";
import Modal from "../../../defultComponent/modal";
import MenusEdit from "./edit.component";
import { useState } from "react";



const MenusIndexMini = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <div class="miniNavbarButton" onClick={handleShow}>הוספת מנה</div>
                    <Modal show={show}>
                        <MenusEdit handleClose={handleClose}/>
                    </Modal>
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default MenusIndexMini;
