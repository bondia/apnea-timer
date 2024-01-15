import { formatDuration, intervalToDuration } from 'date-fns';

const milisecondsToTimeString = (miliseconds: number) => {
  const duration = intervalToDuration({ start: 0, end: miliseconds });
  return formatDuration(
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
};

export default milisecondsToTimeString;
