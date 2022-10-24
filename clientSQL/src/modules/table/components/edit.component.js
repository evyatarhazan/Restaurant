import * as React from "react";
import { useState } from "react";
import BaseService from "../../../service/base.service.tsx";


const TablesEdit = (props) => {

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
            props.handleClose();
            window.location.reload();
        })
    }

    return (
        <>
            <div id="TablesEdit" class="Rmodal">

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