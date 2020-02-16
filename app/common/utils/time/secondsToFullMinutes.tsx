export default function secondsToFullMinutes(seconds: number): number {
    return seconds >= 60 ? Math.floor(seconds / 60) : 0;
}
