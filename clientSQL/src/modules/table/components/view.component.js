import * as React from "react";
import { list } from "./index.component";

const TablesView = (props) => {

    let table = list()

    return (
        <>
            <div id="TablesViewModal" class="Rmodal">
                <div class="modal-content">
                    <h2>{table.id}</h2>
                    <table >
                        <tr>
                            <td>{table.lastUpdated}</td>
                            <td>עדכון אחרון</td>
                        </tr>
                        <tr>
                            <td>{table.status ? table.status : "פנוי"}
                            </td>
                            <td>סטטוס</td>
                        </tr>
                        <tr>
                            <td>{table.capacity}</td>
                            <td>קיבולת</td>
                        </tr>
                    </table>
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
export default TablesView;
