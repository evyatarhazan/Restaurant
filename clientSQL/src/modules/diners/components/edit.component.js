import * as React from "react";
import { useState } from "react";
import BaseService from "../../../service/base.service.tsx";

export const OpenModalEdit = () => {
    let modal = document.getElementById("CustomersEdit").style.display = "block";
}

const CustomersEdit = () => {

    const closeModalEdit = () => {
        let modal = document.getElementById("CustomersEdit").style.display = "none"
    }

    const [nameGroup, setNameGroup] = useState('');
    const [sizeGroup, setsizeGroup] = useState('');

    const handleChange = (event) => {
        if (event.target.name === "nameGroup") {
            setNameGroup(event.target.value);
            console.log('value is: nameGroup', event.target.value);
        }
        if (event.target.name === "sizeGroup") {
            setsizeGroup(event.target.value);
            console.log('value is: sizeGroup', event.target.value);
        }
    };

    const onSubmit = () => {
        var body = { name: nameGroup, size: (Number(sizeGroup)) };
        BaseService.create("/diners/", body).then((response) => {
            console.log(response)
            closeModalEdit()
            window.location.reload()
        })
    }


    return (
        <>
            <div id="CustomersEdit" class="modal">
                <div class="modal-content">
                    <h2>הוספת לקוח</h2>
                    <table>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    id="nameGroup"
                                    name="nameGroup"
                                    onChange={handleChange}
                                    value={nameGroup}
                                />
                            </td>
                            <td>שם קבוצה</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    id="sizeGroup"
                                    name="sizeGroup"
                                    onChange={handleChange}
                                    value={sizeGroup}
                                />
                            </td>
                            <td>גודל קבוצה</td>
                        </tr>
                    </table>
                    <div>
                        <button class="close" disabled={nameGroup === '' || sizeGroup === ''} onClick={() => onSubmit()}>
                            שמירה
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default CustomersEdit