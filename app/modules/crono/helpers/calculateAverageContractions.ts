import { CronoSetListType, CronoSetType } from '../cronoTypes';

type AccumulatedContractions = { items: number; sum: number };

const accumulateContractions = (sets: CronoSetListType): AccumulatedContractions =>
  sets.reduce<AccumulatedContractions>(
    ({ items, sum }, set: CronoSetType) => {
      const {
        running: { contraction },
      } = set;
      if (contraction <= 0) {
        return { items, sum };
      }
      return {
        items: items + 1,
        sum: sum + contraction,
      };
    },
    { items: 0, sum: 0 },
  );

const calculateAverageContractions = (sets: CronoSetType[]): number => {
  const { items, sum } = accumulateContractions(sets);
  return items > 0 && sum > 0 ? Math.round(sum / items) : 0;
};

export default calculateAverageContractions;
