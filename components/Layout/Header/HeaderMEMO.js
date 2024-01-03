"use client"

import {memo, useContext} from "react";

import ContextApp from "../../../contexts/ContextApp";

import useScrollDirection from "../../../hooks/useScrollDirection";
import useLayoutEffectIsomorphic from "../../../hooks/useLayoutEffectIsomorphic";

function HeaderMEMO() {

    const { windowSize } = useContext(ContextApp)

    const scrollDirection = useScrollDirection(undefined, [100, 0], undefined, [0, 150])

    useLayoutEffectIsomorphic(() => {

        if (scrollDirection) {

            if (windowSize[0] < 992) {

                if (document.querySelector('#header').classList.contains('scroll-down') || document.querySelector('#header').classList.contains('scroll-up'))
                    document.querySelector('#header').classList.remove('scroll-down', 'scroll-up');

                if (document.querySelector('#header .bg').hasAttribute('style'))
                    document.querySelector('#header .bg').removeAttribute('style')

                document.querySelector('#header').style.top = scrollDirection === 'down' ? `${54 - document.querySelector('#header').clientHeight}px` : '0';

            } else {

                // setTimeout(() => {

                    if (document.querySelector('#header').classList.contains('scroll-down') || document.querySelector('#header').classList.contains('scroll-up'))
                        document.querySelector('#header').classList.remove('scroll-down', 'scroll-up');

                    if (document.querySelector('#header').hasAttribute('style'))
                        document.querySelector('#header').removeAttribute('style')

                    document.querySelector('#header').classList.add(`scroll-${scrollDirection}`);

                    document.querySelector('#header .bg').style.transform = `translateY(${scrollDirection === 'down' ? `-${document.querySelector('#header #headerBottom').clientHeight}px` : 0})`

                // }, 100);

            }

        }

    }, [scrollDirection, windowSize])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <></>
    )
}

export default memo(HeaderMEMO);