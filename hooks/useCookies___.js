import {useMemo} from "react"

import {useDeviceSelectors} from "react-device-detect";

export default function useIsMobile() {

    // سمت server مقدار window در دسترس نیست، جهت تعیین سمت server یا client بودن استفاده شد
    const SSR = useMemo(() => typeof window === 'undefined', [])

    const [selectors] = SSR ? [] : useDeviceSelectors(window.navigator.userAgent)

    // -----------------------------------------------------------------------------------------------------------------

    return selectors?.isMobile;
}