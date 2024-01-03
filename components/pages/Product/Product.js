"use client"

import {Splide, SplideSlide} from "@splidejs/react-splide";

import Stars from "../../common/Stars";
import SeeMore from "../../common/SeeMore";

import Scrollspy from 'react-scrollspy';

import {Button, Col, Container, ListGroup, Nav, Row, Table} from "react-bootstrap";

import Icon from "../../common/Icon";
import toCurrency from "../../../utils/toCurrency";
import OffcanvasCart from "../../offcanvses/Cart/Cart";
import {useState} from "react";

export default function PageProduct() {

    // -----------------------------------------------------------------------------------------------------------------

    const galleryThumbsOptions = {
        direction: 'rtl',
        gap: '.5rem',
        arrows: false,
        pagination: false,
        fixedWidth: 80,
        padding: { left: '.5rem', right: '.5rem' },
        drag: 'free'
    }

    // -----------------------------------------------------------------------------------------------------------------

    const arrayScrollSpy = [
        {id: 'specifications', title: 'مشخصات فنی'},
        {id: 'scrollSpy2', title: 'معرفی'},
        {id: 'scrollSpy3', title: 'دیدگاه ها و امتیاز کاربران'},
        {id: 'scrollSpy4', title: 'پرسش ها'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    const scrollToHandler = item => {

        const element = document.getElementById(item);

        if (element)
            element.scrollIntoView({ behavior: 'smooth' });

    }
    
    // -----------------------------------------------------------------------------------------------------------------

    const [offcanvasCartShow, setOffcanvasCartShow] = useState(false);

    const addToCartHandler = () => {

        setOffcanvasCartShow(true)

    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <>
            <div id="pageProduct">
                <Container fluid="xxl">
                    <Row className="g-3 g-lg-5">
                        <Col xs={9}>
                            <Row className="g-3 g-lg-5">
                                <Col xs={5}>
                                    <figure className="rounded-5 border ratio ratio-1x1 mb-2"/>
                                    <Splide aria-label="" options={ galleryThumbsOptions } className="mx-n2 gallery-thumbnails">
                                        {
                                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                                <SplideSlide key={item} className="border rounded-4 ratio ratio-1x1"/>
                                            ))
                                        }
                                    </Splide>
                                </Col>
                                <Col>
                                    <h1 className="lh-base mb-2 ws-n1">لپ تاپ 15.6 اینچ Asus مدل Vivobook Pro 15 OLED K6500ZC - MA330</h1>
                                    <div className="text-body-38-opaque mb-2 ltr text-start font-en">Laptop 15.6 inch Asus model Vivobook Pro 15 OLED K6500ZC - MA330</div>
                                    <div className="d-flex align-items-center py-2 lh-1 statistics">
                                        <Stars value={4} className="mt-n1-50"/>
                                        <span className="d-inline-block fw-bold ps-2 text-primary">4</span>
                                        <a href="" className="ms-3" onClick={e => {e.preventDefault(); scrollToHandler('scrollSpy3')}}>از 2 امتیاز</a>
                                        <a href="" className="ms-3 border-start ps-3" onClick={e => {e.preventDefault(); scrollToHandler('scrollSpy3')}}>8 دیدگاه</a>
                                        <a href="" className="ms-3" onClick={e => {e.preventDefault(); scrollToHandler('scrollSpy4')}}>2 پرسش</a>
                                    </div>
                                    <div className="mt-4 highlights">
                                        <ul className="list-group list-group-flush list-bullet mb-0 pt-2">
                                            <li className="list-group-item border-bottom-0 py-1-50"><span className="text-body-54-opaque me-2">سری پردازنده:</span>AMD Ryzen 5 7000 Series 7530U (2.00GHz)</li>
                                            <li className="list-group-item border-bottom-0 py-1-50"><span className="text-body-54-opaque me-2">حافظه:</span>16GB Memory 512 GB NVMe SSD</li>
                                            <li className="list-group-item border-bottom-0 py-1-50"><span className="text-body-54-opaque me-2">کارت گرافیک:</span>AMD Radeon Graphics</li>
                                            <li className="list-group-item border-bottom-0 py-1-50"><span className="text-body-54-opaque me-2">رزولوشن:</span>1920 x 1080</li>
                                            <li className="list-group-item border-bottom-0 py-1-50"><span className="text-body-54-opaque me-2">سیستم عامل:</span>Windows 11 Home 64-bit</li>
                                        </ul>
                                        <Button variant="link" className="ps-3 pe-0 mt-n1-25 ms-n1-50 mb-2 fw-normal fs-sm" onClick={() => scrollToHandler(arrayScrollSpy[0].id)}>جزییات بیشتر<Icon name="MoveRightSm" className="flip-h ms-1"/></Button>
                                    </div>
                                    <div className="mt-4">
                                        <div className="h6">رنگ:<span className="d-inline-block ms-2">مشکی</span></div>
                                        <Row className="g-2 pt-1-50 colors">
                                            <Col xs="auto"><div className="ratio ratio-1x1 rounded-circle overflow-hidden m-1-25 active"><span className="rounded-circle" style={{backgroundColor: '#000'}}></span></div></Col>
                                            <Col xs="auto"><div className="ratio ratio-1x1 rounded-circle overflow-hidden border"><span className="rounded-circle" style={{backgroundColor: '#fff'}}></span></div></Col>
                                            <Col xs="auto"><div className="ratio ratio-1x1 rounded-circle overflow-hidden border"><span className="rounded-circle" style={{backgroundColor: 'pink'}}></span></div></Col>
                                            <Col xs="auto"><div className="ratio ratio-1x1 rounded-circle overflow-hidden border"><span className="rounded-circle" style={{backgroundColor: '#f5f5f5'}}></span></div></Col>
                                        </Row>
                                    </div>
                                    <div className="mt-4">
                                        <div className="h6">حافظه:<span className="d-inline-block ms-2">4 GB</span></div>
                                        <Row className="g-2 pt-1-50 lh-sm variants">
                                            <Col xs="auto"><div className="pt-2 pb-1 px-3 rounded-3 fw-normal border">2 GB</div></Col>
                                            <Col xs="auto"><div className="pt-2 pb-1 px-3 rounded-3 fw-normal m-1-25 active">4 GB</div></Col>
                                            <Col xs="auto"><div className="pt-2 pb-1 px-3 rounded-3 fw-normal border">8 GB</div></Col>
                                            <Col xs="auto"><div className="pt-2 pb-1 px-3 rounded-3 fw-normal border">16 GB</div></Col>
                                            <Col xs="auto"><div className="pt-2 pb-1 px-3 rounded-3 fw-normal border">32 GB</div></Col>
                                        </Row>
                                    </div>
                                    {/*<hr className="my-5"/>*/}
                                </Col>
                            </Row>
                            <Row className="g-3 g-lg-5 mt-0">
                                <Col xs={12} className="mt-5 mb-lg-n4 pt-3 pt-lg-5 fw-normal position-sticky z-1" style={{top: `${88}px`}}>
                                    <section id="scrollspyNav">
                                        <Scrollspy componentTag={Nav} items={arrayScrollSpy.map(item => item.id)} currentClassName="active" className="overflow-hidden pb-3 lh-1">
                                            {
                                                arrayScrollSpy.map(item => (
                                                    <a href={`#${item.id}`} className="nav-link pt-2 pb-3 position-relative z-1" key={item.id}><span className="mb-2">{item.title}</span></a>
                                                ))
                                            }
                                        </Scrollspy>
                                    </section>
                                </Col>
                                <Col xs={12}>
                                    <section id={arrayScrollSpy[0].id}>
                                        {/*<h2 className="fs-5 mb-0">{arrayScrollSpy[0].title}</h2>*/}
                                        {/*<div className="shadow-1-around rounded-4 overflow-hidden pe-4">*/}
                                        <div className="mt-n4">
                                            <Table responsive className="mb-0">
                                                <tbody>
                                                <tr className="label">
                                                    <td colSpan={2} className="pt-3 pb-3-75 px-3"><div className="pb-1-25 fw-semibold">مدل</div></td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-5 w-25">برند</td>
                                                    <td className="py-3-75 px-3">Lenovo</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-5 w-25">سری</td>
                                                    <td className="py-3-75 px-3">LOQ 15IRH8</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-5 w-25">مدل</td>
                                                    <td className="py-3-75 px-3">82XV00LFUS</td>
                                                </tr>
                                                <tr className="label">
                                                    <td colSpan={2} className="pt-3 pb-3-75 px-3"><div className="pb-1-25 fw-semibold">اطلاعات فوری</div></td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-5 w-25">برند</td>
                                                    <td className="py-3-75 px-3">Lenovo</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-5 w-25">سری</td>
                                                    <td className="py-3-75 px-3">LOQ 15IRH8</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-5 w-25">مدل</td>
                                                    <td className="py-3-75 px-3">82XV00LFUS</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        {/*<div className="d-flex align-items-center fs-sm p-3 text-body-54-opaque">*/}
                                        <div className="d-flex align-items-center fs-sm mt-3 ms-3 mb-n2">
                                            <span className="text-body-54-opaque">آیا در مورد این کالا پرسشی دارید؟</span>
                                            <Button variant="link" size="sm" className="ms-3 border"><Icon name="BadgeHelp" size={18} strokeWidth={1.25} absoluteStrokeWidth className="ms-n1-50 me-2 flip-h"/>ثبت پرسش</Button>
                                        </div>
                                    </section>
                                </Col>
                                <Col xs={12}>
                                    <div id={arrayScrollSpy[1].id}>
                                        <h2 className="fs-5 mt-4 mb-3">{arrayScrollSpy[1].title}</h2>
                                        <div className="lh-md">
                                            <p>لپ ‌تاپ ROG Strix G513IE-HN060 از محصولات شرکت «ایسوس» محسوب می‌شود که با طراحی زیبا روانه بازار شده است. بدنه‌ شیک ROG Strix G513IE-HN060 به‌ گونه‌ای طراحی شده که لپ‌ تاپی رده ‌بالا را نوید می‌‌دهد. این لپ تاپ و 2.1 کیلوگرم وزن دارد و برای جا‌به‌‌جایی دائمی آن مشکل خاصی نخواهید داشت. صفحه ‌نمایش 15.6 اینچی این محصول دارای وضوح تصویر FullHD است. پورت‌های USB و HDMI روی لبه ‌های این مدل از ایسوس دیده می‌‌شود که با استفاده از آن‌‌ها می‌توان انواع ابزارهای جانبی را بدون نیاز به هیچ مبدلی به این لپ‌ تاپ متصل و از آن ‌ها استفاده کرد. ایسوس در کنار این امکانات متعدد، از سخت‌ افزارهای خوبی هم در این محصول استفاده کرده است. پردازنده مرکزی کم‌‌مصرف اما قوی Ryzen7 مدل 4800H، پردازشگر گرافیکی NVIDIA GeForce RTX 3050TI و 8 گیگابایت رم مجموعه‌ سخت‌‌افزاری این لپ‌تاپ را تشکیل می‌‌دهند که برای کاربری روزانه ، مالتی‌مدیا و حتی گیمینگ مطلوب هستند. در مجموع اگر به دنبال خرید یک لپ‌‌تاپ خوش‌‌ساخت و سبک برای انواع کاربری‌ های روزمره خود هستید، این مدل ایسوس می‌‌تواند یکی از انتخاب‌‌های شما باشد. این لپ‌تاپ دارای قدرت پردازشی بسیار بالایی است.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <div id={arrayScrollSpy[2].id}>
                                        <h2 className="fs-5 mb-0">{arrayScrollSpy[2].title}</h2>
                                        <Row className="g-3 g-lg-5 align-items-start">
                                            <Col xs={3} className="position-sticky" style={{top: `${184}px`}}>
                                                <div className="display-3 fw-bold text-primary lh-1 mt-3 pt-1">4</div>
                                                <Stars value={4} size="lg"/>
                                                <div className="text-body-54-opaque mt-2">از مجموع 2 امتیاز</div>
                                                <div className="fs-sm mt-4 mb-2">شما هم درباره این کالا دیدگاه و امتیاز ثبت کنید</div>
                                                <Button variant="outline-primary">ثبت دیدگاه و امتیاز</Button>
                                            </Col>
                                            <Col>
                                                <ul className="list-unstyled font-tabular font-fa mt-2 mb-5 pt-2 lh-md stars-details">
                                                    <li className="d-flex align-items-center">5 ستاره<span className="d-flex overflow-hidden bg-primary bg-opacity-25 mx-3 rounded-3"><span className="bg-primary rounded-3" style={{width: '100%'}}/></span>1</li>
                                                    <li className="d-flex align-items-center">4 ستاره<span className="d-flex overflow-hidden bg-primary bg-opacity-25 mx-3 rounded-3"/>0</li>
                                                    <li className="d-flex align-items-center">3 ستاره<span className="d-flex overflow-hidden bg-primary bg-opacity-25 mx-3 rounded-3"><span className="bg-primary rounded-3" style={{width: 'calc(100% * 3 / 5)'}}/></span>1</li>
                                                    <li className="d-flex align-items-center">2 ستاره<span className="d-flex overflow-hidden bg-primary bg-opacity-25 mx-3 rounded-3"/>0</li>
                                                    <li className="d-flex align-items-center">1 ستاره<span className="d-flex overflow-hidden bg-primary bg-opacity-25 mx-3 rounded-3"/>0</li>
                                                </ul>
                                                <div className="border-bottom pb-3 lh-1">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-5">8 دیدگاه</div>
                                                        <div>مرتب سازی:</div>
                                                        <Nav defaultActiveKey="/home" className="ms-3">
                                                            <Nav.Link href="/home" className="p-0 me-3">جدیدترین</Nav.Link>
                                                            <Nav.Link eventKey="link-1" className="p-0 me-3 text-reset">دیدگاه خریداران</Nav.Link>
                                                            <Nav.Link eventKey="link-2" className="p-0 me-3 text-reset">مفیدترین</Nav.Link>
                                                        </Nav>
                                                    </div>
                                                </div>
                                                <ListGroup variant="flush" className="list-unstyled mb-0">
                                                    <ListGroup.Item className="py-3 px-0 mt-4">
                                                        <div className="d-flex align-items-baseline">
                                                            <Stars value={5} size="xs" className="me-3"/>
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex">
                                                                    <div className="fw-semibold">عنوان دیدگاه در اینجا قرار می گیرد</div>
                                                                    <div className="ms-auto text-body-54-opaque fw-extra-light">26 آبان 1402</div>
                                                                </div>
                                                                <div className="d-flex align-items-center fs-sm mt-2 text-body-54-opaque"><Icon name="CheckCircle" size={18} strokeWidth={1.25} absoluteStrokeWidth className="me-2 text-primary"/>خریدار<span className="ps-3 ms-3 border-start lh-1">حسام حبیبی</span></div>
                                                            </div>
                                                        </div>
                                                        <p className="mt-4 mb-2">
                                                            خیلی لپتاپ خوب و زیبایی است
                                                        </p>
                                                        <div className="lh-lg fs-7">
                                                            <ul className="list-unstyled">
                                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>نکته مثبت اول</li>
                                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>نکته مثبت دوم</li>
                                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>همچنین نکته مثبت سوم</li>
                                                                <li><Icon name="Minus" size={18} absoluteStrokeWidth className="me-2 text-danger"/>تنها نکته منفی</li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center text-body-54-opaque">
                                                            <div className="ms-auto me-3 fs-sm">این دیدگاه مفید بود؟</div>
                                                            <div>3</div>
                                                            <Button variant="icon" className="text-body-54-opaque mt-n1 me-2"><Icon name="ThumbsUp"/></Button>
                                                            <div>1</div>
                                                            <Button variant="icon" className="text-body-54-opaque mb-n1"><Icon name="ThumbsDown"/></Button>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="py-3 px-0 mt-4">
                                                        <div className="d-flex align-items-baseline">
                                                            <Stars value={3} size="xs" className="me-3"/>
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex">
                                                                    <div className="fw-semibold">یک عنوان دیگر دیدگاه در اینجا قرار می گیرد</div>
                                                                    <div className="ms-auto text-body-54-opaque fw-extra-light">22 آبان 1402</div>
                                                                </div>
                                                                <div className="d-flex align-items-center fs-sm mt-2 text-body-54-opaque">کاربر مهمان شهر فافا</div>
                                                            </div>
                                                        </div>
                                                        <p className="mt-4 mb-2">
                                                            خیلی لپتاپ خوب و زیبایی است
                                                        </p>
                                                        <div className="lh-lg fs-7">
                                                            <ul className="list-unstyled">
                                                                <li><Icon name="Plus" size={18} absoluteStrokeWidth className="me-2 text-success"/>نکته مثبت اول</li>
                                                                <li><Icon name="Minus" size={18} absoluteStrokeWidth className="me-2 text-danger"/>تنها نکته منفی</li>
                                                                <li><Icon name="Minus" size={18} absoluteStrokeWidth className="me-2 text-danger"/>تنها نکته منفی</li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center text-body-54-opaque">
                                                            <div className="ms-auto me-3 fs-sm">این دیدگاه مفید بود؟</div>
                                                            <div>3</div>
                                                            <Button variant="icon" className="text-body-54-opaque mt-n1 me-2"><Icon name="ThumbsUp"/></Button>
                                                            <div>1</div>
                                                            <Button variant="icon" className="text-body-54-opaque mb-n1"><Icon name="ThumbsDown"/></Button>
                                                        </div>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                                <div className="mt-4 text-center">
                                                    <SeeMore/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <div id={arrayScrollSpy[3].id}>
                                        <h2 className="fs-5 mt-4 mb-0">{arrayScrollSpy[3].title}</h2>
                                        <Row className="g-3 g-lg-5 align-items-start">
                                            <Col xs={3} className="position-sticky" style={{top: `${184}px`}}>
                                                <div className="fs-sm mt-3 mb-2 pt-1">شما هم درباره این کالا پرسش ثبت کنید</div>
                                                <Button variant="outline-primary">ثبت پرسش</Button>
                                            </Col>
                                            <Col>
                                                <div className="border-bottom pb-3 lh-1">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-5">2 پرسش</div>
                                                        <div>مرتب سازی:</div>
                                                        <Nav defaultActiveKey="/home" className="ms-3">
                                                            <Nav.Link href="/home" className="p-0 me-3">جدیدترین</Nav.Link>
                                                            <Nav.Link eventKey="link-2" className="p-0 me-3 text-reset">مفیدترین</Nav.Link>
                                                        </Nav>
                                                    </div>
                                                </div>
                                                <ListGroup variant="flush" className="list-unstyled mb-0">
                                                    <ListGroup.Item className="py-3 px-0 mt-4">
                                                        <div className="d-flex align-items-start">
                                                            <Icon name="BadgeHelp" className="text-primary me-3 mt-n1-25"/>
                                                            <span className="fw-semibold">نمونه یک پرسش کوتاه؟</span>
                                                        </div>
                                                        <p className="mt-4 mb-2"><span className="me-2 pe-1 fs-sm d-inline-block">پاسخ</span>نمونه یک پاسخ در اینجا</p>
                                                        <div className="d-flex align-items-center text-body-54-opaque">
                                                            <div className="ms-auto me-3 fs-sm">این پاسخ مفید بود؟</div>
                                                            <div>3</div>
                                                            <Button variant="icon" className="text-body-54-opaque mt-n1 me-2"><Icon name="ThumbsUp"/></Button>
                                                            <div>1</div>
                                                            <Button variant="icon" className="text-body-54-opaque mb-n1"><Icon name="ThumbsDown"/></Button>
                                                        </div>
                                                        <div>
                                                            <Button variant="link" size="sm" className="border">ثبت پاسخ دیگر</Button>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup variant="flush" className="list-unstyled mb-0">
                                                        <ListGroup.Item className="py-3 px-0 mt-4">
                                                            <div className="d-flex align-items-start">
                                                                <Icon name="BadgeHelp" className="text-primary me-3 mt-n1-25"/>
                                                                <span className="fw-semibold">نمونه یک پرسش کوتاه؟</span>
                                                            </div>
                                                            <div className="mt-4">
                                                                <Button variant="link" size="sm" className="border">ثبت پاسخ</Button>
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </ListGroup>
                                                <div className="mt-4 text-center">
                                                    <SeeMore/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <div className="position-sticky" style={{top: `${135}px`}}>
                                <div className="rounded-4 pt-3 px-4 pb-4 bg-body border-top border-start border-end position-relative z-1">
                                    <div className="ms-n1 stock">
                                        {/*<div className="ms-n1 fw-semibold"><Icon name="X" className="me-2"/>ناموجود</div>*/}
                                        <div className="ms-n1 fw-semibold"><Icon name="Check" className="me-2"/>موجود</div>
                                        <div className="ps-2">
                                            <ul className="list-unstyled mb-0 pt-1-50 ps-3">
                                                <li className="ps-1 position-relative">موجود در انبار تهران</li>
                                                <li className="ps-1 position-relative">موجود در انبار شیراز</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="fw-semibold mt-3 d-flex align-items-center">هزینه ارسال<Icon name="HelpCircle" size={18} strokeWidth={1.25} absoluteStrokeWidth className="flip-h ms-1 mb-1 me-3" role="button"/>رایگان</div>
                                    {/*<div className="fw-semibold">رایگان</div>*/}
                                    <div className="fs-sm pt-1-50 mt-1-25">ارسال رایگان برای سبدهای خرید بیشتر 899 هزار تومان</div>
                                </div>
                                <div className="rounded-4 px-4 pb-4 bg-body border-start border-end position-relative z-1 mt-n1-25">
                                    <hr className="mt-0 border-top-0 opacity-100 text-transparent gradient"/>
                                    <ul className="list-group list-group-flush list-bullet">
                                        <li className="list-group-item border-bottom-0 py-1-50">گارانتی معتبر</li>
                                        <li className="list-group-item border-bottom-0 py-1-50">تضمین اصل بودن کالا</li>
                                        <li className="list-group-item border-bottom-0 py-1-50 text-primary"><a href="">7 روز مهلت تست و تعویض طبق آیین نامه</a></li>
                                    </ul>
                                    <hr/>
                                    <div className="fw-bold fs-4 price">{toCurrency(320890000)}</div>
                                    <hr className="opacity-0 mb-0"/>
                                    {/*<div className="fw-semibold">تعداد</div>*/}
                                    {/*<div>*/}
                                    {/*    <div></div>*/}
                                    {/*    <div></div>*/}
                                    {/*    <div></div>*/}
                                    {/*</div>*/}
                                    {/*<hr className="opacity-0"/>*/}
                                    <Button className="w-100 ws-n1" onClick={addToCartHandler}>افـزودن به سبد خرید</Button>
                                    {/*<Button variant="link" className="w-100 ws-n1 shadow-1-around mt-3"><Icon name="BellRing" className="me-2"/>موجود شد اطلاع بده</Button>*/}
                                </div>
                                <div className="rounded-bottom-4 pt-4 px-4 pb-2 bg-primary bg-opacity-12 mt-n4 d-flex justify-content-between flex-wrap">
                                    <Button variant="link" className="p-0 text-reset mt-2 ws-n1 me-3"><Icon name="Share2" className="me-2"/>اشتراک گذاری</Button>
                                    <Button variant="link" className="p-0 text-reset mt-2 ws-n1"><Icon name="ArrowLeftRight" className="me-2"/>مقایسه کالا</Button>
                                    {/*<Button variant="link" className="p-0 fs-sm text-reset mt-2 ws-n1">*/}
                                    {/*    <Icon name="Heart" size={18} strokeWidth={1.25} absoluteStrokeWidth className="me-2"/>*/}
                                    {/*    <span className="lh-0  align-items-start">*/}
                                    {/*        <span className="fw-semibold pe-2">12</span>*/}
                                    {/*        <span className="mt-1">افزودن به مورد علاقه ها</span>*/}
                                    {/*    </span>*/}
                                    {/*</Button>*/}
                                </div>
                                <div className="rounded-4 py-2 px-4 bg-primary bg-opacity-12 mt-1-25">
                                    <Button variant="link" className="p-0 text-reset ws-n1">
                                        <Icon name="Heart" className="me-2"/>
                                        <span className="fw-bold pe-2 me-1-50">12</span>
                                        <span>افزودن به مورد علاقه ها</span>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <OffcanvasCart show={offcanvasCartShow} onHide={() => setOffcanvasCartShow(false)}/>
        </>
    )
}
