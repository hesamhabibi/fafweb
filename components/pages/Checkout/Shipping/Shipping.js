"use client"

import {useState} from "react";

import toCurrency from "../../../../utils/toCurrency";

import {Accordion, Button, Col, Container, Form, Row, Stack} from "react-bootstrap";

import Icon from "../../../common/Icon";
import NavLink from "../../../common/NavLink";

export default function PageCheckoutShipping() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayShippingTypes = [
        {id: '1', title: 'ارسال شود', active: true},
        {id: '2', title: 'خودم حضوری از شهر فافا دریافت می کنم', active: false}
    ]

    const arrayShippingMethods = [
        {id: '1', title: 'ارسال عادی', price: 'رایگان', text: 'پست سفارشی 3 تا 8 روز کاری', icon: <Icon name="Truck" size={48} absoluteStrokeWidth className="flip-h"/>, active: true},
        {id: '2', title: 'ارسال سریع', price: '49000', text: 'پست پیشتاز 2 تا 5 روز کاری', icon: <Icon name="TruckFast" size={48} absoluteStrokeWidth className="flip-h"/>, active: false}
    ]

    const arrayOffices = [
        {id: '1', title: 'فروشگاه شیراز', text: 'امکان تحویل از 3 روز کاری دیگر', icon: <Icon name="Truck" size={48} absoluteStrokeWidth className="ms-auto flip-h opacity-38"/>, active: true},
        {id: '2', title: 'فروشگاه تهران', text: '', icon: <Icon name="TruckFast" size={48} absoluteStrokeWidth className="ms-auto flip-h opacity-38"/>, active: false},
        {id: '3', title: 'فروشگاه اصفهان', text: '', icon: <Icon name="TruckFast" size={48} absoluteStrokeWidth className="ms-auto flip-h opacity-38"/>, active: false}
    ]

    const [collapseShipping, setCollapseShipping] = useState(arrayShippingTypes.find(({active}) => active).id)

    const ShippingTypesHandler = e => {

        setCollapseShipping(e.target.value)

    }

    const ShippingMethodsHandler = e => {


    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid="xxl">
            <Row className="gx-3 gx-lg-5 gy-3 pt-4">
                <Col xs>
                    <p className="fw-semibold lh-1 pb-1">سفارش خود را چگونه دریافت می کنید؟</p>
                    <div className="px-4 py-3 rounded-5 border shipping-types">
                        <div className="my-n1-25 fw-normal">
                            {
                                arrayShippingTypes.map(item => (
                                    <Form.Check type="radio" id={`checkboxShippingTypes${item.id}`} name="checkboxShippingTypes" label={item.title} defaultChecked={item.active} value={item.id} onChange={ShippingTypesHandler} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                    {/*<p className="fw-semibold lh-1 pb-1">سفارش خود را چگونه دریافت می کنید؟</p>*/}
                    {/*<Row className="g-3 fw-normal shipping-types">*/}
                    {/*    {*/}
                    {/*        arrayShippingTypes.map(item => (*/}
                    {/*            <Col xs key={item.id}>*/}
                    {/*                <div className="py-3 px-4 d-flex align-items-center position-relative">*/}
                    {/*                    <Form.Check type="radio" id={`checkboxShippingTypes${item.id}`} name="shippingTypes" label={item.title} defaultChecked={item.active} value={item.id} className="my-n1-25" onChange={ShippingTypesHandler}/>*/}
                    {/*                </div>*/}
                    {/*            </Col>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</Row>*/}
                    <Accordion activeKey={collapseShipping}>
                        <Accordion.Item eventKey="1" className="border-0 bg-transparent">
                            <Accordion.Body className="p-0">
                                <p className="fw-semibold lh-1 pb-1 pt-3 mt-4">شیوه ارسال را انتخاب کنید</p>
                                <div className="px-4 py-3 rounded-5 border shipping-methods">
                                    <div className="my-n1-25">
                                        <div className="py-2">
                                            {
                                                arrayShippingMethods.map((item, index) => (
                                                    <div className={`d-flex align-items-center${index ? ' mt-3 pt-3 border-top' : ''}`} key={index}>
                                                        <Form.Check type="radio" id={`checkboxMethods${item.id}`} name="shippingMethods" label="" defaultChecked={item.active} value={item.id} onChange={ShippingMethodsHandler}/>
                                                        <div className="opacity-54 mt-n1 ms-n1-50 me-3">{item.icon}</div>
                                                        <div>
                                                            <div className="lh-1 fw-normal">{item.title} <span className="fw-bold ms-1">{toCurrency(item.price)}</span></div>
                                                            <div className="lh-1 mt-2 opacity-54 ws-n1">{item.text}</div>
                                                        </div>
                                                    </div>
                                                    // <Form.Check type="radio" id={`checkboxMethods${item.id}`} name="checkboxMethods" label={item.title} defaultChecked={item.active} value={item.id} onChange={ShippingMethodsHandler}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/*<Row className="g-3 shipping-methods">*/}
                                {/*    {*/}
                                {/*        arrayShippingMethods.map(item => (*/}
                                {/*            <Col xs key={item.id}>*/}
                                {/*                <div className="py-3 px-4 d-flex align-items-center position-relative">*/}
                                {/*                    <Form.Check type="radio" id={`checkboxMethods${item.id}`} name="shippingMethods" label="" defaultChecked={item.active} value={item.id} onChange={ShippingMethodsHandler}/>*/}
                                {/*                    <div className="ps-2">*/}
                                {/*                        <div className="fw-normal">{item.title} <span className="fw-bold ms-1">{toCurrency(item.price)}</span></div>*/}
                                {/*                        <div className="opacity-54 ws-n1 mt-1-50">{item.text}</div>*/}
                                {/*                    </div>*/}
                                {/*                    {item.icon}*/}
                                {/*                </div>*/}
                                {/*            </Col>*/}
                                {/*        ))*/}
                                {/*    }*/}
                                {/*</Row>*/}
                                <p className="fw-semibold lh-1 pb-1 pt-3 mt-4">نشانی تحویل سفارش</p>
                                <div className="pt-4 pb-4 px-4 rounded-5 border">
                                    <div className="d-flex">
                                        <Icon name="MapPin" className="me-3 ms-n1"/>
                                        <div className="ms-n1-25">
                                            <div className="fw-normal">شیراز- خیابان جمهوری اسلامی- پلاک 124- طبقه سوم</div>
                                            <div className="mt-1 text-body-54-opaque">حسام حبیبی</div>
                                            <Button variant="link" size="sm" className="mt-3 bg-primary bg-opacity-12">تغییر یا ویرایش نشانی<Icon name="ChevronLeft" size={18} strokeWidth={1.25} absoluteStrokeWidth className="ms-2 me-n2"/></Button>
                                            {/*<Button variant="link" className="mt-3 bg-primary bg-opacity-12">تغییر یا ویرایش نشانی<Icon name="ChevronLeft" className="ms-2 me-n3-75"/></Button>*/}
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="border-0 bg-transparent">
                            <Accordion.Body className="p-0 d-flex flex-column justify-content-end">
                                <p className="fw-semibold lh-1 pb-1 pt-3 mt-4">به کدام فروشگاه مراجعه می‌کنید؟</p>
                                <div className="px-4 py-3 rounded-5 border offices">
                                    <div className="my-n1-25">
                                        <div className="py-2">
                                            {
                                                arrayOffices.map((item, index) => (
                                                    <div className={`d-flex align-items-center${index ? ' mt-3 pt-3 border-top' : ''}`} key={index}>
                                                        <Form.Check type="radio" id={`checkboxMethods${item.id}`} name="shippingMethods" label="" defaultChecked={item.active} value={item.id} onChange={ShippingMethodsHandler}/>
                                                        <div>
                                                            <div className="lh-1 fw-normal">{item.title}</div>
                                                            {
                                                                item.text ? (
                                                                    <div className="lh-1 mt-2 opacity-54 ws-n1">{item.text}</div>
                                                                ) : (
                                                                    <></>
                                                                )
                                                            }
                                                        </div>
                                                        <Button variant="link" size="sm" className="ms-auto bg-primary bg-opacity-12">نشانی</Button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/*<p className="fw-semibold lh-1 pb-1 pt-3 mt-4">به کدام فروشگاه مراجعه می‌کنید؟</p>*/}
                                {/*<Row className="g-3 shipping-methods">*/}
                                {/*    {*/}
                                {/*        arrayOffices.map(item => (*/}
                                {/*            <Col xs key={item.id}>*/}
                                {/*                <div className="py-3 px-4 d-flex align-items-center position-relative h-100">*/}
                                {/*                    <Form.Check type="radio" id={`checkboxOffices${item.id}`} name="shippingOffices" label="" defaultChecked={item.active} value={item.id} onChange={ShippingMethodsHandler}/>*/}
                                {/*                    <div className="ps-2">*/}
                                {/*                        <div className="fw-normal">{item.title}</div>*/}
                                {/*                        {*/}
                                {/*                            item.text ? (*/}
                                {/*                                <div className="opacity-54 ws-n1 mt-1-50">{item.text}</div>*/}
                                {/*                            ) : (*/}
                                {/*                                <></>*/}
                                {/*                            )*/}
                                {/*                        }*/}
                                {/*                    </div>*/}
                                {/*                    <Button variant="link" className="ms-auto px-0 z-1">نشانی</Button>*/}
                                {/*                </div>*/}
                                {/*            </Col>*/}
                                {/*        ))*/}
                                {/*    }*/}
                                {/*</Row>*/}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="pt-4 mt-2">
                        <Button variant="link" as={NavLink} href="/cart" className="px-0"><Icon name="ArrowRight" className="me-2"/>بازگشت به سبد خرید</Button>
                    </div>
                </Col>
                <Col xs={3} id="colSummery">
                    <div className="position-sticky" style={{top: `${24}px`}}>
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
                        <div className="rounded-4 px-4 pb-4 bg-body border-start border-end position-relative z-1 mt-n1-25">
                            <hr className="mt-0 border-top-0 opacity-100 text-transparent gradient"/>
                            <div className="d-flex fs-5 py-1">
                                <span className="me-auto fw-semibold">مجموع</span>
                                <span className="fw-bold price">{toCurrency(2350000)}</span>
                            </div>
                            <Stack className="pt-3">
                                <Button as={NavLink} href="/checkout/payment">ثبت و ادامـه</Button>
                            </Stack>
                        </div>
                        <div className="rounded-bottom-4 pt-4 px-4 pb-3 bg-body-tertiary mt-n4 fs-sm">
                            <div className="mt-3">
                                مرحله بعد: پرداخت
                                <div className="mt-1">اگر کد تخفیف دارید می توانید در مرحله بعد از آن استفاده کنید.</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}