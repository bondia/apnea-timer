import secondsToFullMinutes from './secondsToFullMinutes';

export default function secondsToFullMinutesString(seconds: number): string {
  const minutes: number = secondsToFullMinutes(seconds);
  return minutes < 10 ? `0${minutes}` : minutes.toString();
}
