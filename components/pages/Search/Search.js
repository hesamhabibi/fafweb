"use client"

import {useEffect} from "react";

import SearchResult from "./SearchResult";
import SearchFilters from "./SearchFilters";
import SearchSorts from "./SearchSorts";

import {Accordion, Button, Col, Container, Row} from "react-bootstrap";

import Icon from "../../../components/common/Icon";

export default function PageSearch() {

    // -----------------------------------------------------------------------------------------------------------------

    useEffect(() => {
// console.log(document.querySelector('#pageSearch #colSearchResult').getBoundingClientRect().top)
//         document.querySelector('#pageSearch #colFilters').style.top = `${document.querySelector('#main').getBoundingClientRect().top + 16}px`
//
//         var observer = new IntersectionObserver(function (entries) {
//             console.log(entries)
//             if (!entries[0].isIntersecting) {
//                 console.log('Elvis has LEFT the building ');
//             }
//             else {
//                 console.log('Elvis has ENTERED the building ');
//             }
//         });

        // const $element = document.querySelector("#colFilters")
        //
        // const intersectionObserverHandler = intersectionObserverEntry => {
        //
        //     console.log($element)
        //     console.log(intersectionObserverEntry)
        //     if (intersectionObserverEntry[0].intersectionRect.height < intersectionObserverEntry[0].boundingClientRect.height) {
        //         $element.closest('.row').classList.add('align-items-end')
        //         $element.style.bottom = '1rem'
        //     }
        //
        // }
        //
        // const observer = new IntersectionObserver(intersectionObserverHandler)
        //
        // observer.observe($element)
        //
        // return () => observer.unobserve($element)

    }, [])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="pageSearch" className="mt-n4">
            <Container fluid="xxl">
                <Row className="g-3 g-lg-5 pb-2">
                    <Col id="colTitle" xs={3}>
                        <h1 className="fs-5 mb-0 text-truncate">نمایشگر</h1>
                    </Col>
                    <Col xs>
                        <SearchSorts/>
                    </Col>
                </Row>
                <Row className="g-3 gx-lg-5 pb-5">
                    <Col xs={3} id="colFilters">
                        <SearchFilters/>
                    </Col>
                    <Col xs id="colSearchResult">
                        <SearchResult/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
