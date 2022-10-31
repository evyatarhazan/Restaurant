import * as React from "react";
import { useEffect, useState } from "react";
import { useAppState } from "../../../service/AppStateContext.tsx";
import { list } from "./index.component";
import BaseService from "../../../service/base.service.tsx";
import { Menus } from "../../menu/models/manu";



const Price = (priceAll) => {
    if (priceAll.priceAll) {
        return (
            <div>
                {priceAll.priceAll + "₪"}
            </div>
        )
    }
    else {
        return (
            "------"
        )
    }
}

const Status = (queue) => {
    if (queue === "tobesited") {
        return (
            "ממתין לשולחן"
        )
    }
    if (queue === "sit") {
        return (
            "ממתין לשירות"
        )
    }
    if (queue === "awaitingbill") {
        return (
            "ממתין לחשבון"
        )
    }
}

export const CustomersView = (props) => {

    const { state } = useAppState(0);

    const [isReady, setIsReady] = useState(false);
    const [listMenus, setListMenus] = useState([], Array(Menus));

    useEffect(() => {
        BaseService.getAll("/menu").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                setIsReady(true);
                setListMenus(data);
            } else {
                setIsReady(true);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
    }, [state]);

    const lastUpdated = (props) => {
        let lastUpdated = props.split('').splice(11, 8).join('')
        console.log("props", props, lastUpdated)
        return lastUpdated
    }

    const MapResevation = (reservation) => {

        console.log(reservation)

        let listReservation = []
        let split = reservation.split("{")
        let split1 = split[1].split("}")
        let split2 = split1[0].split(",")
        for (let item of split2) {
            let splitId = item.split(":")
            let id = splitId[0].split('"')
            for (let item of listMenus) {
                if (item.id === Number(id[1])) {
                    item.amount = splitId[1]
                    listReservation.push(item)
                }
            }
        }
        console.log("list", listReservation)

        if (listReservation.length === 0) {
            return (
                ""
            )
        }

        return (
            <table>
                <tr >
                    <th>כמות</th>
                    <th>קטגוריה</th>
                    <th>שם מנה</th>
                    <th>id</th>
                </tr>
                {listReservation.map((item, i) => {
                    return (
                        <tr key={i} >
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                        </tr>
                    )
                })}
            </table>
        )
    }
    let listCustomers = list()

    return (
        <>
            <div id="CustomersViewModal" class="Rmodal">

                <div class="modal-content">
                    <h2>{listCustomers.id}</h2>
                    <div id="propertis">
                        <table>
                            <tr >
                                <td>{listCustomers.name}</td>
                                <td>שם קבוצה</td>
                            </tr>
                            <tr >
                                <td>{listCustomers.size}</td>
                                <td>גודל קבוצה</td>
                            </tr>
                            <tr >
                                <td>{lastUpdated(listCustomers.lastUpdated)}</td>
                                <td>שעת הגעה</td>
                            </tr>
                            <tr >
                                <td>{listCustomers.nameTable ? listCustomers.nameTable : "מחכים לשולחן"}
                                </td>
                                <td>שולחן</td>
                            </tr>
                            <tr >
                                <td>{Status(listCustomers.queue)}</td>
                                <td>סטטוס</td>
                            </tr>
                            <tr >
                                <td><Price priceAll={listCustomers.sum} /></td>
                                <td>סך לתשלום</td>
                            </tr>
                                </table>
                                </div>
                                <h2 style={{margin: "-60px"}}>הזמנות</h2>
                                <p>{listCustomers.reservations ? MapResevation(listCustomers.reservations) : ""}</p>
                    <div>
                        <button class="close" onClick={() => props.handleClose()}>
                            אישור
                        </button>
                    </div>
                </div>
            </div>
        </>


    )
}
export default CustomersView;