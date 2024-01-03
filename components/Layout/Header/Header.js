"use client"

import {useContext} from "react";

import ContextApp from "../../../contexts/ContextApp";
import ContextIsMobile from "../../../contexts/ContextIsMobile";

import HeaderMEMO from "./HeaderMEMO";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderBottomMobile from "./Mobile/HeaderMobileBottom";
import HeaderMobile from "./Mobile/HeaderMobile";

import {Navbar, Container} from "react-bootstrap";

export default function Header() {

    const isMobile = useContext(ContextIsMobile)
    const { isHydrated } = useContext(ContextApp)

    // -----------------------------------------------------------------------------------------------------------------

    // const DynamicHeaderMobile = dynamic(() => import('./HeaderMobile/HeaderMobile').then(mod => mod.default), {
    //     ssr: false
    // });

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <header id="header" className="sticky-top pe-none">
                <Navbar expand="xs" className="py-md-3 pt-lg-4 pb-lg-3">
                    <span className="bg-secondary position-absolute top-0 start-0 bottom-0 end-0 z-n1 bg"/>
                    <Container fluid="xxl" className="navbar-dark">
                        <HeaderTop/>
                        {
                            isHydrated && isMobile ? (
                                <HeaderBottomMobile/>
                            ) : (
                                <HeaderBottom/>
                            )
                        }
                    </Container>
                    {
                        isHydrated && isMobile ? (
                            <HeaderMobile/>
                        ) : (
                            <></>
                        )
                    }
                </Navbar>
            </header>
            <HeaderMEMO/>
        </>
    )
}