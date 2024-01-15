import milisecondsToTimeString from './milisecondsToTimeString';

/**
 * @deprecated in favor of milisecondsToTimeString
 */
const secondsToTimeString = (seconds: number): string => {
  return milisecondsToTimeString(seconds * 1000);
};

export default secondsToTimeString;
