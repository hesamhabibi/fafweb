"use client"

import {Col, Container, Row} from "react-bootstrap";

export default function notFound() {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid="xxl">
            <Row className="g-3 g-lg-5">
                <Col xs={12}>
                    <h1 className="text-center mt-5">404</h1>
                </Col>
            </Row>
        </Container>
    )
}
