"use client"

import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";

import {Button, Col, Nav, Row} from "react-bootstrap";
import Icon from "../../common/Icon";

export default function SearchSorts() {

    // -----------------------------------------------------------------------------------------------------------------

    const arraySorts = [
        {id: 1, title: 'مرتبط ترین'},
        {id: 2, title: 'پربازدیدترین'},
        {id: 3, title: 'جدیدترین'},
        {id: 4, title: 'پرفروش ترین'},
        {id: 5, title: 'ارزان ترین'},
        {id: 6, title: 'گران ترین'}
    ]

    const splideOptions = {
        direction: 'rtl',
        gap: '1rem',
        arrows: false,
        pagination: false,
        autoWidth: true,
        drag: 'free',
        padding: {
            right: '1rem',
            left: '1rem'
        }
    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div className="border-bottom pb-1 lh-1 mt-n2">
            <Row className="gy-0 gx-3 align-items-center mb-1-25">
                <Col xs="auto" className="pe-0">مرتب سازی:</Col>
                <Col id="colSorts" className="px-0 overflow-hidden position-relative">
                    <Nav defaultActiveKey="/home" className="d-block text-nowrap">
                        <Splide aria-label="" hasTrack={ false } options={ splideOptions }>
                            <SplideTrack>
                                {
                                    arraySorts.map((item, index) => (
                                        <SplideSlide key={item.id}><Nav.Link href="" className={`p-0${index === 0 ? '' : ' text-reset'}`}>{item.title}</Nav.Link></SplideSlide>
                                    ))
                                }
                            </SplideTrack>
                        </Splide>
                    </Nav>
                </Col>
                <Col xs="auto"><Button variant="icon" className="text-primary"><Icon name="LayoutGrid"/></Button></Col>
                <Col xs="auto" className="ps-0"><Button variant="icon"><Icon name="List" className="flip-h"/></Button></Col>
            </Row>
        </div>
    )
}
