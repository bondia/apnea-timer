import { AnyAction } from 'redux';
import { TableTypeEnum } from '../../../enums';
import createTable from '../../../helpers/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

export type ChangeTableTypeType = (base: number, tableType: TableTypeEnum) => AnyAction;

export const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, 5, tableType, 6);
  return setEditorInitialStateAction(newState);
};
