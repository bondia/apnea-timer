import * as tableEnums from '../../editor/enums';
import { CronoSetType } from './../redux/cronoTypes';

export default function findRunningSet(sets: CronoSetType[]): CronoSetType {
    const current: CronoSetType = sets
        .find(e => e.running.mode === tableEnums.SET_MODE_RUNNING);
    return current ? current : null;
}
