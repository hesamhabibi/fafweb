"use client"

import {useState} from "react";

import toCurrency from "../../../utils/toCurrency";

import ModalQuickView from "../../modals/QuickView/QuickView";

import Stars from "../../common/Stars";
import Pagination from "../../common/Pagination";
import SeeMore from "../../common/SeeMore";

import {Button, Col, Row} from "react-bootstrap";

import Icon from "../../common/Icon";

export default function SearchResult() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayProducts = [
        {id: 1, title: 'لپ تاپ گیمینگ 15.6 اینچ Asus مدل TUF Gaming F15 FX507ZE - RS73', stars: 3, price: '15000000', discount: '10100000', flag: <span className="text-danger">فروش ویژه</span>},
        {id: 2, title: 'لپ تاپ گیمینگ 15.6 اینچ MSI مدل THIN GF63 12UCX', stars: 5, price: '12000000', discount: ''},
        {id: 3, title: 'لپ تاپ گیمینگ 15.6 اینچ MSI مدل Katana 15 B13VEK', stars: 4, price: '1500000', discount: '1020000'},
        {id: 4, title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل IdeaPad Gaming 3 15IAH7', stars: 3, price: '15000000', discount: '', flag: <span className="text-info">ارسال امروز</span>},
        {id: 5, title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل LOQ 15IRH8', stars: 2, price: '18700000', discount: '10100000'},
        {id: 6, title: 'لپ تاپ گیمینگ 15.6 اینچ MSI مدل Katana 15 B13UDXK', stars: 2, price: '25000000', discount: '10100000'},
        {id: 7, title: 'لپ تاپ گیمینگ 16 اینچ Asus مدل TUF Gaming F16 Advantage Edition FA617XS - N3079', stars: 3, price: '23000000', discount: ''},
        {id: 8, title: 'لپ تاپ گیمینگ 15.6 اینچ Lenovo مدل LOQ 15IRH8', stars: 1, price: '10000000', discount: '10100000'},
        {id: 9, title: 'لپ تاپ گیمینگ 16 اینچ Asus مدل TUF Gaming F16 Advantage Edition FA617XS - N3079', stars: '', price: '11000000', discount: '10100000'},
        {id: 10, title: 'لپ تاپ گیمینگ 15.6 اینچ MSI مدل Katana 15 B13UDXK', stars: 3, price: '12000000', discount: '10100000'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    const [modalQuickViewShow, setModalQuickViewShow] = useState(false)

    const [modalData, setModalData] = useState(null);

    const modalQuickViewShowHandler = (e, item) => {

        e.preventDefault()

        setModalData(() => ({id: item.id, title: item.title}))

        setModalQuickViewShow(true);

    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <Row className="gy-4 gx-3">
                <Col xs={12} className="d-flex"><div>34 کالا</div><div className="ms-auto">نمایش 1 از 22</div></Col>
                {
                    arrayProducts.map(item => (
                        <Col xs={6} md={4} lg={4} xxl={3} key={item.id}>
                            <a href="" className="d-flex flex-column rounded-4 position-relative h-100" key={item}>
                                <div className="position-relative">
                                    <picture className="d-block ratio ratio-1x1 bg-body-tertiary rounded-4"></picture>
                                    <div className="position-absolute bottom-0 end-0 add-to-cart">
                                        <Button variant="icon" onClick={e => modalQuickViewShowHandler(e, item)} className="btn-secondary rounded-circle shadow-1"><Icon name="ShoppingCartAdd" className="flip-h m-2 m-lg-3-75"/></Button>
                                    </div>
                                </div>
                                {
                                    item.stars ? (
                                        <span className="lh-0 mt-3-75 mb-n2"><Stars value={item.stars} size="xs"/><span className="fs-9 text-body opacity-54 ps-1"> 2 دیدگاه</span></span>
                                    ) : (
                                        <></>
                                    )
                                }
                                <span className="text-body mt-3 mb-1 fw-normal">{item.title}</span>
                                <span className="fs-sm mb-1-50">{item.flag}</span>
                                <span className="d-flex align-items-baseline mt-auto">
                                    <span className="text-body fw-bold fs-5 price">{toCurrency(item.price)}</span>
                                    <del className="text-body-38-opaque ms-2 price">{toCurrency(item.discount, null, '')}</del>
                                </span>
                                <span className="rounded-top-5 rounded-bottom-4 position-absolute top-0 start-0 bottom-0 end-0 mt-n3 mx-n3 bg-body z-n1 shadow-sm p-3 d-flex flex-column invisible opacity-0 border-top">
                                    <span className="btn btn-secondary mt-auto" onClick={e => modalQuickViewShowHandler(e, item)}>مشاهده پیش نمایش</span>
                                </span>
                            </a>
                        </Col>
                    ))
                }
                <Col xs={12} className="pt-4 text-center"><SeeMore/></Col>
                <Col xs={12} className="pt-4 d-flex justify-content-center"><Pagination total={10} current={2}/></Col>
            </Row>
            <ModalQuickView show={modalQuickViewShow} onHide={() => setModalQuickViewShow(false)} data={modalData}/>
        </>
    )
}
