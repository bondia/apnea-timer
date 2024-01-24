import { formatDuration, intervalToDuration } from 'date-fns';

const milisecondsToTimeString = (miliseconds: number) => {
  const isNegative = miliseconds < 0;
  const end = isNegative ? -miliseconds : miliseconds;
  const duration = intervalToDuration({ start: 0, end });
  const stringValue = formatDuration(
    { minutes: 0, seconds: 0, ...duration },
    {
      format: ['minutes', 'seconds'],
      zero: true,
      delimiter: ':',
      locale: {
        formatDistance: (_token, count) => String(count).padStart(2, '0'),
      },
    },
  );
  return isNegative ? `-${stringValue}` : stringValue;
};

export default milisecondsToTimeString;
