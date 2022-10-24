import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";
import BaseService from "../../../service/base.service.tsx";
import { useState } from "react";
import CustomersEdit from "./edit.component";
import Modal from "../../../defultComponent/modal";



const CustomersIndexMini = (props) => {
    const [responsServer, setResponsServer] = useState("")

    const [showFind, setShowFind] = useState(false);
    const handleCloseFind = () => setShowFind(false);
    const handleShowFind = () => setShowFind(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const fixMessages = (data) => {
        console.log(data)
        if (data === "No place to sit for any group") {
            let data = "לא נמצא שולחן פנוי"
            setResponsServer(data)
        }
        else {
            let split = data.split(",")
            let dinersId = split[0]
            let tableId = split[1]
            let data1 = `נמצא שולחן מספר ${tableId} לקבוצה מספר ${dinersId}`
            setResponsServer(data1)
        }
    }

    return (
        <>
            <div class="mini">
                <div class="miniNavbarRight">
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/diners"}>כל הלקוחות</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/diners/tobeSited"}>ממתינים לשולחן</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/diners/sit"}>ממתינים לשרות</div>
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/diners/awaitingBill"}>ממתינים לתשלום</div>
                </div>
                <div class="miniNavbarLeft" >
                    <div class="miniNavbarButton" onClick={handleShowEdit}>הוספת לקוח</div>
                    <Modal show={showEdit}>
                        <CustomersEdit handleClose={handleCloseEdit}/>
                    </Modal>
                    <div class="miniNavbarButton" onClick={() =>
                        BaseService.get('/diners', '/sitbyperiority').then((rp) => {
                            if (rp.Status) {
                                console.log("Messages: " + rp.Data);
                                fixMessages(rp.Data)
                                handleShowFind()
                            } else {
                                fixMessages(rp.Messages)
                                console.log("Messages: " + rp.Messages);
                                console.log("Exception: " + rp.Exception);
                                handleShowFind()
                            }
                        })
                    }>מציאת שולחן</div>

                    <Modal show={showFind}>
                        <div id="findTableModal" class="Rmodal">
                            <div class="modal-content">
                                <h2>חיפוש שולחן</h2>
                                <p>{responsServer}</p>
                                <button class="close" onClick={handleCloseFind}>
                                    אישור
                                </button>
                            </div>
                        </div>
                    </Modal>

                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default CustomersIndexMini;
