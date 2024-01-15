import secondsToFullMinutes from './secondsToFullMinutes';

/**
 * @deprecated in favor of milisecondsToTimeString
 */
const secondsToFullMinutesString = (seconds: number): string => {
  const minutes: number = secondsToFullMinutes(seconds);
  return minutes < 10 ? `0${minutes}` : minutes.toString();
};

export default secondsToFullMinutesString;
