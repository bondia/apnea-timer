import { StoreThunkAction } from '../../../../../redux/types';
import { EnduranceTrainingTableType } from '../../../editorTypes';
import { TableTypeEnum } from '../../../enums';
import createTable from '../../../helpers/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

export type ChangeEnduranceLapsType = (amount: number) => StoreThunkAction;

export const changeEnduranceLaps: ChangeEnduranceLapsType =
  laps => (dispatch, getState) => {
    const {
      editor: { trainingTable },
    } = getState();
    const { base, baseBreaks } = trainingTable as EnduranceTrainingTableType;
    const state = createTable(
      base,
      baseBreaks,
      TableTypeEnum.TABLE_TYPE_ENDURANCE,
      laps,
    );
    return dispatch(setEditorInitialStateAction(state));
  };
