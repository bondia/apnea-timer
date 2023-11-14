import { StoreThunkAction } from '../../../../../redux/types';
import { TableTypeEnum } from '../../../enums';
import createTable from '../../../pure/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

export type ChangeEnduranceLapsType = (amount: number) => StoreThunkAction;

export const changeEnduranceLaps: ChangeEnduranceLapsType = laps => (dispatch, getState) => {
  const { editor } = getState();
  const base = editor.getIn<number>(['trainingTable', 'base']);
  const baseBreaks = editor.getIn<number>(['trainingTable', 'baseBreaks']);
  const newState = createTable(base, baseBreaks, TableTypeEnum.TABLE_TYPE_ENDURANCE, laps);
  return dispatch(setEditorInitialStateAction(newState));
};
