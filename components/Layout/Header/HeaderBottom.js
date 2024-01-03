"use client"

import WidgetSliderText from "../../common/widgets/SliderText/SliderText";

import {Row, Col, Nav} from "react-bootstrap";

import Icon from "../../common/Icon";

export default function HeaderBottom() {

    const arraySliderText = [
        {id: 1, title: 'بهترین معاملات امروز', href: '', className: 'py-1-4'},
        {id: 2, title: 'برترین فروشنده ها', href: '', className: 'py-1-4 featured'},
        {id: 3, title: 'ترخیص کالا', href: '', className: 'py-1-4'},
        {id: 4, title: 'خدمات اپراتورها', href: '', className: 'py-1-4'},
        {id: 5, title: 'پرفروش ترین محصولات امروز', href: '', className: 'py-1-4'},
        {id: 6, title: 'بهترین کانفیگ PC', href: '', className: 'py-1-4 featured'},
        // {id: 7, title: 'تاریخچه جستجو', href: '', className: 'py-1-4'},
        {id: 8, title: 'محبوب ترین عرضه کنندگان امروز', href: '', className: 'py-1-4'}
    ]

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="headerBottom" className="w-100 pt-2 lh-1 pe-auto" data-bs-theme="dark">
            <Row className="flex-nowrap align-items-center my-1 gy-0">
                <Col xs="auto" className="flex-shrink-0">
                    <Nav className="flex-row ws-n1 fw-extra-light">
                        <Nav.Link className="p-0"><Icon name="SupportCenter" size={16} strokeWidth={1.25} absoluteStrokeWidth className="my-n2 me-2"/>مرکز پشتیبانی</Nav.Link>
                        <Nav.Link className="p-0 ms-3"><Icon name="Feedback" size={16} strokeWidth={1.25} absoluteStrokeWidth className="my-n2 me-2"/>بازخورد و نظرسنجی</Nav.Link>
                    </Nav>
                </Col>
                <Col className="px-0 border-start border-white border-opacity-25 ms-3 position-relative marquee">
                    <WidgetSliderText data={arraySliderText} fluid="xxl" options={{padding: {right: 'calc(var(--bs-gutter-x) * 0.5 + .25rem)', left: 'calc(var(--bs-gutter-x) * 0.5)'}}} className="ws-n1 fw-extra-light px-0"/>
                </Col>
            </Row>
        </div>
    )
}