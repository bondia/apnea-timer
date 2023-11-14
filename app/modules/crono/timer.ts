let timer = null;

const TIMER_REFRESH = 200;

export const stopTimer = () => {
  if (timer === null) {
    return;
  }
  clearInterval(timer);
  timer = null;
};

export const startTimer = callback => {
  timer = setInterval(() => callback(), TIMER_REFRESH);
};
