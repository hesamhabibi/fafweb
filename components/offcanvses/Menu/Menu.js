"use client"

import {useContext} from "react";

import ContextApp from "../../../contexts/ContextApp";

import {Offcanvas, Nav, Navbar, Form, Row, Col, Dropdown} from "react-bootstrap";

import Icon from "../../common/Icon";

export default function OffcanvasHeader({show, onHide, ...props}) {

    const { theme, contextAppThemeHandler } = useContext(ContextApp)

    // -----------------------------------------------------------------------------------------------------------------

    const arrayNavLink = [
        {id: 'news', href: '', title: 'خبرها', icon: 'Newspaper'},
        {id: 'offers', href: '', title: 'پیشنهادهای ویژه', icon: 'BadgePercent'},
        {id: 'hr1'},
        {id: 'customer-services', href: '', title: 'مرکز پشتیبانی', icon: 'SupportCenter'},
        {id: 'feedback', href: '', title: 'بازخورد و نظرسنجی', icon: 'Feedback'},
    ]

    const arrayNavLink2 = [
        {id: '1', href: '', title: 'لپ تاپ و نوت بوک', icon: 'Laptop'},
        {id: '2', href: '', title: 'تبلت', icon: 'Tablet'},
        {id: '3', href: '', title: 'گوشی و لوازم جانبی', icon: 'Smartphone'},
        {id: '4', href: '', title: 'کامپیوتر و قطعات', icon: 'Computer'},
        {id: '5', href: '', title: 'تجهیزات ذخیره سازی، هارد و SSD', icon: 'HardDrive'},
        {id: '6', href: '', title: 'لوازم بازی و سیستم های گیمینگ', icon: 'Gamepad'},
        {id: '7', href: '', title: 'گجت های سلامتی', icon: 'Watch'},
        {id: '8', href: '', title: 'مودم، اینترنت و شبکه', icon: 'Router'},
        {id: '9', href: '', title: 'لوازم اداری', icon: 'Presentation'},
        {id: '10', href: '', title: 'خانه و آشپزخانه', icon: 'Refrigerator'},
        {id: '11', href: '', title: 'لوازم الکترونیکی', icon: 'Cable'},
        {id: '12', href: '', title: 'نرم افزار', icon: 'Disc3'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Navbar.Offcanvas id="offcanvasHeader" aria-labelledby="offcanvasMenuTitle" show={show} onHide={onHide} placement="start" {...props} className="rounded-5 m-1">
            <Offcanvas.Body as={Row} className="p-0 g-0 overflow-visible flex-nowrap">
                <Col className="fs-8 pt-5 bg-primary bg-opacity-12 rounded-5 menu-1">
                    <Nav className="pt-4 mt-1">
                        {
                            arrayNavLink.map(item => (
                                item.title ? (
                                    <Nav.Link href={item.href} className="px-3-75 px-lg-4" key={item.id}>
                                        <Icon name={item.icon} className="flex-shrink-0 text-primary text-opacity-75 ms-1 me-3"/>
                                        <span className="ws-n1 me-auto">{item.title}</span>
                                    </Nav.Link>
                                ) : (
                                    <hr className="my-2 mx-3-75 mx-lg-4" key={item.id}/>
                                )
                            ))
                        }
                        <hr className="my-2 mx-3-75 mx-lg-4"/>
                        <div className="px-3-75 px-lg-4 nav-link" role="button" onClick={() => contextAppThemeHandler('SET', theme === 'light' ? 'dark' : 'light')}>
                            <Icon name="SunMoon" className="flex-shrink-0 text-primary text-opacity-75 ms-1 me-3"/>
                            <span className="ws-n1 me-auto">حالت تیره</span>
                            <Form.Check type="switch" className="d-inline-block ms-3"/>
                        </div>
                    </Nav>
                </Col>
                <Col className="fs-6 position-relative menu-2">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title as="h6" id="offcanvasMenuTitle" className="ps-lg-2 ms-lg-1">دسته بندی کالا</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav className="pt-2 mt-1">
                        {
                            arrayNavLink2.map(item => (
                                item.title ? (
                                    <Dropdown className="nav-item position-static" key={item.id}>
                                        <Dropdown.Toggle as={Nav.Link} className="ps-3-75 ps-lg-4 pe-1 position-relative">
                                            <Icon name={item.icon} className="flex-shrink-0 text-body-54-opaque ms-1 me-3"/>
                                            <span className="ws-n1 me-auto">{item.title}</span>
                                            <Icon name="ChevronRightSm" className="flex-shrink-0 text-body-54-opaque ms-4 me-3 flip-h"/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-body rounded-5 position-absolute top-0 start-100 bottom-0 mt-0 ms-n1-25 py-0">
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title as="h6" className="px-lg-2 mx-lg-1 text-nowrap">{item.title}</Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <div className="p-3 m-2">
                                                {/*<Dropdown.Item href="#/action-1" className="px-0">Action</Dropdown.Item>*/}
                                                {/*<Dropdown.Item href="#/action-2" className="px-0">Another action</Dropdown.Item>*/}
                                                {/*<Dropdown.Item href="#/action-3" className="px-0">Something else</Dropdown.Item>*/}
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <hr className="my-2 mx-3-75 mx-lg-4" key={item.id}/>
                                )
                            ))
                        }
                    </Nav>
                </Col>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    )
}