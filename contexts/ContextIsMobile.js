"use client"

import {createContext, useCallback, useMemo, useRef, useState} from 'react';

import {useDeviceSelectors} from "react-device-detect";

import useLayoutEffectIsomorphic from "../hooks/useLayoutEffectIsomorphic";

export const ContextIsMobile = createContext(null);

export default ContextIsMobile;

// خارج از تابع اصلی نوشته شد تا قابلیت دریافت اطلاعات در لحظه فراخوانی را داشته باشد
function handleNavigatorUserAgent() {
    return useDeviceSelectors(window.navigator.userAgent)[0].isMobileOnly;
}

export function ContextIsMobileProvider({children}) {

    const timeout = useRef(undefined)

    // سمت server مقدار window در دسترس نیست، جهت تعیین سمت server یا client بودن استفاده شد
    const SSR = useMemo(() => typeof window === 'undefined', [])

    const [isMobile, setIsMobile] = useState(SSR ? null : handleNavigatorUserAgent() || window.innerWidth < 992)

    const handleIsMobile = useCallback(() => {

        let isMobileTemp = handleNavigatorUserAgent() || window.innerWidth < 992

        if (isMobile !== isMobileTemp)
            setIsMobile(isMobileTemp)

    }, [isMobile])

    useLayoutEffectIsomorphic(() => {

        window.addEventListener('resize', () => {

            clearTimeout(timeout.current)

            // از 2 بار تکرار resize توسط chrome جلوگیری شد و همچنین درصورت resize نشدن پس از زمان تعیین شده تابع مربوطه فراخوانی می شود تا از رندر متعدد جلوگیری شود
            timeout.current = setTimeout(() => handleIsMobile(), 150)

        });

        return () => {

            clearTimeout(timeout.current)

            window.removeEventListener('resize', handleIsMobile)

        };

    }, [handleIsMobile]);

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <ContextIsMobile.Provider value={isMobile}>{children}</ContextIsMobile.Provider>
    )
}