import { AnyAction } from 'redux';
import { TableTypeEnum } from '../../../enums';
import createTable from '../../../helpers/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

type ChangeTableTypeType = (
  base: number,
  tableType: TableTypeEnum,
) => AnyAction;

const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, 5, tableType, 6);
  return setEditorInitialStateAction(newState);
};

export default changeTableType;
