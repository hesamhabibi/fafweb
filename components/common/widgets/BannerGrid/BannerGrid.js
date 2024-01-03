"use client"

import React from "react"

import NavLink from "../../NavLink";
import Image from "../../Image";

import {Col, Container, Row} from "react-bootstrap";

export default function BannerGrid({fluid, className, data}) {

    const renderItem = item => {

        let itemTemp;

        if (item.src) {

            itemTemp = <Image src={item.src} alt={item.alt}/>

            if (item.href) {
                itemTemp = <NavLink href={item.href} title={item.alt || ''} className={`rounded overflow-hidden position-relative h-100${item.className ? ` ${item.className}` : ''}`}>{itemTemp}</NavLink>
            } else if (item.src) {
                itemTemp = <div className={`rounded overflow-hidden position-relative h-100${item.className ? ` ${item.className}` : ''}`}>{itemTemp}</div>
            } else itemTemp = <></>

        }

        return <Col xs={6}>{itemTemp}</Col>

    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid={fluid} className={`widget-banner-grid${className ? ` ${className}` : '' }`}>
            <Row className="g-3-75">
                {
                    data.map(item => (
                        <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
                    ))
                }
            </Row>
        </Container>
    )
}