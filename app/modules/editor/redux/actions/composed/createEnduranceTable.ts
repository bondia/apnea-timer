import { AnyAction } from 'redux';
import { TableTypeEnum } from '../../../enums';
import createTable from '../../../helpers/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

type CreateEnduranceTableType = (base: number, baseBreaks: number, laps?: number) => AnyAction;

const createEnduranceTable: CreateEnduranceTableType = (base, baseBreaks, laps = 6) => {
  const newState = createTable(base, baseBreaks, TableTypeEnum.TABLE_TYPE_ENDURANCE, laps);
  return setEditorInitialStateAction(newState);
};

export default createEnduranceTable;
