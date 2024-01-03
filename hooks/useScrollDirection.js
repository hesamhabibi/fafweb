import {useCallback, useRef, useState} from "react"

import useLayoutEffectIsomorphic from "./useLayoutEffectIsomorphic";

//TODO حالت threshold ها و x بعد نوشته شود
//FIXME گاهی با اسکرول دو بار رندر می شود

// تابع اسکرول پس از مقدار offset که فاصله از شروع و پایان target می باشد و همچنین پس از مقدار threshold اجرا می شود
export default function useScrollDirection(target = typeof window !== 'undefined' && window, offsetY = [0, 0], offsetX = [0, 0], thresholdY = [0, 0], thresholdX = [0, 0]) {

    const ticking = useRef(false);

    // const prevScrollX = useRef(target.pageXOffset);
    // const prevScrollY = useRef(target.pageYOffset);
    const prevScrollX = useRef(0);
    const prevScrollY = useRef(0);

    const [scrollDirection, setScrollDirection] = useState(null);

    const handleScrollUpdate = useCallback(() => {

        const scrollX = target.pageXOffset;
        const scrollY = target.pageYOffset;
        const scrollW = target === window ? document.documentElement.scrollWidth - document.documentElement.clientWidth : target.scrollWidth - target.clientWidth;
        const scrollH = target === window ? document.documentElement.scrollHeight - document.documentElement.clientHeight : target.scrollHeight - target.clientHeight;

        if (scrollY > prevScrollY.current && scrollY > offsetY[0] && Math.abs(scrollY - prevScrollY.current) >= thresholdY[0]) {

            if (scrollDirection !== 'down')
                setScrollDirection('down');

            prevScrollY.current = scrollY > 0 ? scrollY : 0;

        } else if (scrollY < prevScrollY.current && scrollY < scrollH - offsetY[1] && Math.abs(scrollY - prevScrollY.current) >= thresholdY[1]) {

            if (scrollDirection !== 'up')
                setScrollDirection('up');

            prevScrollY.current = scrollY > 0 ? scrollY : 0;

        }

        ticking.current = false;

    }, [scrollDirection, target])

    useLayoutEffectIsomorphic(() => {

        const handleScroll = () => {

            if (!ticking.current) {

                ticking.current = true;

                target.requestAnimationFrame(handleScrollUpdate);

            }

        }

        handleScrollUpdate()

        target.addEventListener('scroll', handleScroll);

        return () => target.removeEventListener('scroll', handleScroll);

    }, [handleScrollUpdate]);

    return scrollDirection;
}