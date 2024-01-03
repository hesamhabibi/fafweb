"use client"

import {createContext, useMemo, useEffect, useRef, useState, useLayoutEffect, useCallback} from 'react';

import { getCookie, setCookie } from 'cookies-next';

import useWindowSize from "../hooks/useWindowSize";

const ContextApp = createContext(null);

export default ContextApp;

export function ContextAppProvider({children}) {

    const firstRender = useRef(true);

    // سمت server مقدار window در دسترس نیست، جهت تعیین سمت server یا client بودن استفاده شد
    const SSR = useMemo(() => typeof window === 'undefined', [])

    // -------------------------------------------------------------------------------------------------- default values

    const [isHydrated, setIsHydrated] = useState(false)
    const windowSize = useWindowSize()
    const [lang, setLang] = useState(['fa', 'rtl'])
    const [theme, setTheme] = useState(getCookie('appTheme') || 'light')

    // ----------------------------------------------------------------------------------------------------------- theme
    const contextAppThemeHandler = useCallback(async (type, data) => {

        let callback = true;

        switch (type) {

            case 'SET':

                if (data && data !== theme) {

                    setCookie('appTheme', data)

                    setTheme(data)

                    document.documentElement.dataset.bsTheme = data

                } else if (!data) callback = false

                return callback

        }

    }, [theme])

    useLayoutEffect(() => {

        // برای حالتی که اولین بار است و هنوز theme ست نشده است
        if (!getCookie('appTheme'))
            setCookie('appTheme', theme)

    }, []);

    // ---------------------------------------------------------------------------------------------------- first render

    // این تابع می بایست آخرین تابع باشد
    useEffect(() => {

        if (firstRender.current)
            firstRender.current = false;

        // مورد استفاده برای import کامپوننت ها بعد از hydrate
        setIsHydrated(true)

    }, []);

    // ---------------------------------------------------------------------------------------------------------- values
    const ContextAppValue = useMemo(() => ({
        SSR,
        isHydrated,
        windowSize,
        lang,
        theme,
        contextAppThemeHandler
    }), [SSR, isHydrated, windowSize, lang, theme])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <ContextApp.Provider value={{...ContextAppValue}}>{children}</ContextApp.Provider>
    )
}