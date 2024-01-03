"use client"

import {Modal} from "react-bootstrap";

export default function ModalFake({show, onHide, ...props}) {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Modal id="modalFake" show={show} onHide={onHide} {...props}/>
    )
}