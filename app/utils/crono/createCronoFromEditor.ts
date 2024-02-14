import {
  CronoRunningType,
  CronoSetType,
  CronoStateType,
} from '../../modules/crono/cronoTypes';
import {
  EditorStateType,
  TableSetType,
} from '../../modules/editor/editorTypes';
import { CronoModeEnum, SetModeEnum } from '../../modules/editor/enums';

const initSet = (originalSet: TableSetType): CronoSetType => {
  const { pos, duration: originalSetDuration } = originalSet;
  return {
    ...originalSet,
    running: {
      mode:
        pos === 0 ? SetModeEnum.SET_MODE_RUNNING : SetModeEnum.SET_MODE_INITIAL,
      startTimestamp: -1,
      endTimestamp: -1,
      targetEndTimestamp: -1,
      originalDurationMiliseconds: originalSetDuration,
      countdown: originalSetDuration,
      contraction: -1,
    },
  };
};

const createSets = (originalSets: TableSetType[]): CronoSetType[] => [
  ...originalSets.map(initSet),
];

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

const createCronoFromEditor = (editor: EditorStateType): CronoStateType => ({
  trainingTable: { ...editor.trainingTable },
  running: createDefaultRunningProp(),
  sets: createSets(editor.sets),
});

export default createCronoFromEditor;
