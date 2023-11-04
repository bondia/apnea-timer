import { AnyAction } from 'redux';
import createTable from '../../../pure/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

export type ChangeTableTypeType = (base: number, tableType: string) => AnyAction;

export const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, null, tableType, 6);
  return setEditorInitialStateAction(newState);
};
