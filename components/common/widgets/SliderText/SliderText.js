"use client"

import {Container} from "react-bootstrap";

import NavLink from "../../NavLink";

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

export default function WidgetSliderText({fluid, className, options, data}) {

    const splideOptions = {
        direction: 'rtl',
        autoplay: true,
        interval: 3000,
        gap: '1rem',
        arrows: false,
        pagination: false,
        autoWidth: true,
        rewind: true,
        rewindSpeed: 0,
        ...options
    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid={fluid} className={`widget-slider-text${className ? ` ${className}` : '' }`}>
            {
                data.length ? (
                    <Splide aria-label="" hasTrack={ false } options={ splideOptions }>
                        <SplideTrack>
                            {
                                data.map(item => (
                                    <SplideSlide key={item.id}><NavLink href={item.href} className={`d-block${item.className ? ` ${item.className}`: ''}`}>{item.title}</NavLink></SplideSlide>
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
