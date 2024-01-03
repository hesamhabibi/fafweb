"use client"

import FormControl from "../../../components/common/FormControl";

import {Modal, Button, Form, Col, Row} from "react-bootstrap";

export default function ModalAddress({show, onHide, data, ...props}) {
    
console.log(data)
    
    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Modal id="modalAddress" aria-labelledby="modalAddressTitle" show={show} onHide={onHide} centered size="lg" {...props}>
            <Modal.Header closeButton>
                <Modal.Title id="modalAddressTitle">{data?.title || 'افزودن نشانی جدید'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="modalAddressForm">
                    <Row className="g-3">
                        <FormControl as={Col} md={6} name="" id="" label="عنوان نشانی" helpText="به عنوان مثال محل کار"/>
                        <Col xs={6}/>
                        <FormControl control="TEXTAREA" as={Col} xs={12} name="" id="" label="نشانی پستی"/>
                        <FormControl control="SELECT" as={Col} lg={6} name="" id="" label="استان"/>
                        <FormControl control="SELECT" as={Col} lg={6} name="" id="" label="شهر"/>
                        <FormControl as={Col} lg={6} name="" id="" label="کدپستی" className="ltr" inputMode="numeric" minlength="10" maxlength="10" helpText="کدپستی 10 رقم و بدون خط تیره می باشد"/>
                        <Col xs={6}/>
                        <FormControl as={Col} lg={6} name="" id="" label="نام"/>
                        <FormControl as={Col} lg={6} name="" id="" label="نام خانوادگی"/>
                        <FormControl type="tel" as={Col} lg={6} name="" id="" label="شماره موبایل" inputMode="tel"/>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type="button" variant="link" onClick={onHide}>انصراف</Button>
                <Button type="submit" form="modalAddressForm">ثبت</Button>
            </Modal.Footer>
        </Modal>
    )
}