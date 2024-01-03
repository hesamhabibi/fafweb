"use client"

import {Offcanvas, Navbar} from "react-bootstrap";

import Icon from "../../common/Icon";

export default function OffcanvasCart({show, onHide, ...props}) {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <Navbar.Offcanvas id="offcanvasCart" aria-labelledby="offcanvasCartTitle" show={show} onHide={onHide} placement="end" {...props} className="rounded-5 m-1">
                <Offcanvas.Header closeButton className="ps-lg-4">
                    <Offcanvas.Title as="h6" id="offcanvasCartTitle">سبد خرید</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="px-lg-4">

                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
}