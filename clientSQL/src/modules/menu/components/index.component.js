import * as React from "react";
import "../../../App.css";
import { Menus } from "../models/manu";
import BaseService from "../../../service/base.service.tsx";
import { useAppState } from "../../../service/AppStateContext.tsx";
import { useEffect, useState } from "react";
import * as toastr from "toastr";
import { Category } from "./inum.component";
import { OpenModalMenu, MenusView } from "./view.component";

let listMenuView = []
export const list = () => {
    return listMenuView
}

const MenusIndex = (props) => {
    const { state } = useAppState(0);

    const [isReady, setIsReady] = useState(false);
    const [listMenus, setListMenus] = useState([], Array(Menus));

    const [listMenu, setListMenu] = useState("")


    let pathname = window.location.pathname

    const ModalView = (listMenus1) => {
        listMenuView = listMenus1
        setListMenu(listMenus1)
        OpenModalMenu()
    }
    const OpenModalDelete = () => {
        let modal = document.getElementById("MenusViewDelete").style.display = "block";
    }
    const closeModalDelete = () => {
        let modal = document.getElementById("MenusViewDelete").style.display = "none"
    }

    const ModalDelete = (listMenus1) => {
        listMenuView = listMenus1
        setListMenu(listMenus1)
        OpenModalDelete()
    }

    useEffect(() => {
        BaseService.getAll(pathname).then((rp) => {
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
    }, [state, pathname]);

    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Action</th>
                        <th>מחיר</th>
                        <th>קטגוריה</th>
                        <th>שם מנה</th>
                        <th>id</th>
                    </tr>
                    {isReady &&
                        listMenus.map((item, i) => {
                            return (
                                <tr key={i} >
                                    <td >
                                        <div class="icons">
                                            <button id="myBtn" onClick={() => ModalView(item)}>
                                                <img src="https://img.icons8.com/ios-glyphs/30/ab5e2a/visible--v1.png" />
                                            </button>
                                            <MenusView />
                                            <button id="myBtn" onClick={() => ModalDelete(item)}>
                                                <img src="https://img.icons8.com/material/30/ab5e2a/filled-trash.png" />
                                            </button>

                                            <div id="MenusViewDelete" class="modal">

                                                <div class="modal-content">
                                                    <h2>מחיקת מנה</h2>
                                                    <p>?{listMenuView.id} בטוח שאתה רוצה למחוק את</p>
                                                    <div class="icons">
                                                        <button class="close"
                                                            onClick={() =>
                                                                BaseService.delete(`${pathname}`, {
                                                                    id: listMenuView.id,
                                                                }).then((rp) => {
                                                                    if (rp.Status) {
                                                                        const listMenusUpdated = listMenus.filter(
                                                                            (menus) => menus.id !== listMenuView.id
                                                                        );
                                                                        setListMenus(listMenusUpdated);
                                                                        closeModalDelete()
                                                                    } else {
                                                                        toastr.error(rp.Messages);
                                                                        console.log("Messages: " + rp.Messages);
                                                                        console.log("Exception: " + rp.Exception);
                                                                    }
                                                                })
                                                            }
                                                        >
                                                            מחק</button>
                                                        <button class="close" onClick={() => closeModalDelete()}>בטל</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{Category(item.category)}</td>
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

export default MenusIndex;
