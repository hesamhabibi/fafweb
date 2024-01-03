import {useMemo, useRef, useState} from "react"

import useLayoutEffectIsomorphic from "./useLayoutEffectIsomorphic";

export default function useWindowSize(delay = 100) {

    const timeout = useRef(undefined)

    // سمت server مقدار window در دسترس نیست، جهت تعیین سمت server یا client بودن استفاده شد
    const SSR = useMemo(() => typeof window === 'undefined', [])

    const [windowSize, setWindowSize] = useState(SSR ? [] : [window.innerWidth, window.innerHeight]);

    const handleSetProperty = () => {

        // document.documentElement.style.setProperty('--vw', `${document.body.clientWidth * 0.01}px`);
        document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

    }

    useLayoutEffectIsomorphic(() => {

        handleSetProperty()

        const handleWindowSize = () => {

            setWindowSize([window.innerWidth, window.innerHeight])

            handleSetProperty()

        }

        window.addEventListener('resize', () => {

            clearTimeout(timeout.current)

            // از 2 بار تکرار resize توسط chrome جلوگیری شد و همچنین درصورت resize نشدن پس از زمان تعیین شده تابع مربوطه فراخوانی می شود تا از رندر متعدد جلوگیری شود
            timeout.current = setTimeout(() => handleWindowSize(), delay)

        });

        return () => {

            clearTimeout(timeout.current)

            window.removeEventListener('resize', handleWindowSize)

        };

    }, []);

    // -----------------------------------------------------------------------------------------------------------------

    return windowSize;
}