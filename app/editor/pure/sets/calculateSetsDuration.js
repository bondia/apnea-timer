import * as enums from '../../enums';

export default function calculateTableDuration(sets=null) {
    if (!sets) {
        return 0;
    }

    let duration = 0;
    sets.forEach(e => (duration += getSingleSetDuration(e)));
    return duration;
}

function getSingleSetDuration(set) {
    // use running wrapper if exists
    // it means the table is running
    const running = set.get('running');
    if (running) {
        const countdown = running.get('countdown');
        return running.get('mode') !== enums.SET_MODE_SKIPED && countdown > 0 ? countdown : 0;
    }

    // do not include zombie sets
    const zombie = set.get('zombie');
    return zombie === true ? 0 : set.get('duration');
}
