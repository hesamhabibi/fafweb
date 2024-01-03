"use client"

import NavLink from "../../../common/NavLink";

import {Accordion, Button, Col, ListGroup, Row} from "react-bootstrap";
import Icon from "../../../common/Icon";
import Stars from "../../../common/Stars";

export default function PageAccountComments() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayComments = [
        {titleProduct: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', title: 'عنوان دیدگاه در اینجا'},
        {titleProduct: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', title: 'عنوان دیدگاه در اینجا'},
        {titleProduct: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', title: 'عنوان دیدگاه در اینجا'},
        {titleProduct: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', title: 'عنوان دیدگاه در اینجا'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="pageAccountComments" className={`flex-grow-1 d-flex flex-column${arrayComments.length ? '' : ' rounded-4 border'}`}>
            {
                arrayComments.length ? (
                    <Accordion alwaysOpen flush>
                        {
                            arrayComments.map((item, index) => (
                                <Accordion.Item eventKey={index}
                                                className={`rounded-4 border-end border-start${index === 0 ? ' border-top' : ''}${index === arrayComments.length - 1 ? ' border-bottom' : ' border-bottom-0'}`} key={index}>
                                    {
                                        index ? (
                                            <hr className="mt-n1-25 mb-0 mx-4 border-top-0 opacity-100 text-transparent"/>
                                        ) : (
                                            <></>
                                        )
                                    }
                                    <Accordion.Header className="pb-1-25">
                                        <picture className="ratio ratio-1x1 rounded-3 bg-body-tertiary me-4"/>
                                        <div className="my-n1-25">
                                            {/*<div className="pb-1-25">{item.title}</div>*/}
                                            {/*<div className="mt-2 fs-sm fw-light text-body-54-opaque">{item.titleProduct}</div>*/}
                                            <div>{item.titleProduct}</div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className="pt-3 px-4 pb-4">
                                        <div className="d-flex align-items-center lh-1 pb-4 text-body-54-opaque">
                                            امتیاز شما به این کالا
                                            <Stars value="4" className="mt-n1-50 ms-3"/>
                                            <span className="d-inline-block fw-bold ps-2 text-primary">4</span>
                                            <div className="ms-auto fw-extra-light">26 آبان 1402</div>
                                        </div>
                                        <div className="fw-semibold pb-3 mb-1-25">{item.title}</div>
                                        <p className="mb-2">خیلی لپتاپ خوب و زیبایی است</p>
                                        <div className="lh-lg fs-7">
                                            <ul className="list-unstyled mb-0">
                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>نکته مثبت اول</li>
                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>نکته مثبت دوم</li>
                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>همچنین نکته مثبت سوم</li>
                                                <li><Icon name="Minus" size={18} absoluteStrokeWidth className="me-2 text-danger"/>تنها نکته منفی</li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                ) : (
                    <div className="d-flex flex-column align-items-center text-center my-auto pb-5">
                        <Icon name="MessageCircle" size={72} className="mb-2 opacity-12"/>
                        <div className="fs-5 mb-4 text-body-54-opaque fw-extra-light">دیدگاهی ثبت نشده است</div>
                        <Button as={NavLink} href="/search" variant="outline-primary"><Icon name="Plus" className="me-2"/>ثبت دیدگاه</Button>
                    </div>
                )
            }
        </div>
    )
}
