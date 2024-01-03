import {Button, Col, Container, Nav, Row, InputGroup, Form} from "react-bootstrap";

import ImgLogo from "../../../assets/img/fafa-logo-sign-title.svg";
import Icon from "../../common/Icon";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="py-5 other-services">
                <Container fluid="xxl">
                    <Row className="g-3 pb-2">
                        <Col xs={12}><div className="h4 mb-0">سایر خدمات شهر فافا</div></Col>
                        <Col xs={4}>
                            <div className="rounded-5-75 overflow-hidden">
                                <a href="" className="p-4 d-flex align-items-center bg-primary bg-opacity-12">
                                    <Icon name="ClipboardList" size={40} absoluteStrokeWidth className="me-3 text-primary flip-h"/>
                                    <span className="h6 mb-0 lh-base">سامانه لیست قیمت کالا</span>
                                    <Icon name="ChevronRight" className="flip-h my-n3 ms-auto me-n2 text-body-38-opaque"/>
                                </a>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="rounded-5-75 overflow-hidden">
                                <a href="" className="p-4 d-flex align-items-center bg-primary bg-opacity-12">
                                    <Icon name="MessagesSquare" size={40} absoluteStrokeWidth className="me-3 text-primary"/>
                                    <span className="h6 mb-0 lh-base">درخواست مشاوره خرید</span>
                                    <Icon name="ChevronRight" className="flip-h my-n3 ms-auto me-n2 text-body-38-opaque"/>
                                </a>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <a href="" className="p-4 d-flex align-items-center rounded-5-75 border">
                                <Icon name="ScrollText" size={40} absoluteStrokeWidth className="me-3 text-primary"/>
                                <span className="h6 mb-0 lh-base">آیین نامه خرید</span>
                                <Icon name="ChevronRight" className="flip-h my-n3 ms-auto me-n2 text-body-38-opaque"/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 bg-body-tertiary">
                <Container fluid="xxl">
                    <Row className="g-3 pb-4">
                        <Col xs={12} className="d-flex">
                            <ImgLogo className="text-primary logo"/>
                            <div className="ms-3 ws-n1">
                                <div className="fw-normal">فروشگاه اینترنتی شهر فافا، بررسی، انتخاب و خرید آنلاین</div>
                                <div className="pt-1-25 fs-9">نـتیجـه 24 ســال همــراهی شمــا</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-3 mt-0">
                        <Col className="d-flex align-items-center">
                            <Button className="p-2 me-1-50 flex-column fs-10 lh-0 fw-bold rounded-top-4 rounded-bottom-3 border-0 btn-shadow">
                                <Icon name="SupportCenter" size={24} className="px-0"/>
                                <span className="mt-2 mb-1 d-flex flex-column">
                                    <span className="pb-1-25">سـوالی</span>
                                    <span className="mt-2 pt-1">داریـد؟</span>
                                </span>
                            </Button>
                            <div className="ms-2 ps-1 pt-1-50 contact">
                                <div className="pb-1-25">
                                    <Icon name="Phone" size={18} strokeWidth={1.25} absoluteStrokeWidth className="flip-h me-2"/>
                                    <span>تلفن پشتیبانی:</span>
                                    <a href="tel:+982191007717" className="ltr d-inline-block px-2">021 91 00 77 17</a>
                                    <span className="ps-4">7 روز هفته، 24 ساعته پاسخگوی شما هستیم.</span>
                                </div>
                                <address className="mb-0 mt-1 py-1-50">
                                    <Icon name="MapPin" size={18} strokeWidth={1.25} absoluteStrokeWidth className="me-2"/>تهران- خیابان ولیعصر- بالاتر از میدان ولیعصر- خیابان شهید سیدحسن دانش کیان- پلاک 33
                                </address>
                            </div>
                        </Col>
                        {/*<Col xs={4} className="d-flex align-items-end">*/}
                        {/*    <Nav className="lh-0 ms-n2 social">*/}
                        {/*        <Button href="" variant="icon"><Icon name="Telegram" fill="currentColor" stroke="none" className="m-2"/></Button>*/}
                        {/*        <Button href="" variant="icon" className="ms-1"><Icon name="Instagram" fill="currentColor" stroke="none" className="m-2"/></Button>*/}
                        {/*        <Button href="" variant="icon" className="ms-1"><Icon name="Facebook" fill="currentColor" stroke="none" className="m-2"/></Button>*/}
                        {/*        <Button href="" variant="icon" className="ms-1"><Icon name="Linkedin" fill="currentColor" stroke="none" className="m-2"/></Button>*/}
                        {/*        <Button href="" variant="icon" className="ms-1"><Icon name="Aparat" fill="currentColor" stroke="none" className="m-2"/></Button>*/}
                        {/*    </Nav>*/}
                        {/*</Col>*/}
                    </Row>
                    <Row className="g-3 mt-2 pt-4">
                        <Col>
                            <h6>شهر فافا</h6>
                            <Nav className="flex-column align-items-start">
                                <Nav.Link>درباره شهر فافا</Nav.Link>
                                <Nav.Link>چرا شهر فافا؟</Nav.Link>
                                <Nav.Link>ارتباط با شهر فافا</Nav.Link>
                            </Nav>
                        </Col>
                        <Col>
                            <h6>خدمات مشتری</h6>
                            <Nav className="flex-column align-items-start">
                                <Nav.Link>قانون تجارت الکترونیک</Nav.Link>
                                <Nav.Link>رویه های بازگردانی کالا</Nav.Link>
                                <Nav.Link>پاسخ به پرسش های متداول</Nav.Link>
                                <Nav.Link>حریم خصوصی</Nav.Link>
                                <Nav.Link>شرایط استفاده</Nav.Link>
                            </Nav>
                        </Col>
                        <Col>
                            <h6>راهنمای خرید</h6>
                            <Nav className="flex-column align-items-start">
                                <Nav.Link>روش های ارسال</Nav.Link>
                                <Nav.Link>نحوه ثبت سفارش</Nav.Link>
                                <Nav.Link>شیوه های پرداخت</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={4} className="newsletter">
                            <h6 className="mb-0 pb-2">خبرنامه</h6>
                            <p className="fs-7 mt-1-25 pt-1 pb-1 mb-2 ws-n1">با ثبت ایمیل از جدیدترین تخفیف ها با خبر شوید</p>
                            <InputGroup>
                                <InputGroup.Text className="position-absolute top-0 start-0 border-0 p-1-50 m-1-25"><Icon name="Mail" className="opacity-38 m-1"/></InputGroup.Text>
                                <Form.Control type="email" className="ms-0 bg-transparent rounded z-0 px-5 ltr fw-normal"/>
                                <Button variant="link" className="position-absolute top-0 end-0 z-1 px-2" disabled><span className="mx-1">ثبت</span></Button>
                            </InputGroup>
                            <div className="form-text ws-n1">با عضویت در خبرنامه متوسط 10٪ در هزینه ها صرفه جویی خواهید داشت</div>
                        </Col>
                    </Row>
                    <Row className="g-3 mt-2 pt-5">
                        <Col xs={8}>
                            <div className="h6 mb-0 pb-2">شرکت دانش‌بنیان توسعه تجارت تیبا فناور</div>
                            <p className="fs-7 mt-1-25 pt-1 mb-0">
                                فروشگاه اینترنتی شهر فافا، فعال در زمینه تجارت الکترونیکی کامپیوتر، لپ تاپ، تبلت، گوشی های هوشمند، قطعات سخت افزاری، شبکه و... به صورت Online پیشرو در ارایه خدمات نوین و برتر در راستای احترام و رعایت حقوق مصرف کننده میباشد. بنابراین شما با توجه به نکاتی که در ادامه به آنها اشاره میکنیم، به شهر فافا نیاز دارید، به آن اعتماد دارید و نیازی نیست که بیش از این به جستجو ادامه دهید و منتظر بمانید...
                            </p>
                            <Button variant="link" className="text-body-54-opaque px-0 fs-sm fw-semibold">ادامه<Icon name="MoveRightSm" className="ms-1 flip-h"/></Button>
                        </Col>
                        <Col xs={4}>
                            <Row className="g-3">
                                <Col><a className="d-block ratio ratio-1x1 border rounded-5-75"></a></Col>
                                <Col><a className="d-block ratio ratio-1x1 border rounded-5-75"></a></Col>
                                <Col><a className="d-block ratio ratio-1x1 border rounded-5-75"></a></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-3 bg-secondary text-body fs-9" data-bs-theme="dark">
                <Container fluid="xxl">
                    <Row className="g-3 py-1">
                        <Col className="opacity-54">
                            برای استفاده از مطالب شهر فافا، داشتن هدف غیرتجاری و ذکر منبع کافیست.
                            <div className="mt-1">© 1378 - 1402 کلیه حقوق محفوظ و متعلق به شرکت دانش‌بنیان توسعه تجارت تیبا فناور (شهر فافا) می باشد.</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
