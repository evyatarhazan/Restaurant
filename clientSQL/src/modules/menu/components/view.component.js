import * as React from "react";
import { Category } from "./inum.component";
import { list } from "./index.component";


export const OpenModalMenu = () => {
    let modal = document.getElementById("MenusViewModal").style.display = "block";
}

export const MenusView = () => {

    let listMenus = list()
    const closeModal = () => {
        let modal = document.getElementById("MenusViewModal").style.display = "none"
    }

    return (
        <>
            <div id="MenusViewModal" class="modal">

                <div class="modal-content">
                    <h2 >{listMenus.id}</h2>
                    <div id="propertis">
                        <table >
                            <tr>
                                <td>{listMenus.name}</td>
                                <td>שם מנה</td>
                            </tr>
                            <tr>
                                <td>{Category(listMenus.category)}</td>
                                <td>קטגוריה</td>
                            </tr>
                            <tr>
                                <td>{listMenus.price}</td>
                                <td>מחיר</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <button class="close" onClick={() => closeModal()}>
                            אישור
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MenusView;
