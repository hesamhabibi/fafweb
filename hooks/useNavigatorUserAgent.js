import {useMemo, useRef, useState} from "react"

import {useDeviceSelectors} from "react-device-detect";

import useLayoutEffectIsomorphic from "./useLayoutEffectIsomorphic";

// خارج از تابع اصلی نوشته شد تا قابلیت دریافت اطلاعات در لحظه فراخوانی را داشته باشد
function handleNavigatorUserAgent() {
    return useDeviceSelectors(window.navigator.userAgent);
}

export default function useNavigatorUserAgent(delay = 150) {

    const timeout = useRef(undefined)

    // سمت server مقدار window در دسترس نیست، جهت تعیین سمت server یا client بودن استفاده شد
    const SSR = useMemo(() => typeof window === 'undefined', [])

    const [navigatorUserAgent, setNavigatorUserAgent] = useState(SSR ? [{}] : handleNavigatorUserAgent());

    useLayoutEffectIsomorphic(() => {

        const handleWindowSize = () => {

            setNavigatorUserAgent(handleNavigatorUserAgent())

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

    return navigatorUserAgent;
}