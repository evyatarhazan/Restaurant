import * as React from "react";
import { useState } from "react";
import BaseService from "../../../service/base.service.tsx";

export const OpenModalEdit = () => {
    let modal = document.getElementById("TablesEdit").style.display = "block";
}

const TablesEdit = () => {

    const closeModalEdit = () => {
        let modal = document.getElementById("TablesEdit").style.display = "none"
    }

    const [nameTable, setNameTable] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleChange = (event) => {
        if (event.target.name === "nameTable") {
            setNameTable(event.target.value);
            console.log('value is: nameTable', event.target.value);
        }
        if (event.target.name === "capacity") {
            setCapacity(event.target.value);
            console.log('value is: capacity', event.target.value);
        }
    };

    const onSubmit = () => {
        var body = { name: nameTable, capacity: (Number(capacity)) };
        BaseService.create("/tables/", body).then((response) => {
            console.log(response)
            closeModalEdit()
            window.location.reload()
        })
    }

    return (
        <>
            <div id="TablesEdit" class="modal">

                <div class="modal-content">
                    <div>
                        <th class="titleModal"><h2>הוספת שולחן</h2></th>
                    </div>
                    <table >
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    id="capacity"
                                    name="capacity"
                                    onChange={handleChange}
                                    value={capacity}
                                />
                            </td>
                            <td>קיבולת</td>
                        </tr>
                    </table>
                    <div>
                        <button class="close" disabled={capacity === ''} onClick={() => onSubmit()}>
                            שמירה
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TablesEdit