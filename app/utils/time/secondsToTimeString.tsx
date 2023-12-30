import { round } from 'lodash';
import secondsToFullMinutes from './secondsToFullMinutes';
import secondsToFullMinutesString from './secondsToFullMinutesString';

const secondsToMinutesRest = (seconds: number): number => {
  return seconds - secondsToFullMinutes(seconds) * 60;
};

const secondsToMinutesRestString = (seconds: number): string => {
  const rest = round(secondsToMinutesRest(seconds), 0);
  return rest < 10 ? `0${rest}` : rest.toString();
};

const secondsToTimeString = (seconds: number): string => {
  if (seconds < 0) {
    return `+${secondsToFullMinutesString(-seconds)}:${secondsToMinutesRestString(-seconds)}`;
  }
  return `${secondsToFullMinutesString(seconds)}:${secondsToMinutesRestString(seconds)}`;
};

export default secondsToTimeString;
