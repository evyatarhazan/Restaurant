import "../../../App.css";
import * as React from "react";
import { useEffect, useState } from "react";
import { Customers } from "../models/diners";
import BaseService from "../../../service/base.service.tsx";
import { useAppState } from "../../../service/AppStateContext.tsx";
import { Status } from "./inum.component";
import { Completion, Payment, Reservation } from "../../../defultComponent/funPublik";
import { CustomersView } from "./view.component";
import Modal from "../../../defultComponent/modal";



let listCustomerView = []
export const list = () => {
    return listCustomerView
}

const CustomersIndex = (props) => {
    const { state } = useAppState(0);

    const [isReady, setIsReady] = useState(false);
    const [setHasError] = useState(false);
    const [listCustomers, setListCustomers] = useState([], Array(Customers));
    const [listCustomer, setListCustomer] = useState("")

    const [showView, setShowView] = useState(false);
    const handleCloseView = () => setShowView(false);
    const handleShowView = () => setShowView(true);

    var pathname = window.location.pathname

    const ModalView = (listCustomers1) => {
        listCustomerView = listCustomers1
        setListCustomer(listCustomers1)
        console.log(listCustomer)
        handleShowView()
    }


    useEffect(() => {
        BaseService.getAll(pathname).then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listCustomers1 = data;
                console.log("isReady1", listCustomers1,);
                setIsReady(true);
                setListCustomers(listCustomers1);
                console.log("isReady2---", isReady, listCustomers1, listCustomers, state);
            } else {
                setIsReady(true);
                setHasError(true);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
    }, [state, pathname]);


    const lastUpdated = (props) => {
        let lastUpdated = props.split('').splice(11, 8).join('')
        console.log("props", props, lastUpdated)
        return lastUpdated


    }


    const IfButton = (props) => {
        if (props.item.queue === "tobesited") {
            return (
                <div class="icons">
                    <button id="myBtn" onClick={() => ModalView(props.item)}>
                        <img src="https://img.icons8.com/ios-glyphs/30/ab5e2a/visible--v1.png" />
                    </button>
                    <Modal show={showView}>
                        <CustomersView handleClose={handleCloseView} />
                    </Modal>
                </div>
            )
        }
        if (props.item.queue === "sit") {
            return (
                <div class="icons">
                    <button id="myBtn" onClick={() => ModalView(props.item)}>
                        <img src="https://img.icons8.com/ios-glyphs/30/ab5e2a/visible--v1.png" />
                    </button>
                    <Modal show={showView}>
                        <CustomersView handleClose={handleCloseView} />
                    </Modal>
                    <Reservation {...props} />
                    <Payment {...props} />
                </div>
            )
        }
        if (props.item.queue === "awaitingbill") {
            return (
                <div class="icons">
                    <button id="myBtn" onClick={() => ModalView(props.item)}>
                        <img src="https://img.icons8.com/ios-glyphs/30/ab5e2a/visible--v1.png" />
                    </button>
                    <Modal show={showView}>
                        <CustomersView handleClose={handleCloseView} />
                    </Modal>
                    <Completion {...props} />
                </div>
            )
        }
    }




    return (
        <>
            <div >
                <table style={{ tableLayout: "auto" }}>
                    <tr>
                        <th>Action</th>
                        <th>סך לתשלום</th>
                        <th>סטטוס</th>
                        <th>שולחן</th>
                        <th>שעת הגעה</th>
                        <th>גודל קבוצה</th>
                        <th>שם קבוצה</th>
                        <th>id</th>
                    </tr>
                    {isReady &&
                        listCustomers.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <div >
                                            <IfButton item={item} activ="CustomersView" />
                                        </div>
                                    </td>
                                    <td>{item.sum ? item.sum + "₪" : "-----"}</td>
                                    <td>{Status(item.queue)}</td>
                                    <td>{item.nameTable ? item.nameTable : "מחכים לשולחן"}
                                    </td>
                                    <td> {lastUpdated(item.lastUpdated)} </td>
                                    <td>{item.size}</td>
                                    <td>{item.name}</td>
                                    <td>{item.id}</td>
                                </tr>
                            );
                        })}
                </table>
            </div>
        </>
    );
};

export default CustomersIndex;
