import { AnyAction } from 'redux';
import createTable from '../../../helpers/createTable';
import { TableTypeEnum } from '../../../enums';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

export type CreateEnduranceTableType = (base: number, baseBreaks: number, laps?: number) => AnyAction;

export const createEnduranceTable: CreateEnduranceTableType = (base, baseBreaks, laps = 6) => {
  const newState = createTable(base, baseBreaks, TableTypeEnum.TABLE_TYPE_ENDURANCE, laps);
  return setEditorInitialStateAction(newState);
};
