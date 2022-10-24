import * as React from "react";
import "../../../App.css";
import { Tables } from "../models/table"
import BaseService from "../../../service/base.service.tsx";
import { useAppState } from "../../../service/AppStateContext.tsx";
import { useEffect, useState } from "react";
import * as toastr from "toastr";
import TablesView, { OpenModalTable } from "./view.component";
import Modal from "../../../defultComponent/modal";

let listTableView = []
export const list = () => {
    return listTableView
}

const TablesIndex = () => {
    const { state } = useAppState();

    const [isReady, setIsReady] = useState(false);
    const [listTables, setListTables] = useState([], Array(Tables));
    const [listTable, setListTable] = useState("")

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const [showView, setShowView] = useState(false);
    const handleCloseView = () => setShowView(false);
    const handleShowView = () => setShowView(true);

    const [idForDelete, setIdForDelete] = useState("")

    const ModalDelete = (id) => {
        setIdForDelete(id)
        handleShowDelete()
    }

    const ModalView = (listTables1) => {
        listTableView = listTables1
        setListTable(listTables1)
        handleShowView()
    }



    let newListTables = [],
        step = true,
        c = 0,
        temp = []
    while (step) {

        if (temp.length == 3) {
            newListTables.push(temp)
            temp = []
        }
        temp.push(listTables[c])
        c += 1
        if (typeof (listTables[c]) == "undefined") {
            if (temp.length > 0) {
                newListTables.push(temp)
            }
            step = false
        }
    }

    useEffect(() => {
        BaseService.getAll("/tables").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listTables1 = data;
                console.log("isReady1", listTables1,);
                setIsReady(true);

                setListTables(listTables1);
                console.log("isReady2---", isReady, listTables1, listTables, state);
            } else {
                setIsReady(true);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
    }, [state]);



    return (
        <>
            <div class="map">
                {newListTables.map((item, j) => {
                    return (
                        <div class="mapA">
                            {isReady &&
                                newListTables[j].map((item, i) => {
                                    return (
                                        <div key={i} >
                                            <div class="mapTable">
                                                <h2 >{item.id}</h2>
                                                <tr class="trTable">
                                                    <td >סטטוס</td>
                                                    <td >{item.status ? item.status : "פנוי"}
                                                    </td>
                                                </tr>
                                                <tr class="trTable">
                                                    <td >קיבולת</td>
                                                    <td >{item.capacity}</td>
                                                </tr>
                                                <tr class="trTable">
                                                    <td >Action</td>
                                                    <td >
                                                        <div class="icons">
                                                            <button id="myBtn" onClick={() => ModalView(item)}>
                                                                <img src="https://img.icons8.com/ios-glyphs/30/ab5e2a/visible--v1.png" />
                                                            </button>
                                                            <Modal show={showView} >
                                                                <TablesView handleClose={handleCloseView}/>
                                                            </Modal>

                                                            <button id="myBtn" onClick={() => ModalDelete(item.id)}>
                                                                <img src="https://img.icons8.com/material/30/ab5e2a/filled-trash.png" />
                                                            </button>

                                                            <Modal show={showDelete} >
                                                                <div id="TableDelete" class="Rmodal">

                                                                    <div class="modal-content">
                                                                        <h2>מחיקת שולחן</h2>
                                                                        <p>?{idForDelete} בטוח שאתה רוצה למחוק את</p>
                                                                        <div class="icons">
                                                                            <button class="close"
                                                                                onClick={() =>
                                                                                    BaseService.delete("/tables/", {
                                                                                        id: idForDelete,
                                                                                    }).then((rp) => {
                                                                                        if (rp.Status) {
                                                                                            const listTablesUpdated = listTables.filter(
                                                                                                (tables) => tables.id !== idForDelete
                                                                                            );
                                                                                            setListTables(listTablesUpdated);
                                                                                            console.log("listTablesUpdated", listTablesUpdated);
                                                                                            handleCloseDelete()
                                                                                        } else {
                                                                                            toastr.error(rp.Messages);
                                                                                            console.log("Messages: " + rp.Messages);
                                                                                            console.log("Exception: " + rp.Exception);
                                                                                        }
                                                                                    })
                                                                                }
                                                                            >
                                                                                מחק</button>
                                                                            <button class="close" onClick={() => handleCloseDelete()}>בטל</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default TablesIndex;
