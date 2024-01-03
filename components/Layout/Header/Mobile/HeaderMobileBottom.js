"use client"

import {useState} from "react";

import OffcanvasSearch from "../../../offcanvses/Search/Search";

import {InputGroup, Form} from "react-bootstrap";

import Icon from "../../../common/Icon";

export default function HeaderMobileBottom() {

    // -----------------------------------------------------------------------------------------------------------------

    const [offcanvasSearchShow, setOffcanvasSearchShow] = useState(false)

    const offcanvasSearchHideHandler = res => {

        console.log(res)

        setOffcanvasSearchShow(false)

    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <div id="headerBottom" className="w-100 pt-2">
                <InputGroup className="bg-body rounded">
                    <InputGroup.Text className="position-absolute top-0 start-0 border-0 bg-transparent p-1">
                        <span className="p-1-50"><Icon name="Search" className="m-1-25 flip-h text-body-38-opaque"/></span>
                    </InputGroup.Text>
                    <Form.Control aria-label="Search" placeholder={'کلمات کلیدی، برند، دسته بندی...'} className="rounded-start bg-transparent ms-0 ps-5" readOnly onClick={() => setOffcanvasSearchShow(true)}/>
                </InputGroup>
            </div>
            <OffcanvasSearch show={offcanvasSearchShow} onHide={res => offcanvasSearchHideHandler(res)}/>
        </>
    )
}