"use client"

import toCurrency from "../../../../utils/toCurrency";

import NavLink from "../../../common/NavLink";

import {Button, Col, ListGroup, Row} from "react-bootstrap";
import Icon from "../../../common/Icon";

export default function PageAccountFavorites() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayFavorites = [
        {title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', price: '2050000', discount: '2450000'},
        {title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', price: '2050000', discount: '2450000'},
        {title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', price: '2050000', discount: '2450000'},
        {title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', price: '2050000', discount: '2450000'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    return (
        // <div id="pageAccountFavorites" className={`flex-grow-1 d-flex flex-column${arrayFavorites.length ? '' : ' rounded-4 border'}`}>
        <div id="pageAccountFavorites" className="flex-grow-1 d-flex flex-column rounded-4 border">
            {
                arrayFavorites.length ? (
                    <ListGroup variant="flush" className="mx-4">
                        {
                            arrayFavorites.map((item, index) => (
                                <ListGroup.Item className="py-4 px-0" key={index}>
                                    <Row className="g-3 g-lg-4">
                                        <Col xs="auto">
                                            <picture className="ratio ratio-1x1 bg-body-tertiary rounded-3 d-block"/>
                                        </Col>
                                        <Col xs>
                                            {item.title}
                                            <div className="d-flex align-items-baseline mt-1">
                                                <span className="text-body fw-bold fs-5 price">{toCurrency(item.price)}</span>
                                                <del className="text-body-38-opaque ms-2 price">{toCurrency(item.discount, null, '')}</del>
                                            </div>
                                        </Col>
                                        <Col xs="auto" className="text-nowrap">
                                            <Button variant="icon" className="opacity-54 me-2"><Icon name="Trash"/></Button>
                                            <Button variant="outline-primary" className="fs-sm">افـزودن به سبد خرید</Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                ) : (
                    <div className="d-flex flex-column align-items-center text-center my-auto pb-5">
                        <Icon name="Heart" size={72} className="mb-2 opacity-12"/>
                        <div className="fs-5 mb-4 text-body-54-opaque fw-extra-light">کالایی به مورد علاقه ها اضافه نشده است</div>
                        <Button as={NavLink} href="/search" variant="outline-primary"><Icon name="Plus" className="me-2"/>افزودن به مورد علاقه ها</Button>
                    </div>
                )
            }
        </div>
    )
}
