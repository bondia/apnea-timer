export default function secondsToFullMinutes(seconds) {
    return seconds >= 60 ? Math.floor(seconds / 60) : 0
}
