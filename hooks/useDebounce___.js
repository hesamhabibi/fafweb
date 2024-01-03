import {useEffect, useRef, useState} from "react"

export default function useStateDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(null)
    const timeout = useRef(null)
    //
    // useEffect(() => {
    //
    //     timeout.current = setTimeout(() => setDebouncedValue(value), delay || 500)
    //
    //     return () => clearTimeout(timeout.current)
    //
    // }, [value, delay])

    return debouncedValue
}