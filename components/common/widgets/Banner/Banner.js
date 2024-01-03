"use client"

import NavLink from "../../NavLink";

import {Container} from "react-bootstrap";

import Image from "../../Image";

export default function Banner({fluid, className, data}) {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid={fluid} className={`widget-banner${className ? ` ${className}` : '' }`}>
            {
                data.href ? (
                    <NavLink href={data.href} title={data.alt || ''} className={`rounded overflow-hidden position-relative${data.className ? ` ${data.className}` : ''}`}>
                        <Image src={data.src} alt={data.alt}/>
                    </NavLink>
                ) : (
                    data.src ? (
                        <div className={`rounded overflow-hidden position-relative${data.className ? ` ${data.className}` : ''}`}>
                            <Image src={data.src} alt={data.alt}/>
                        </div>
                    ) : (
                        <></>
                    )
                )
            }
        </Container>
    )
}