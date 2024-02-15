import { AnyAction } from 'redux';
import { MillisecondsType } from '../../../../../types';
import { TableTypeEnum } from '../../../enums';
import createTable from '../../../helpers/createTable';
import setEditorInitialStateAction from '../setEditorInitialStateAction';

type ChangeTableTypeType = (
  base: MillisecondsType,
  tableType: TableTypeEnum,
) => AnyAction;

const changeTableType: ChangeTableTypeType = (base, tableType) => {
  const newState = createTable(base, 5000, tableType, 6);
  return setEditorInitialStateAction(newState);
};

export default changeTableType;
