"use client"

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import {Container} from "react-bootstrap";

export default function BannerSlider({fluid, className, options, data}) {

    const splideOptions = {
        type: 'loop',
        direction: 'rtl',
        autoplay: true,
        interval: 6000,
        gap: '.5rem',
        arrows: true,
        breakpoints: {
            991: {
                arrows: false
            },
        },
        ...options
    }

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Container fluid={fluid} className={`widget-banner-slider${className ? ` ${className}` : '' }`}>
            {
                data.length ? (
                    <Splide aria-label="" hasTrack={ false } options={ splideOptions }>
                        <SplideTrack>
                            {
                                data.map(item => (
                                    <SplideSlide key={item} style={{backgroundColor: 'whitesmoke'}}/>
                                ))
                            }
                        </SplideTrack>
                        <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-center">
                            <ul className="splide__pagination position-static bg-white rounded-top-3 px-2 pt-1" style={{'--transition-duration': `${splideOptions.interval - 500}ms`}}/>
                        </div>
                        {/*<div className="splide__arrows">*/}
                        {/*    <button className="splide__arrow splide__arrow--prev">Prev</button>*/}
                        {/*    <button className="splide__arrow splide__arrow--next">Next</button>*/}
                        {/*</div>*/}
                        {/*<div className="splide__progress">*/}
                        {/*    <div className="splide__progress__bar" />*/}
                        {/*</div>*/}
                        {/*<button className="splide__toggle" type="button">*/}
                        {/*    <span className="splide__toggle__play">Play</span>*/}
                        {/*    <span className="splide__toggle__pause">Pause</span>*/}
                        {/*</button>*/}
                    </Splide>
                ) : (
                    <></>
                )
            }
        </Container>
    )
}
