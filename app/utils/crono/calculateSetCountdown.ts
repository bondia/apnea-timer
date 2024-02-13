import { now } from 'lodash';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import isSetFinished from './isSetFinished';

/**
 * @param startTimestamp
 * @param endTimestamp
 * @param targetEndTimestamp
 * @param originalDurationMiliseconds
 * @param currentTime
 * @returns miliseconds
 */
const calculateSetCountdown = (
  set: CronoSetType,
  currentTime?: number,
): number => {
  if (isSetFinished(set)) {
    return 0;
  }

  const {
    running: { targetEndTimestamp, originalDurationMiliseconds },
  } = set;

  if (targetEndTimestamp > -1) {
    const nowTimestamp = currentTime || now();
    const value = targetEndTimestamp - nowTimestamp;
    return value > 0 ? value + 1000 : value;
  }

  return originalDurationMiliseconds || 0;
};

export default calculateSetCountdown;
