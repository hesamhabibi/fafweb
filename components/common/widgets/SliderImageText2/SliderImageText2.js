"use client"

import {Container, Button} from "react-bootstrap";

import NavLink from "../../NavLink";

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from "../../Image";
import Icon from "../../Icon";

export default function SliderImageText2({fluid, className, options, data}) {

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
        <Container fluid={fluid} className={`bg-primary py-3-75 widget-slider-image-text-2${className ? ` ${className}` : '' }`}>
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
                            <SplideSlide className="d-flex justify-content-center align-items-center px-1">
                                <Button as={NavLink} href={''} className="text-white p-2">
                                    <Icon name="ArrowRight" className="flip-h"/>
                                    {/*مشاهده همه*/}
                                </Button>
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                ) : (
                    <></>
                )
            }
        </Container>
    )
}
