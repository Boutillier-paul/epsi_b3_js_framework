import { useState, useEffect } from "react";
import useTimerParser from "./Hooks/useTimerParser";


export default function Timer() {
    const [time, setTime] = useState(0)
    const {parseSecondstoHMS} = useTimerParser()

    // TODO 
    // METTRE UN isActive avec un button


    useEffect( () => {
        const interval = setInterval( () => {
            setTime(time => time + 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <h1>
            { parseSecondstoHMS(time) }
        </h1>
    )
}