import * as enums from '../../editor/enums';
import { CronoStateType, CronoRunningType, CronoSetType } from '../redux/cronoTypes';
import { EditorStateType, TableSetType } from '../../editor/redux/editorTypes';

export default function editorToCrono(editor: EditorStateType): CronoStateType {
    return {
        trainingTable: editor.trainingTable,
        running: createDefaultRunningProp(),
        sets: createSets(editor.sets)
    };
}

function createDefaultRunningProp(): CronoRunningType {
    return {
        startTimestamp: null,
        // represents the seconds spend since the table started
        clock: -1,
        // table current step
        step: 0,
        // cono mode
        mode: enums.CRONO_MODE_INITIAL,
        // set contractions
        contractions: 0
    };
}

function createSets(originalSets: TableSetType[]): CronoSetType[] {
    const sets: CronoSetType[] = originalSets.map(initSet);
    return sets;
}

function initSet(originalSet: TableSetType): CronoSetType {
    const pos = originalSet.pos;
    const originalSetDuration = originalSet.duration;
    const set = originalSet as CronoSetType;
    set['running'] = {
        startTimestamp: null,
        endTimestamp: null,
        mode: pos === 0 ? enums.SET_MODE_RUNNING : enums.SET_MODE_INITIAL,
        originalCountdown: originalSetDuration,
        countdown: originalSetDuration,
        contraction: -1
    }
    return set;
}
