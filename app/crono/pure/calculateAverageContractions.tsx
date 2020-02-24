import { CronoSetType } from "../redux/cronoTypes";

export default function calculateAverageContractions(sets: CronoSetType[]): number {
    let items: number = 0;
    const sum: number = sets.reduce((total: number, set: CronoSetType) => {
        const value: number = set['running']['contraction'];
        if (value > 0) {
            items++;
            return total + value;
        }
        return total;
    }, 0);
    return items > 0 && sum > 0 ? Math.round(sum / items) : 0;
}
