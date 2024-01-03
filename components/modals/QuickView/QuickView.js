"use client"

import {Modal, Button, Form} from "react-bootstrap";

import ImgLogo from "../../../assets/img/fafa-logo-sign-title.svg";

export default function ModalQuickView({show, onHide, data, ...props}) {
    
    // -----------------------------------------------------------------------------------------------------------------

    const onShowHandler = () => {
      
    }
    
    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Modal id="modalQuickView" aria-labelledby="modalQuickViewTitle" show={show} onShow={onShowHandler} onHide={onHide} centered size="xl" {...props}>
            <Modal.Header closeButton>
                <Modal.Title id="modalQuickViewTitle">{data?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*    <Button type="submit" variant="secondary" form="formModalAuth" className="w-100 m-sm-0">تایید و دریافت کد</Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    )
}