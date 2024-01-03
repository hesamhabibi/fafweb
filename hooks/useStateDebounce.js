import {useEffect, useRef, useState} from "react"

export default function useStateDebounce(value, delay) {

    const timeout = useRef(null)

    const [valueReceived, setValueReceived] = useState(value);

    const [valueDebounced, setValueDebounced] = useState(value);

    useEffect(() => {

        timeout.current = setTimeout(() => setValueDebounced(valueReceived), delay);

        return () => clearTimeout(timeout.current);

    }, [valueReceived, delay]);

    // -----------------------------------------------------------------------------------------------------------------

    return [valueDebounced, setValueReceived];
}