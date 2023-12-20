let timer = null;

const TIMER_REFRESH = 100;

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
