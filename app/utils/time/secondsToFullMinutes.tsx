/**
 * @deprecated in favor of milisecondsToTimeString
 */
const secondsToFullMinutes = (seconds: number): number => {
  return seconds >= 60 ? Math.floor(seconds / 60) : 0;
};

export default secondsToFullMinutes;
