"use client"

import ReactSlider from 'react-slider'

import toCurrency from "../../../utils/toCurrency";

import {Accordion, Button, Col, Form, Row, Table} from "react-bootstrap";
import Icon from "../../common/Icon";

export default function SearchFilters() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayFilters = [
        {id: '1', title: 'برند', child: [
                {id: 11, title: 'Acer'},
                {id: 12, title: 'Samsung'},
                {id: 13, title: 'Dell'},
                {id: 14, title: 'داخلی'},
                {id: 15, title: 'خارجی'},
            ]
        },
        {id: 2, title: 'پردازنده'},
        {id: 3, title: 'رم'},
        {id: 4, title: 'سیستم عامل'},
    ]

    const arrayChips = [
        {id: 1, title: 'برند'},
        {id: 2, title: 'پردازنده'},
        {id: 4, title: 'سیستم عامل'},
    ]

    // -----------------------------------------------------------------------------------------------------------------

    const priceRangeHandler = () => {

    }

    // -----------------------------------------------------------------------------------------------------------------

    const filterHandler = () => {
      
    }
    
    // -----------------------------------------------------------------------------------------------------------------

    return (
        <ul className="list-unstyled mb-0">
            <li className="mt-n3-75 mb-3 pt-1-50 pb-2">
                <Row className="g-1 mt-0 fs-sm fw-normal chips">
                    <Col xs={12} className="pt-1 pb-2 fs-6 fw-light"><span className="pt-1-50 d-inline-block">فیلترهای انتخاب شده:</span></Col>
                    {
                        arrayChips.map((item, index) => (
                            <Col xs="auto" className={index > 1 ? 'pe-2' : ''} key={item.id}>
                                <div className="chips-item">
                                    <span><span>برند:</span>{item.title}</span>
                                    <Button variant="icon"><Icon name="X" size={18} absoluteStrokeWidth/></Button>
                                </div>
                            </Col>
                        ))
                    }
                    <Col xs="auto">
                        <div className="chips-item clear-all"><Button variant="link" size="sm">حذف همه</Button></div>
                    </Col>
                </Row>
            </li>
            <li className="mt-n2 pb-1-25">
                <Form.Check type="switch" id="available" label="فقط کالاهای موجود"/>
            </li>
            <li>
                <Accordion flush className="shadow-1-around rounded-4">
                    <Accordion.Item eventKey="priceRange" className="rounded-4 price-range">
                        <Accordion.Header>محدوده قیمت</Accordion.Header>
                        <Accordion.Body className="pt-0">
                            <Table>
                                <tbody>
                                    <tr>
                                        <td className="pt-0 ps-0 pb-0 border-bottom-0">از</td>
                                        <td className="p-0">
                                            <Form.Control type="text" className="ltr fs-4 fw-bold border-0 bg-transparent pt-2" value={toCurrency(0, null, '')} onChange={priceRangeHandler}/>
                                        </td>
                                        <td className="pt-2 pb-0 pe-0 border-bottom-0 bg-transparent fw-bold pe-1-25">ت</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-0 ps-0 pb-0 border-bottom-0">تا</td>
                                        <td className="p-0 bg-transparent">
                                            <Form.Control type="text" className="ltr fs-4 fw-bold border-0 bg-transparent pt-2" value={toCurrency(12300000, null, '')} onChange={priceRangeHandler}/>
                                        </td>
                                        <td className="pt-2 pb-0 pe-0 border-bottom-0 bg-transparent fw-bold pe-1-25">ت</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="pt-3-75">
                                <ReactSlider min={0} max={12300000} defaultValue={[0, 12300000]} className="react-slider mb-2"/>
                                <Row className="g-0 pb-1 fs-9 text-body-54-opaque">
                                    <Col xs="auto">کمترین</Col>
                                    <Col xs="auto" className="ms-auto">بیشترین</Col>
                                </Row>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </li>
            <li>
                <Accordion defaultActiveKey="1" flush className="shadow-1-around rounded-4">
                    {
                        arrayFilters.map((item, index) => (
                            <Accordion.Item eventKey={item.id} className={`bg-primary bg-opacity-12${index === 0 ? ' rounded-top-4' : ''}${index === arrayFilters.length - 1 ? ' rounded-bottom-4' : ''}`} key={item.id}>
                                <Accordion.Header>{item.title}</Accordion.Header>
                                <Accordion.Body className="pt-0">
                                    {
                                        item.child?.map(item2 => (
                                            <Form.Check type="checkbox" id={`checkbox${item2.id}`} label={item2.title} onChange={filterHandler} key={item2.id}/>
                                        ))
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
            </li>
        </ul>
    )
}
