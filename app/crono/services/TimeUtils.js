function calculateMinutes(seconds) {
    return seconds >= 60 ? Math.floor(seconds / 60) : 0
}

function calculateRestSeconds(seconds) {
    return seconds - (calculateMinutes(seconds) * 60)
}

function getMinutesString(seconds) {
    const minutes = calculateMinutes(seconds)
    return minutes < 10 ? `0${minutes}` : minutes
}

function getRestSecondsString(seconds) {
    const rest = calculateRestSeconds(seconds)
    return rest < 10 ? `0${rest}` : rest
}

function formatSeconds(seconds) {
    return `${getMinutesString(seconds)}:${getRestSecondsString(seconds)}`
}

export { formatSeconds }
