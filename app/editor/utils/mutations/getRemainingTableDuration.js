import * as enums from '../../enums'

export default function getRemainingTableDuration(sets = null) {
    if (!sets) {
        return 0;
    }

    let duration = 0;
    sets.forEach((e) => duration += getSingleSetDuration(e))
    return duration;
}

function getSingleSetDuration(set) {
    // use running wrapper if exists
    // it means the table is running
    const running = set.get('running');
    if (running) {
        return running.get('mode') !== enums.SET_MODE_SKIPED ? running.get('countdown') : 0;
    }
    return set.get('duration');
}
