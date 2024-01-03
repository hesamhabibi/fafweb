"use client"

import {Container} from "react-bootstrap";

export default function Hr({fluid, className, options, data}) {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid={fluid} className={`widget-hr${className ? ` ${className}` : '' }`}>
            <hr/>
        </Container>
    )
}
