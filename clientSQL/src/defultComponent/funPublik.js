import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import BaseService from "../service/base.service.tsx";
import * as toastr from "toastr";




export const GoBack = () => {
    let navigate = useNavigate();
    return (
        <div class="GoBack" onClick={() => navigate(-1)} />
    )
}

export const Reservation = (props) => {
    console.log("props", props)
    return (
        <button class="iconButton" onClick={() => { window.location.href = `/diners/sit/${props.item.id}/reservation` }}>
            <img src="https://img.icons8.com/ios-filled/30/ab5e2a/meal.png" />
        </button>
    )
}

export const Payment = (props) => {

    let body = { name: props.item.name, size: (Number(props.item.size)), queue: "awaitingbill" };
    return (
        <button class="iconButton" onClick={() =>
            BaseService.update("/diners/", props.item.id, body).then((rp) => {
                if (rp.Status) {
                    toastr.success("Finance updated", rp.Data);
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
                window.location.reload()
            })}>
            <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/30/ab5e2a/external-payment-payment-kmg-design-glyph-kmg-design-1.png" />
        </button>
    )
}

export const Completion = (props) => {
    console.log("props.item.id", props.item.id)
    return (
        <button class="iconButton" onClick={() =>
            BaseService.delete('/diners/', { id: props.item.id }).then((rp) => {
                if (rp.Status) {
                    toastr.success("Finance updated", rp.Data);
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
                window.location.reload()
            })
        }>
            <img src="https://img.icons8.com/ios-filled/30/ab5e2a/checked-checkbox.png" />
        </button>
    )
}

export const Delete = (props) => {
    return (
        <button id="myBtn"
        // onClick={() => openModal({ ...props })}
        >
            <img src="https://img.icons8.com/material/30/ab5e2a/filled-trash.png" />
        </button>
    )
}



