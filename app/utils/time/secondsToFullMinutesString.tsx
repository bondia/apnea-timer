import secondsToFullMinutes from './secondsToFullMinutes';

const secondsToFullMinutesString = (seconds: number): string => {
  const minutes: number = secondsToFullMinutes(seconds);
  return minutes < 10 ? `0${minutes}` : minutes.toString();
};

export default secondsToFullMinutesString;
