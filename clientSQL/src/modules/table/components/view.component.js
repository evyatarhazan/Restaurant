import * as React from "react";
import { list } from "./index.component";

export const OpenModalTable = () => {
    let modal = document.getElementById("TablesViewModal").style.display = "block";
}

const TablesView = () => {

    let table = list()
    const closeModal = () => {
        let modal = document.getElementById("TablesViewModal").style.display = "none"
    }
    return (
        <>
            <div id="TablesViewModal" class="modal">

                <div class="modal-content">
                    <h2>{table.id}</h2>
                    <table >
                        <tr>
                            <td>{table.lastUpdated}</td>
                            <td>עדכון אחרון</td>
                        </tr>
                        <tr>
                            <td>{table.status ? table.status : "פנוי"}
                                {/* // <Link
                                //     to={"/customers/sitting/" + table.GroupSeqNum}
                                //     className="px-1"
                                //     title="view">
                                //     <Button variant="secondary">
                                //         {table.GroupSeqNum}
                                //     </Button>
                                // </Link> : "פנוי"} */}
                            </td>
                            <td>סטטוס</td>
                        </tr>
                        <tr>
                            <td>{table.capacity}</td>
                            <td>קיבולת</td>
                        </tr>
                    </table>
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
export default TablesView;
