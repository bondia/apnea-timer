import { TableSetListType } from '../../../editorTypes';
import calculateSetsDuration from '../../../helpers/sets/calculateSetsDuration';
import setEditorTableDurationAction, { SetEditorTableDurationAction } from '../setEditorTableDurationAction';

type UpdateTableDurationBySetsTypeAction = (sets: TableSetListType) => SetEditorTableDurationAction;

const updateTableDurationBySetsAction: UpdateTableDurationBySetsTypeAction = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDurationAction(duration);
};

export default updateTableDurationBySetsAction;
