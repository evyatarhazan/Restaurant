import * as React from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../menu/models/manu";
import BaseService from "../../../service/base.service.tsx";
import Button from "react-bootstrap/Button";
import { useAppState } from "../../../service/AppStateContext.tsx";
import { useEffect, useState } from "react";
import "../../../App.css";
import { Category } from "../../menu/components/inum.component";

var pathname = window.location.pathname
let ListItem = {}
let WasInvited

export const saveResevation = () => {
    console.log("ListItem", ListItem, WasInvited)
    for (let id in ListItem){
        if (WasInvited[id]) {
            ListItem[id] += WasInvited[id]
        } 
    }
    var body = ListItem;
    console.log("body", body)
    BaseService.create(pathname, body).then((response) => {
        console.log(response)
    })
    window.location.href="/diners"
}


const MenusIreservationndex = (props) => {
    const { state } = useAppState();

    const [isReady, setIsReady] = useState(false);
    const [listMenus, setListMenus] = useState([], Array(Menus));
    const [listItem, setListItem] = useState([], Array(Menus));
    const [isReadyRes, setIsReadyRes] = useState(0);
    const [isReady1, setIsReady1] = useState(false);
    const [wasInvited, setwasInvited] = useState(Object);

    // var pathname = window.location.pathname
    console.log("pathname", pathname)

    const list = (list) => {
        for (let item of list) {
            ListItem[item.id] = 0
        }
        console.log("wasInvited", wasInvited, typeof(wasInvited))
        for (let item in wasInvited) {
            console.log("i", item, typeof(item))
        }
    }


    useEffect(() => {
        BaseService.get(`${pathname}`, "").then((rp) => {
            console.log("Messages: " + rp.Data);
            if (rp.Status) {
                // wasInvited = rp.Data
                setIsReady1(true);
                const data = rp.Data
                console.log("data", data)
                setwasInvited(data);
                WasInvited = data
                console.log("wasInvited", wasInvited)
            } else {
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
        BaseService.getAll("/menu").then((rp) => {
            if (rp.Status) {
                const data = rp.Data;
                const listMenus1 = data;
                console.log("isReady1", listMenus);
                setIsReady(true);
                setListMenus(listMenus1);
                list(listMenus1)
                console.log("isReady2---", isReady, listMenus1, listMenus, state);
            } else {
                setIsReady(true);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
    }, [state, pathname]);


    const AddToCart = (item) => {
        console.log("item", item)
        let id = item.id
        let listItem1 = listItem
        listItem1.push(item)
        setIsReadyRes(isReadyRes + 1);
        setListItem(listItem1);
        ListItem[item.id] += 1
        console.log("a", ListItem)

    }

    const deleteItem = (category, name, price, item) => {
        var newItem = []
        var count = 0
        for (let menus of listItem) {
            if (menus.name !== name && menus.category !== category && menus.price !== price || count === 1) {
                newItem.push(menus)
            }
            else {
                count = 1
            }
        }
        setIsReadyRes(isReadyRes + 1);
        setListItem(newItem);
        if (ListItem[item.id] != 0) {
            ListItem[item.id] -= 1
        }
        console.log("a", ListItem)
    }

    const saveResevation = () => {
        var body = listItem;
        console.log("body", body)
        BaseService.create(pathname, body).then((response) => {
            console.log(response)
        })
    }

    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>כמות</th>
                        <th>הוזמן</th>
                        <th>מחיר</th>
                        <th>קטגוריה</th>
                        <th>שם מנה</th>
                        <th>id</th>
                    </tr>
                    {isReady && isReady1 &&
                        listMenus.map((item, i) => {
                            
                            console.log("f", item.id, typeof(String(item.id)), wasInvited)
                            return (
                                <tr key={i} >
                                    <td >
                                        <div className={"text-start"}>
                                            <Button
                                                variant="warning"
                                                onClick={() => AddToCart(item)}
                                                title="delete"
                                                className={"px-1 mx-2"}>
                                                הוספה לסל
                                            </Button>
                                        </div>
                                        {ListItem[item.id]}
                                        <div>
                                            <Button
                                                variant="warning"
                                                onClick={() => deleteItem(item.category, item.name, item.price, item)}
                                                title="delete"
                                                className={"px-1 mx-2"}>
                                                <i className="bi-trash3-fill"></i>הסר
                                            </Button>
                                        </div>
                                    </td>
                                    <td>{wasInvited[item.id]? `${wasInvited[item.id]}` : "0"}</td>
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

export default MenusIreservationndex;
