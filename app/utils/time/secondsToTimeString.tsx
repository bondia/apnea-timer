import secondsToFullMinutes from './secondsToFullMinutes';
import secondsToFullMinutesString from './secondsToFullMinutesString';

function secondsToMinutesRest(seconds: number): number {
  return seconds - secondsToFullMinutes(seconds) * 60;
}

function secondsToMinutesRestString(seconds: number): string {
  const rest = secondsToMinutesRest(seconds);
  return rest < 10 ? `0${rest}` : rest.toString();
}

export default function secondsToTimeString(seconds: number): string {
  if (seconds < 0) {
    return `+${secondsToFullMinutesString(-seconds)}:${secondsToMinutesRestString(-seconds)}`;
  }
  return `${secondsToFullMinutesString(seconds)}:${secondsToMinutesRestString(seconds)}`;
}
