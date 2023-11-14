import { TableTypeEnum } from '../enums';
import calculateSetsDuration from './sets/calculateSetsDuration';
import createEnduranceSets from './sets/createEnduranceSets';
import createInitialSets from './sets/createInitialSets';
import { EditorStateType } from '../editorTypes';

const createSetsByTableType = (base: number, baseBreaks: number, type: TableTypeEnum, enduranceLaps: number) => {
  if (type === TableTypeEnum.TABLE_TYPE_ENDURANCE) {
    return createEnduranceSets(base, baseBreaks, enduranceLaps);
  }
  return createInitialSets(base, type);
};

const createTable = (base: number, baseBreaks: number, type: TableTypeEnum, enduranceLaps: number): EditorStateType => {
  const sets = createSetsByTableType(base, baseBreaks, type, enduranceLaps);
  const duration = calculateSetsDuration(sets);
  return {
    trainingTable: {
      base,
      baseBreaks,
      type,
      duration,
      enduranceLaps,
    },
    sets,
  };
};

export default createTable;
