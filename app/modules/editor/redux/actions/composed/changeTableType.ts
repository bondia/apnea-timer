import { AnyAction } from 'redux';
import createTable from '../../../pure/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';
import { TableTypeEnum } from '../../../enums';

export type ChangeTableTypeType = (base: number, tableType: TableTypeEnum) => AnyAction;

export const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, null, tableType, 6);
  return setEditorInitialStateAction(newState);
};
