export default function calculateAverageContractinos(sets) {
    let items = 0;
    let sum = 0;
    sets.forEach(e => {
        const value = e.getIn([ 'running',  'contraction' ]);
        if (value > 0) {
            items++;
            sum =+ value;
        }
    });
    return items > 0 && sum > 0 ? Math.round(sum / items) : 0;
}
