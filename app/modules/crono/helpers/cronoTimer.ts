// eslint-disable-next-line no-undef
let timer: NodeJS.Timeout | null = null;

export const TIMER_REFRESH = 15;

export const stopTimer = () => {
  if (timer === null) {
    return;
  }
  clearInterval(timer);
  timer = null;
};

export const startTimer = (callback: () => void) => {
  timer = setInterval(() => callback(), TIMER_REFRESH);
};
