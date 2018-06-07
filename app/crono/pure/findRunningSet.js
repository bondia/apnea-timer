import * as tableEnums from 'app/editor/enums';

export default function findRunningSet(sets) {
    const current = sets.find(e => e.getIn(['running', 'mode']) === tableEnums.SET_MODE_RUNNING);
    return current ? current : null;
}
