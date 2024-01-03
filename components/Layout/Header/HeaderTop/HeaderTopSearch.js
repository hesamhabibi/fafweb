"use client"

import {useCallback, useEffect, useState} from "react";

import ModalFake from "../../../modals/Fake/Fake";

import {Button, Col, Fade, Form, InputGroup, Row} from "react-bootstrap";

import Icon from "../../../common/Icon";
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import NavLink from "../../../common/NavLink";

export default function HeaderTopSearch() {

    // -----------------------------------------------------------------------------------------------------------------

    const [modalFakeShow, setModalFakeShow] = useState(false)

    const searchHandler = useCallback(() => {

        if (!modalFakeShow)
            setModalFakeShow(true)

    }, [modalFakeShow])

    // -----------------------------------------------------------------------------------------------------------------

    const arrayChips = [
        {content: <NavLink href="" className="d-flex align-items-center">موبایل<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">پردازنده<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">هوا<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">دوچرخه<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">آسیاب برقی<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">شب یلدا<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">آسیاب<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">مچ بند<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">اره برقی<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
        {content: <NavLink href="" className="d-flex align-items-center">کاور شفاف گوشی<Icon name="ChevronLeft" size={18} absoluteStrokeWidth className="ms-1 me-n1"/></NavLink>},
    ]

    const splideOptions = {
        direction: 'rtl',
        gap: '1.5rem',
        arrows: false,
        pagination: false,
        autoWidth: true,
        padding: {
            right: '14px',
            left: '14px',
        },
        breakpoints: {
            1200: {
                destroy: true,
            }
        }
    }

    const splideOptionsHot = {
        direction: 'rtl',
        gap: '.25rem',
        arrows: false,
        pagination: false,
        autoWidth: true,
        padding: {
            right: 'calc(.75rem + 24px + .75rem)',
            left: '1rem',
        }
    }

    // -----------------------------------------------------------------------------------------------------------------

    useEffect(() => {

        const handleHeader = e => {

            if(!e.target.closest('.div-search'))
                setModalFakeShow(false)

        }

        document.querySelector('#header')?.addEventListener('click', handleHeader)

        return () => document.querySelector('#header')?.removeEventListener('click', handleHeader)

    }, [])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <div className="flex-grow-1 mx-5 position-relative div-search">
                <InputGroup className="bg-body rounded-5">
                    <InputGroup.Text className="position-absolute top-0 start-0 border-0 bg-transparent py-2 ps-2 pe-0 ms-1">
                        {
                            modalFakeShow ? (
                                <Icon name="Loader" className="text-body-38-opaque"/>
                            ) : (
                                <Icon name="Search" className="flip-h text-body-38-opaque"/>
                            )
                        }
                    </InputGroup.Text>
                    <Form.Control aria-label="Search" placeholder={'کلمات کلیدی، برند، دسته بندی...'} className="rounded-5 bg-transparent ms-0 ps-5" onClick={searchHandler}/>
                    <InputGroup.Text className="position-absolute top-0 end-0 border-0 bg-transparent p-2">
                        {
                            modalFakeShow ? (
                                <Icon name="XCircle"/>
                            ) : (
                                <></>
                            )
                        }
                    </InputGroup.Text>
                </InputGroup>
                <Fade in={modalFakeShow} unmountOnExit>
                    <div className="position-absolute top-100 start-0 end-0 z-1 mt-1 div-search-result">
                        <div className="bg-body overflow-hidden">
                            <Splide hasTrack={ false } options={ splideOptions } className="border-bottom fw-normal">
                                <SplideTrack>
                                    {
                                        [1,2,3].map((item, index) => (
                                            <SplideSlide className={index ? 'mt-1 mt-xl-0' : ''} key={index}>
                                                <NavLink href="" className="d-flex align-items-center">
                                                    <picture className="ratio ratio-1x1 bg-body-tertiary rounded-3 me-2 me-xl-3-75 flex-shrink-0"/>نام محصول {item} در اینجا خواهد بود که شاید</NavLink>
                                            </SplideSlide>
                                        ))
                                    }
                                </SplideTrack>
                            </Splide>
                            {/*<ul className="list-unstyled mb-0 border-bottom fw-normal">*/}
                            {/*    <li><NavLink href="" className="d-flex align-items-center"><picture className="ratio ratio-1x1 bg-body-tertiary rounded-3 me-2"/>نام محصول 1</NavLink></li>*/}
                            {/*    <li className="mt-1"><NavLink href="" className="d-flex align-items-center"><picture className="ratio ratio-1x1 bg-body-tertiary rounded-3 me-2"/>نام محصول 2</NavLink></li>*/}
                            {/*    <li className="mt-1"><NavLink href="" className="d-flex align-items-center"><picture className="ratio ratio-1x1 bg-body-tertiary rounded-3 me-2"/>نام محصول 3</NavLink></li>*/}
                            {/*</ul>*/}
                        </div>
                        <Row className="g-0">
                            <Col xl className="bg-body pt-3">
                                <ul className="list-unstyled mb-0 px-3-75 pb-4 border-bottom">
                                    <li className="mt-2 d-flex align-items-center">
                                        <Icon name="Category" className="me-3-75 opacity-25"/>در دسته بندی<NavLink href="" className="ms-2 fw-normal">گوشی موبایل</NavLink>
                                    </li>
                                    <li className="mt-2 pt-1-50 d-flex align-items-center">
                                        <Icon name="Category" className="me-3-75 opacity-25"/>در دسته بندی<NavLink href="" className="ms-2 fw-normal">کاور گوشی موبایل</NavLink>
                                    </li>
                                    <li className="mt-2 pt-1-50 d-flex align-items-center">
                                        <Icon name="Category" className="me-3-75 opacity-25"/>در دسته بندی<NavLink href="" className="ms-2 fw-normal">لوازم جانبی</NavLink>
                                    </li>
                                </ul>
                            </Col>
                            <Col xl className="bg-body pt-3 ps-xl-1-25 ms-xl-n1-25 position-relative">
                                <ul className="list-unstyled mb-0 px-3-75 pb-4">
                                    <li className="mt-2 d-flex align-items-center">
                                        <Icon name="Brand" className="me-3-75 opacity-25"/>در برند<NavLink href="" className="ms-2 fw-normal">شیائومی</NavLink>
                                    </li>
                                    <li className="mt-2 pt-1-50 d-flex align-items-center">
                                        <Icon name="Brand" className="me-3-75 opacity-25"/>در برند<NavLink href="" className="ms-2 fw-normal">سامسونگ</NavLink>
                                    </li>
                                    <li className="mt-2 pt-1-50 d-flex align-items-center">
                                        <Icon name="Brand" className="me-3-75 opacity-25"/>در برند<NavLink href="" className="ms-2 fw-normal">Apple</NavLink>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <div className="bg-body mt-1-50 pt-4 ps-3-75 pb-3 pe-3 hot">
                            <div className="fw-semibold mt-n1-25"><Icon name="Flame" className="me-3-75 opacity-38"/>جستجوهای پرطرفدار</div>
                            <Splide hasTrack={ false } options={ splideOptionsHot } className="mt-3-75 ms-n3-75 me-n3 fw-normal chips">
                                <SplideTrack>
                                    {
                                        arrayChips.map((item, index) => (
                                            <SplideSlide className="chips-item" key={index}>{item.content}</SplideSlide>
                                        ))
                                    }
                                </SplideTrack>
                            </Splide>
                        </div>
                    </div>
                </Fade>
            </div>
            <ModalFake show={modalFakeShow} onHide={() => setModalFakeShow(false)} keyboard={false} autoFocus={false} backdropClassName="modal-fake-header-search-backdrop" className="modal-fake-header-search"/>
        </>
    )
}