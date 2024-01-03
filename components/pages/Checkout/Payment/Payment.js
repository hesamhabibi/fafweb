"use client"

import {useState} from "react";

import toCurrency from "../../../../utils/toCurrency";

import {Button, Col, Container, Row, Stack, Collapse, InputGroup, Form, Alert} from "react-bootstrap";

import Icon from "../../../common/Icon";

export default function PageCheckoutPayment() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayPaymentMethods = [
        {id: '1', title: 'پرداخت اینترنتی'},
        {id: '2', title: 'پرداخت در محل (با کارت بانکی)'},
        {id: '3', title: 'پرداخت کارت به کارت'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    const [collapseDiscountCode, setCollapseDiscountCode] = useState(false)

    // -----------------------------------------------------------------------------------------------------------------
    
    const PaymentMethodsHandler = () => {
      
    }
    
    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid="xxl">
            <Row className="gx-3 gx-lg-5 gy-3 pt-4">
                <Col xs>
                    <p className="fw-semibold lh-1 pb-1">روش پرداخت را انتخاب کنید</p>
                    <div className="px-4 py-3 rounded-5 border payment-methods">
                        <div className="my-n1-25 fw-normal">
                            {
                                arrayPaymentMethods.map(item => (
                                    <Form.Check type="radio" id={`paymentMethods${item.id}`} name="paymentMethods" label={item.title} defaultChecked={item.active} value={item.id} onChange={PaymentMethodsHandler} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                    {/*<div className="mt-3">*/}
                    {/*    <div className="py-3 px-4 rounded-4 shadow-1-around">*/}
                    {/*        <div className="d-flex align-items-center fw-bold lh-1 me-n1" role="button" onClick={() => setCollapseDiscountCode(collapseDiscountCode => !collapseDiscountCode)}>*/}
                    {/*            <Icon name="BadgePercent" className="ms-n1-50 me-3"/>*/}
                    {/*            <span className="ms-n1-25">کد تخفیف دارم</span>*/}
                    {/*            <span className="ms-auto btn btn-link px-0">افزودن<Icon name="ChevronDown" className="ms-2"/></span>*/}
                    {/*        </div>*/}
                    {/*        <Collapse in={collapseDiscountCode}>*/}
                    {/*            <div className="px-1-50 mx-n1-50">*/}
                    {/*                <div className="pt-3 pb-1">*/}
                    {/*                    <InputGroup className="mb-1 rounded border">*/}
                    {/*                        <Form.Control placeholder="کد را وارد کنید" className="border-0 me-1"/>*/}
                    {/*                        <Button variant="outline-light" className="border-0 px-3 text-reset">ثبت</Button>*/}
                    {/*                    </InputGroup>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </Collapse>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <p className="fw-semibold lh-1 pb-1 pt-3 mt-4">توضیحی در مورد سفارش دارید؟</p>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className="pt-2 mt-4">
                        <Form.Check type="checkbox" id="available" label="درخواست تست کالاها (رایگان)" className="fw-bold test"/>
                        <div className="ps-5 mt-n1-50 ms-n3-75 lh-md text-body-54-opaque fs-sm">
                            <ul className="list-bullet mb-0">
                                <li>۲ تا ۳ روز کاری به زمان تحویل سفارش شما اضافه خواهد شد.</li>
                                <li>متخصصان بخش فنی برای بررسی کالا نیاز دارند پلمپ و جعبه کالاها را باز کنند.</li>
                            </ul>
                        </div>
                    </div>
                    <Alert variant="light" className="mt-4 border-0 mb-0">
                        <Icon name="Info" className="me-2"/>
                        برای دریافت فاکتور، بعد از دریافت سفارش از حساب کاربری / سفارش ها بازدید کنید.
                    </Alert>
                </Col>
                <Col xs={3} id="colSummery">
                    <div className="position-sticky" style={{top: `${24}px`}}>
                        <div className="rounded-4 px-4 py-3 border mb-3">
                            <div className="d-flex align-items-center py-1" role="button" onClick={() => setCollapseDiscountCode(collapseDiscountCode => !collapseDiscountCode)}>
                                کد تخفیف دارم<Icon name="ChevronDown" className={`ms-auto me-n1${collapseDiscountCode ? ' flip-v' : ''}`}/>
                            </div>
                            <Collapse in={collapseDiscountCode}>
                                <div className="px-1-50 mx-n1-50">
                                    <div className="pt-3 pb-2">
                                        <InputGroup className="shadow-1-around rounded mt-n1">
                                            <Form.Control placeholder="کد را وارد کنید" className="border-0 me-1"/>
                                            <Button variant="outline-light" className="border-0 px-3 text-reset">ثبت</Button>
                                        </InputGroup>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
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
                        {/*    <div className="d-flex align-items-center py-1" role="button" onClick={() => setCollapseDiscountCode(collapseDiscountCode => !collapseDiscountCode)}>*/}
                        {/*        کد تخفیف دارم<Icon name="ChevronDown" className={`ms-auto${collapseDiscountCode ? ' flip-v' : ''}`}/>*/}
                        {/*    </div>*/}
                        {/*    <Collapse in={collapseDiscountCode}>*/}
                        {/*        <div className="px-1-50 mx-n1-50">*/}
                        {/*            <div className="pt-3 pb-2">*/}
                        {/*                <InputGroup className="shadow-1-around rounded mt-n1">*/}
                        {/*                    <Form.Control placeholder="کد را وارد کنید" className="border-0 me-1"/>*/}
                        {/*                    <Button variant="outline-light" className="border-0 px-3 text-reset">ثبت</Button>*/}
                        {/*                </InputGroup>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </Collapse>*/}
                        {/*</div>*/}
                        <div className="rounded-4 px-4 pb-4 bg-body border-start border-end position-relative z-1 mt-n1-25">
                            <hr className="mt-0 border-top-0 opacity-100 text-transparent gradient"/>
                            <div className="d-flex fs-5 py-1">
                                <span className="me-auto fw-semibold">مجموع</span>
                                <span className="fw-bold price">{toCurrency(2350000)}</span>
                            </div>
                            <Stack className="pt-3">
                                <Button>پرداخت و ثبت سفارش</Button>
                            </Stack>
                        </div>
                        <div className="rounded-bottom-4 pt-4 px-4 pb-3 bg-body-tertiary mt-n4 fs-sm">
                            <div className="mt-3 d-flex">
                                <Icon name="ShieldCheck" size={18} strokeWidth={1.25} absoluteStrokeWidth className="me-2 mt-1-25"/>                                پرداخت از طریق درگاه امن انجام می شود.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}