"use client"

import {useRef, useState} from "react";

import {Form, InputGroup, Offcanvas, ListGroup} from "react-bootstrap";

import Icon from "../../common/Icon";

export default function OffcanvasSearch({data, show, onHide, ...props}) {

    const refSearch = useRef(null)

    // -----------------------------------------------------------------------------------------------------------------

    const [query, setQuery] = useState('')

    const queryHandler = e => {

        setQuery(e.target.value)

    }

    // -----------------------------------------------------------------------------------------------------------------

    const onHideHandler = () => {

        onHide()

    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Offcanvas id="offcanvasSearch" show={show} onShow={() => refSearch.current.focus()} onHide={onHideHandler} backdrop={false} placement="bottom" {...props} className="vh-100">
            <Offcanvas.Header>
                <InputGroup className="rounded shadow-1-around ps-1-25">
                    <InputGroup.Text className="position-absolute top-0 start-0 border-0 bg-transparent p-1 z-1" onClick={onHide}>
                        <span className="p-1-50"><Icon name="ArrowLeft" className="m-1-25 flip-h text-body-54-opaque"/></span>
                    </InputGroup.Text>
                    <Form.Control id="offcanvasSearchSearch" aria-label="Search" placeholder={'جستجو...'}
                                  value={query} onChange={queryHandler}
                                  className="rounded bg-transparent ms-0 px-5 border-0 z-0" ref={refSearch}/>
                    {
                        query ? (
                            <InputGroup.Text className="position-absolute top-0 end-0 border-0 bg-transparent p-1 z-1" onClick={() => {setQuery(''); refSearch.current.focus()}}>
                                <span className="p-1-50"><Icon name="XCircle" className="m-1-25 flip-h"/></span>
                            </InputGroup.Text>
                        ) : (
                            <></>
                        )
                    }
                </InputGroup>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex flex-column px-0">
                        <span>کاور <b>{query}</b> گوشی</span>
                        <span className="text-body-54-opaque mt-1">در دسته <span className="text-primary">گوشی</span></span>
                    </ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}