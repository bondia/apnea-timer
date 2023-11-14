import Immutable from 'immutable';
import { ImmutableJSType, StoreThunkAction } from '../../../../../redux/types';
import { ImmutableJSTableSetType, TableSetListType } from '../../../editorTypes';
import updateSetDurationForKey from '../../../helpers/sets/updateSetDurationForKey';
import { updateTableDurationBySets } from './updateTableDurationBySets';
import replaceEditorSets from '../replaceEditorSets';
import { TableTypeEnum } from '../../../enums';

const changeTimeItem =
  (key: number, amount: number): StoreThunkAction =>
  (dispatch, getState) => {
    const { editor } = getState();

    // find item
    const item = editor
      .getIn<ImmutableJSType>(['sets'])
      .find<ImmutableJSTableSetType>((set: ImmutableJSTableSetType) => set.get('pos') === key);

    if (!item) {
      return;
    }

    // decide new duration
    const duration = amount + item.get<number>('duration');
    const tableType = editor.getIn<TableTypeEnum>(['trainingTable', 'type']);
    const sets = updateSetDurationForKey(
      editor.get<ImmutableJSType>('sets').toJS<TableSetListType>(),
      tableType,
      key,
      duration,
    );
    const newSets = Immutable.fromJS(sets);
    dispatch(replaceEditorSets(newSets));

    // update table duration
    dispatch(updateTableDurationBySets(newSets));
  };

export const increaseTimeItem = (key: number, amount: number) => changeTimeItem(key, amount);
export const decreaseTimeItem = (key: number, amount: number) => changeTimeItem(key, -amount);
