import { AnyAction } from 'redux';
import calculateSetsDuration from '../../../helpers/sets/calculateSetsDuration';
import setEditorTableDuration from '../setEditorTableDuration';
import { ImmutableJSType } from '../../../../../redux/types';
import { TableSetListType } from '../../../editorTypes';

export type UpdateTableDurationBySetsType = (sets: ImmutableJSType) => AnyAction;

export const updateTableDurationBySets: UpdateTableDurationBySetsType = sets => {
  const duration = calculateSetsDuration(sets.toJS<TableSetListType>());
  return setEditorTableDuration(duration);
};
