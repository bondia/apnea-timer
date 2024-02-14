import { EditorStateType } from '../editorTypes';
import { TableTypeEnum } from '../enums';
import calculateSetsDuration from './sets/calculateSetsDuration';
import createEnduranceSets from './sets/createEnduranceSets';
import createInitialSets from './sets/createInitialSets';

const createSetsByTableType = (
  base: number,
  baseBreaks: number,
  type: TableTypeEnum,
  enduranceLaps: number,
) => {
  if (type === TableTypeEnum.TABLE_TYPE_ENDURANCE) {
    return createEnduranceSets(base, baseBreaks, enduranceLaps);
  }
  return createInitialSets(base, type);
};

const createTable = (
  baseMilliseconds: number,
  baseBreaks: number,
  type: TableTypeEnum,
  enduranceLaps: number,
): EditorStateType => {
  const sets = createSetsByTableType(
    baseMilliseconds,
    baseBreaks,
    type,
    enduranceLaps,
  );
  const duration = calculateSetsDuration(sets);
  return {
    trainingTable: {
      baseMilliseconds,
      baseBreaks,
      type,
      duration,
      enduranceLaps,
    },
    sets,
  };
};

export default createTable;
