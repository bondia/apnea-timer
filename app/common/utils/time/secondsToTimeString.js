import secondsToFullMinutes from './secondsToFullMinutes'
import secondsToFullMinutesString from './secondsToFullMinutesString'

function secondsToMinutesRest(seconds) {
    return seconds - (secondsToFullMinutes(seconds) * 60)
}

function secondsToMinutesRestString(seconds) {
    const rest = secondsToMinutesRest(seconds)
    return rest < 10 ? `0${rest}` : rest
}

export default function secondsToTimeString(seconds) {
    return `${secondsToFullMinutesString(seconds)}:${secondsToMinutesRestString(seconds)}`
}
