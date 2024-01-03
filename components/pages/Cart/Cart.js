"use client"

import {useState} from "react";

import {Button, Col, Collapse, Container, Form, InputGroup, Row, Stack} from "react-bootstrap";

import toCurrency from "../../../utils/toCurrency";

import Icon from "../../common/Icon";
import NavLink from "../../common/NavLink";

export default function PageCart() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayProducts = [
        {id: 1, title: 'لپ تاپ گیمینگ 15.6 اینچ Asus مدل TUF Gaming F15 FX507ZE - RS73'},
        {id: 2, title: 'لپ تاپ گیمینگ 16 اینچ Asus مدل TUF Gaming F16 Advantage Edition FA617XS - N3079'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    const [collapseDiscountCode, setCollapseDiscountCode] = useState(false)

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="pageCart" className="mt-n4">
            <Container fluid="xxl">
                <Row className="g-3 g-lg-5">
                    {/*<Col xs={12}>*/}
                    {/*    <div className="d-flex flex-column align-items-center justify-content-center">*/}
                    {/*        <div className="fs-3">سبد خرید خالی می باشد!</div>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                    <Col xs>
                        <div className="d-flex align-items-center">
                            <h1 className="fs-4 mb-0">سبد خرید</h1>
                            <span className="h4 fw-light ms-2 mb-0">(2 کالا)</span>
                            <Button variant="light" size="sm" className="ms-auto"><Icon name="Heart" size={18} strokeWidth={1.25} absoluteStrokeWidth className="me-2"/>افزودن همه به مورد علاقه ها</Button>
                            <Button variant="light" size="sm" className="ms-2"><Icon name="Trash" size={18} strokeWidth={1.25} absoluteStrokeWidth className="me-2"/>حذف همه</Button>
                        </div>
                        <ul id="ulProducts" className="list-unstyled pt-3">
                            {
                                arrayProducts.map(item => (
                                    <li className="d-flex align-items-start mt-4" key={item.id}>
                                        <picture className="ratio ratio-1x1 bg-body-tertiary rounded-4 me-3 flex-shrink-0"/>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="mt-1 mb-1-50 fw-normal lh-md">{item.title}</a>
                                            <span className="mt-1 text-body-54-opaque">توضیحات محصول در اینجا</span>
                                            <span className="mt-1 text-body-54-opaque">مشخصات محصول در اینجا</span>
                                            <span className="mt-1 fw-bold mt-2 price">{toCurrency(1200000)}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col xs={3} id="colSummery">
                        <div className="position-sticky" style={{top: `${135}px`}}>
                            <div className="rounded-4 pt-3 px-4 pb-3 bg-body border-top border-start border-end position-relative z-1">
                                <div className="d-flex mt-1">
                                    <span className="me-auto">قیمت کالاها (2)</span>
                                    <span className="fw-bold price">{toCurrency(2450000)}</span>
                                </div>
                                <div className="d-flex mt-2">
                                    <span className="me-auto d-flex align-items-center">هزینه ارسال<Icon name="HelpCircle" size={18} strokeWidth={1.25} absoluteStrokeWidth className="ms-1 mt-n1-25 flip-h" role="button"/></span>
                                    <span className="fw-bold">رایگان</span>
                                </div>
                                <div className="d-flex mt-2 mb-1 text-danger">
                                    <span className="me-auto">تخفیف</span>
                                    <span className="fw-bold price">{toCurrency(100000)}</span>
                                </div>
                            </div>
                            {/*<div className="rounded-4 px-4 pb-3 bg-body border-start border-end position-relative z-1 mt-n1-25">*/}
                            {/*    <hr className="mt-0 border-top-0 opacity-100 text-transparent gradient"/>*/}
                            {/*    <div className="d-flex align-items-center pt-1" role="button" onClick={() => setCollapseDiscountCode(collapseDiscountCode => !collapseDiscountCode)}>*/}
                            {/*        کد تخفیف دارم<Icon name="ChevronDown" className={`ms-auto${collapseDiscountCode ? ' flip-v' : ''}`}/>*/}
                            {/*    </div>*/}
                            {/*    <Collapse in={collapseDiscountCode}>*/}
                            {/*        <div className="px-1-50 mx-n1-50">*/}
                            {/*            <div className="pt-3 pb-1">*/}
                            {/*                <InputGroup className="shadow-1-around rounded">*/}
                            {/*                    <Form.Control placeholder="کد را وارد کنید" className="border-0 me-1"/>*/}
                            {/*                    <Button variant="outline-light" className="border-0 px-3 text-reset">ثبت</Button>*/}
                            {/*                </InputGroup>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </Collapse>*/}
                            {/*    <div className="pt-1"/>*/}
                            {/*</div>*/}
                            <div className="rounded-4 px-4 pb-4 bg-body border-start border-end position-relative z-1 mt-n1-25">
                                <hr className="mt-0 border-top-0 opacity-100 text-transparent gradient"/>
                                <div className="d-flex fs-5 py-1">
                                    <span className="me-auto fw-semibold">مجموع</span>
                                    <span className="fw-bold price">{toCurrency(2350000)}</span>
                                </div>
                                <Stack className="pt-3">
                                    <Button as={NavLink} href="/checkout/shipping">نهایی کردن سفارش</Button>
                                </Stack>
                            </div>
                            <div className="rounded-bottom-4 pt-4 px-4 pb-3 bg-body-tertiary mt-n4 fs-sm">
                                <div className="mt-3">
                                    مرحله بعد: انتخاب شیوه ارسال
                                    <div className="mt-1">درصورت انتخاب شیوه ارسال سریع، هزینه ارسال محاسبه و به مجموع اضافه خواهد شد.</div>
                                </div>
                            </div>
                            <div className="mt-5 rounded-4 px-4 py-3 d-flex border">
                                <Icon name="Gift" className="me-2 flex-shrink-0 text-body-54-opaque"/>
                                <div className="py-1-50">
                                    <div className="fw-normal">
                                        هدیه به دیگری
                                    </div>
                                    <div className="fs-sm mt-1-50">امکان ارسال سفارش به آدرس دیگری به عنوان هدیه با بسته بندی ویژه هدیه (در مرحله بعد)</div>
                                </div>
                            </div>
                            <div className="mt-3 rounded-4 px-4 py-3 d-flex bg-primary bg-opacity-12">
                                <Icon name="Truck" className="me-2 flex-shrink-0 text-primary flip-h"/>
                                <div className="py-1-50">
                                    <div className="fw-normal">
                                        ارسال رایگان
                                    </div>
                                    <div className="mt-1-50 ws-n1">برای سبدهای خرید بیشتر 899 هزار تومان</div>
                                </div>
                            </div>
                            <div className="mt-3 rounded-4 px-4 py-3 d-flex bg-primary bg-opacity-12">
                                <Icon name="TruckFast" className="me-2 flex-shrink-0 text-primary flip-h"/>
                                <div className="py-1-50">
                                    <div className="fw-normal">
                                        ارسال سریع
                                    </div>
                                    <div className="mt-1-50 ws-n1">مبلغ 49 هزار تومان به هر نقطه از ایران</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
