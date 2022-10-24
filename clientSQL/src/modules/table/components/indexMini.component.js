import * as React from "react";
import "../../../App.css";
import { useState } from "react";
import { GoBack } from "../../../defultComponent/funPublik";
import Modal from "../../../defultComponent/modal";
import TablesEdit from "./edit.component";



const TableIndexMini = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="mini">
                <div class="miniNavbarRight">
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/tables"}>כל השולחנות</div>
                </div>
                <div class="miniNavbarLeft">
                    <div class="miniNavbarButton" onClick={handleShow}>הוספת שולחן</div>
                    <Modal show={show}>
                        <TablesEdit handleClose={handleClose}/>
                    </Modal>
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default TableIndexMini;
