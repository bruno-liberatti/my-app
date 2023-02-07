import React from "react"
import { Timing } from '../typings'

const TimingTurns: React.FC<Timing> = ({ timing }) => {
    const minutes = Math.round ( timing / 60 )
    const seconds = timing % 60
    const minutesStr = minutes < 10 ? '0' + minutes : minutes
    const secondsStr = seconds < 10 ? '0' + seconds : seconds
    return (
        <>
        <p>
            {`${minutesStr}:${secondsStr}`} <br/>
            tempo médio por volta
        </p>
        </>
    )
}

export default TimingTurns