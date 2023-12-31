import { EditorStateType, TableSetType } from '../../editor/editorTypes';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { CronoRunningType, CronoSetType, CronoStateType } from '../cronoTypes';

const initSet = (originalSet: TableSetType): CronoSetType => {
  const { pos, duration: originalSetDuration } = originalSet;
  return {
    ...originalSet,
    running: {
      startTimestamp: undefined,
      endTimestamp: undefined,
      mode: pos === 0 ? SetModeEnum.SET_MODE_RUNNING : SetModeEnum.SET_MODE_INITIAL,
      originalCountdown: originalSetDuration,
      countdown: originalSetDuration,
      contraction: -1,
    },
  };
};

const createSets = (originalSets: TableSetType[]): CronoSetType[] => [...originalSets.map(initSet)];

const createDefaultRunningProp = (): CronoRunningType => ({
  startTimestamp: undefined,
  // represents the seconds spend since the table started
  clock: -1,
  // table current step
  step: 0,
  // cono mode
  mode: CronoModeEnum.CRONO_MODE_INITIAL,
  // set contractions
  contractions: 0,
});

const editorToCrono = (editor: EditorStateType): CronoStateType => ({
  trainingTable: { ...editor.trainingTable },
  running: createDefaultRunningProp(),
  sets: createSets(editor.sets),
});

export default editorToCrono;
