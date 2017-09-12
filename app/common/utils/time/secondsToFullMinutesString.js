import secondsToFullMinutes from './secondsToFullMinutes'

export default function secondsToFullMinutesString(seconds) {
    const minutes = secondsToFullMinutes(seconds)
    return minutes < 10 ? `0${minutes}` : minutes
}
