"use client"

import {Container} from "react-bootstrap";

import NavLink from "../../NavLink";

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from "../../Image";

export default function SliderImage({fluid, className, options, data}) {

    const splideOptions = {
        direction: 'rtl',
        gap: '.75rem',
        arrows: false,
        pagination: false,
        autoWidth: true,
        ...options
    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid={fluid} className={`widget-slider-image${className ? ` ${className}` : '' }`}>
            {
                data.length ? (
                    <Splide aria-label="" hasTrack={ false } options={ splideOptions }>
                        <SplideTrack>
                            {
                                data.map(item => (
                                    <SplideSlide key={item.id} className="rounded overflow-hidden">
                                        <NavLink href={item.href} className={`d-block${item.className ? ` ${item.className}`: ''}`}>
                                            <Image src={item.src} alt={item.alt}/>
                                        </NavLink>
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                    </Splide>
                ) : (
                    <></>
                )
            }
        </Container>
    )
}
