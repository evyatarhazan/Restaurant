import * as React from "react";
import { useState } from "react";
import BaseService from "../../../service/base.service.tsx";
import "../../../App.css"

export const OpenModalEdit = () => {
    let modal = document.getElementById("MenusEdit").style.display = "block";
}

const MenusEdit = () => {

    const closeModalEdit = () => {
        let modal = document.getElementById("MenusEdit").style.display = "none"
    }

    const [nameMenu, setNameMenu] = useState('');
    const [category, setcategory] = useState('');
    const [price, setprice] = useState('');

    const handleChange = (event) => {
        if (event.target.name === "nameMenu") {
            setNameMenu(event.target.value);
        }
        if (event.target.name === "category") {
            setcategory(event.target.value);
        }
        if (event.target.name === "price") {
            setprice(event.target.value);
        }
    };

    const onSubmit = () => {
        var body = { name: nameMenu, category: category, price: (Number(price)) };
        BaseService.create("/menu/", body).then((response) => {
            console.log(response)
            closeModalEdit()
            window.location.reload()
        })
    }


    return (
        <>
            <div id="MenusEdit" class="modal">

                <div class="modal-content">
                    <h2>הוספת מנה</h2>
                    <table >
                            <tr>
                                <td>
                                    <select class="form-control" aria-label="Default select example" onChange={handleChange} name="category">
                                        <option></option>
                                        <option value="starter">מנות ראשונות</option>
                                        <option value="Soups">מרקים</option>
                                        <option value="desserts">קינוחים</option>
                                        <option value="MainCourse">מנה עיקרית</option>
                                    </select>
                                </td>
                                <td>קטגוריה</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        id="nameMenu"
                                        name="nameMenu"
                                        onChange={handleChange}
                                        value={nameMenu}
                                    />
                                </td>
                                <td>שם מנה</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        onChange={handleChange}
                                        value={price}
                                    />
                                </td>
                                <td>מחיר</td>
                            </tr>
                    </table>
                    <div>
                        <button class="close" disabled={nameMenu === '' || category === ''} onClick={() => onSubmit()}>
                            שמירה
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default MenusEdit