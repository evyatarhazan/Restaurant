import * as React from "react";
import "../../../App.css";
import { GoBack } from "../../../defultComponent/funPublik";
import { useState } from "react";
import { saveResevation } from "./reservation.component";



const ReservationMini = (props) => {
    const [responsServer, setResponsServer] = useState("")

    return (
        <>
            <div class="mini">
                <div class="miniNavbarRight">
                    <div class="miniNavbarButton" onClick={() => window.location.href = "/diners/sit/:GroupSeqNo/reservation"}>הזמנות</div>
                </div>
                <div class="miniNavbarLeft" >
                    <div class="miniNavbarButton" onClick={() =>  saveResevation()}>שמירה</div>
                    <GoBack />
                </div>
            </div>
        </>
    );
};

export default ReservationMini;
