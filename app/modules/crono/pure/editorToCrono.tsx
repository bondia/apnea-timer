import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { EditorStateType, TableSetType } from '../../editor/editorTypes';
import { CronoRunningType, CronoSetType, CronoStateType } from '../redux/CronoTypes';

function initSet(originalSet: TableSetType): CronoSetType {
  const { pos } = originalSet;
  const originalSetDuration = originalSet.duration;
  const set = originalSet as CronoSetType;
  set.running = {
    startTimestamp: null,
    endTimestamp: null,
    mode: pos === 0 ? SetModeEnum.SET_MODE_RUNNING : SetModeEnum.SET_MODE_INITIAL,
    originalCountdown: originalSetDuration,
    countdown: originalSetDuration,
    contraction: -1,
  };
  return set;
}

function createSets(originalSets: TableSetType[]): CronoSetType[] {
  const sets: CronoSetType[] = originalSets.map(initSet);
  return sets;
}

function createDefaultRunningProp(): CronoRunningType {
  return {
    startTimestamp: null,
    // represents the seconds spend since the table started
    clock: -1,
    // table current step
    step: 0,
    // cono mode
    mode: CronoModeEnum.CRONO_MODE_INITIAL,
    // set contractions
    contractions: 0,
  };
}

export default function editorToCrono(editor: EditorStateType): CronoStateType {
  return {
    trainingTable: editor.trainingTable,
    running: createDefaultRunningProp(),
    sets: createSets(editor.sets),
  };
}
