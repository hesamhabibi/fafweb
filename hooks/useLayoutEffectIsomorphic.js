import {useEffect, useLayoutEffect} from "react"

// سمت client برابر با useLayoutEffect و سمت سرور برابر با useEffect می باشد
const useLayoutEffectIsomorphic = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default useLayoutEffectIsomorphic;