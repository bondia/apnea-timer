import playSound, { A2, C3, F2 } from '../../../utils/playSound';

const playNotificationSound = (countdown: number): void => {
  switch (countdown) {
    case 30:
    case 20:
      playSound(F2);
      break;
    case 10:
    case 5:
      playSound(A2);
      break;
    case 0:
      playSound(C3);
      break;
    default:
      break;
  }
};

export default playNotificationSound;
