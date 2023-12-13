import { CronoSetType } from '../redux/CronoTypes';

const calculateAverageContractions = (sets: CronoSetType[]): number => {
  let items = 0;
  const sum: number = sets.reduce((total: number, set: CronoSetType) => {
    const value: number = set.running.contraction;
    if (value > 0) {
      items += 1;
      return total + value;
    }
    return total;
  }, 0);
  return items > 0 && sum > 0 ? Math.round(sum / items) : 0;
};

export default calculateAverageContractions;