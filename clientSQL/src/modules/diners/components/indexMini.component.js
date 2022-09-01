import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";
import BaseService from "../../../service/base.service.tsx";
import { useState } from "react";
import CustomersEdit, { OpenModalEdit } from "./edit.component";



const CustomersIndexMini = (props) => {
    const [responsServer, setResponsServer] = useState("")

    const OpenModal = () => {
        let modal = document.getElementById("findTableModal").style.display = "block";
    }
    const closeModal = (props) => {
        let modal = document.getElementById("findTableModal").style.display = "none"
    }
    const fixMessages = (data) => {
        console.log(data)
        if (data == "No place to sit for any group") {
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
    

    const ModalEdit = () => {
        OpenModalEdit()
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
                    <div class="miniNavbarButton" onClick={() => ModalEdit()}>הוספת לקוח</div>
                    <CustomersEdit />
                    <div class="miniNavbarButton" onClick={() =>
                        BaseService.get('/diners', '/sitbyperiority').then((rp) => {
                            if (rp.Status) {
                                console.log("Messages: " + rp.Data);
                                fixMessages(rp.Data)
                                OpenModal()
                            } else {
                                fixMessages(rp.Messages)
                                let props = { item: rp.Messages, activ: "find" }
                                console.log("Messages: " + rp.Messages);
                                console.log("Exception: " + rp.Exception);
                                OpenModal()
                            }
                        })
                    }>מציאת שולחן</div>

                    <div id="findTableModal" class="modal">

                        <div class="modal-content">
                            <h2>חיפוש שולחן</h2>
                            <p>{responsServer}</p>
                            <button class="close" onClick={() => closeModal()}>
                            אישור
                        </button>

                        </div>
                    </div>
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default CustomersIndexMini;
