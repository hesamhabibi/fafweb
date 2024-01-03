"use client"

import { usePathname } from 'next/navigation'

import NavLink from "../../components/common/NavLink";

import {Col, Container, Navbar, Row} from "react-bootstrap";

import ImgLogo from "../../assets/img/fafa-logo-sign-title.svg";
import Icon from "../../components/common/Icon";
import AccountLayout from "../account/layout";

export default function CheckoutLayout({children}) {

    const pathname = usePathname()

    // -----------------------------------------------------------------------------------------------------------------

    const arraySteps = [
        {title: 'سبد خرید', href: '/cart', icon: <Icon name="ShoppingCart" className="me-2 flex-shrink-0"/>, active: pathname.includes('cart')},
        {title: 'شیوه ارسال', href: '/checkout/shipping', icon: <Icon name="Truck" className="me-2 flex-shrink-0 flip-h"/>, active: pathname.includes('shipping')},
        {title: 'پرداخت', href: '/checkout/payment', icon: <Icon name="Wallet" className="me-2 flex-shrink-0"/>, active: pathname.includes('payment')},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="pageCheckout" className="flex-grow-1 d-flex flex-column">
            <div className="bg-body-tertiary text-body">
                <Container fluid="xxl" className="py-2 steps">
                    <Row className="g-0 text-center fw-normal py-4 mb-1">
                        <Col xs={12} className="mb-4">
                            <Navbar.Brand as={NavLink} href="/" className="py-0 ms-0 text-primary"><ImgLogo/></Navbar.Brand>
                        </Col>
                        {
                            arraySteps.map((item, index) => (
                                <>
                                    <Col xs="auto" className={`position-relative d-flex${item.active ? ' active' : ''}`} key={index}>
                                        {
                                            index < arraySteps.findIndex(({active}) => active) ? (
                                                <NavLink href={item.href} className="position-relative z-1 d-flex align-items-center">
                                                    {item.icon}{item.title}
                                                </NavLink>
                                            ) : (
                                                <a className="position-relative z-1 d-flex align-items-center">
                                                    {item.icon}{item.title}
                                                </a>
                                            )
                                        }
                                    </Col>
                                    {
                                        index < arraySteps.length - 1 ? (
                                            <Col className="position-relative d-flex align-items-center line"/>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <div className="flex-grow-1 pb-5 position-relative">
                {children}
            </div>
            <div className="bg-secondary">
                <Container fluid="xxl" className="py-3 text-body fs-9" data-bs-theme="dark">
                    <Row className="g-3 py-1">
                        <Col xs={12} className="opacity-54 col">
                            © 1378 - 1402 کلیه حقوق محفوظ و متعلق به شرکت دانش‌بنیان توسعه تجارت تیبا فناور (شهر فافا) می باشد.
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
