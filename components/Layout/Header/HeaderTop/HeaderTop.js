"use client"

import {useContext, useState} from "react";

import ContextApp from "../../../../contexts/ContextApp";

import ContextIsMobile from "../../../../contexts/ContextIsMobile";

import NavLink from "../../../common/NavLink";

import HeaderTopSearch from "./HeaderTopSearch";

import {Nav, Navbar} from "react-bootstrap";

import OffcanvasMenu from "../../../offcanvses/Menu/Menu";
import OffcanvasAccount from "../../../offcanvses/Account/Account";

import ImgLogo from "../../../../assets/img/fafa-logo-sign-title.svg";
import Icon from "../../../common/Icon";
import {useAuthContext} from "@core/contexts/AuthContext";

export default function HeaderTop() {

    const { isHydrated } = useContext(ContextApp)
    const isMobile = useContext(ContextIsMobile);
    const {user_details, user_is_login} = useAuthContext();

    // -----------------------------------------------------------------------------------------------------------------

    const [offcanvasMenuShow, setOffcanvasMenuShow] = useState(false)

    const [offcanvasAccountShow, setOffcanvasAccountShow] = useState(false)

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <div id="headerTop" className="w-100 d-flex align-items-center pb-2 pe-auto">
                <Navbar.Toggle aria-controls="offcanvasMenu" className="border-0 ms-n1-50 ms-md-0 me-3" onClick={() => setOffcanvasMenuShow(true)}>
                    <Icon name="Menu" size={28} className="m-lg-n1-50"/>
                </Navbar.Toggle>
                <Navbar.Brand as={NavLink} href="/" className="py-0 me-0 ms-1-50 ms-lg-0 text-primary"><ImgLogo className="mb-lg-n1-25"/></Navbar.Brand>
                {/*<Nav>*/}
                {/*    <Nav.Link href="" className="ms-3 p-0 d-flex align-items-center">*/}
                {/*        <Icon name="MapPin" size={32} absoluteStrokeWidth className="mb-1-50"/>*/}
                {/*        <span className="d-flex flex-column ms-1 lh-1">*/}
                {/*            <span className="fs-10 fw-light">ارسال به</span>*/}
                {/*            <span className="fs-9 mt-1 pt-1-50">فارس، شیراز</span>*/}
                {/*        </span>*/}
                {/*    </Nav.Link>*/}
                {/*</Nav>*/}
                {/*<HeaderOffcanvas/>*/}
                <OffcanvasMenu show={offcanvasMenuShow} onHide={() => setOffcanvasMenuShow(false)}/>
                {
                    isHydrated && isMobile ? (
                        <></>
                    ) : (
                        <HeaderTopSearch/>
                    )
                }
                {
                    isHydrated && isMobile ? (
                        <></>
                    ) : (
                        <Nav className="ms-auto flex-row">
                            <Nav.Link href="" aria-controls="offcanvasAccount" className="p-0 d-flex align-items-center" onClick={() => setOffcanvasAccountShow(true)}>
                                <Icon name="User" size={28} absoluteStrokeWidth className="flex-shrink-0"/>
                                <span className="d-flex flex-column ms-1 lh-1">
                                    <span className="fs-11">
                                        خوش آمدید</span>
                                    <span className="fs-9 fw-normal mt-1 pt-1-50 d-flex align-items-center">
                                        {user_is_login? user_details?.full_name :' ثبت نام/ ورود'}
                                    </span>
                                </span>
                            </Nav.Link>
                            <OffcanvasAccount show={offcanvasAccountShow} onHide={() => setOffcanvasAccountShow(false)}/>
                            {user_is_login && (
                              <Nav.Link as={NavLink} href="/cart" className="p-0 d-flex align-items-center ms-4">
                                  <Icon name="ShoppingCart" size={27} absoluteStrokeWidth className="flex-shrink-0 flip-h me-1-50 mt-n1-50"/>
                                  <span className="d-flex flex-column ms-1 lh-1">
                                    <span className="fs-10 fw-bold bg-body-tertiary text-body rounded align-self-start pt-1-50 px-1 mt-n1-50"><span className="px-1-50">4</span></span>
                                    <span className="fs-9 fw-normal mt-1-50 pt-1-50">سبد خرید</span>
                                </span>
                              </Nav.Link>
                            )}
                        </Nav>
                    )
                }
            </div>
        </>
    )
}