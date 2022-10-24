import * as React from "react";
import { Category } from "./inum.component";
import { list } from "./index.component";



export const MenusView = (props) => {

    let listMenus = list()

    return (
        <>
            <div id="MenusViewModal" class="Rmodal">

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
                        <button class="close" onClick={() => props.handleClose()}>
                            אישור
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MenusView;
