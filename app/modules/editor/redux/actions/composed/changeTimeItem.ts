import { StoreThunkAction } from '../../../../../redux/types';
import { ImmutableJSEditorSetType } from '../../../editorTypes';
import updateSetDurationForKey from '../../../pure/sets/updateSetDurationForKey';
import { updateTableDurationBySets } from '../../updateTableDurationBySets';
import replaceEditorSets from '../replaceEditorSets';

const changeTimeItem =
  (key: number, amount: number): StoreThunkAction =>
  (dispatch, getState) => {
    const { editor } = getState();

    // find item
    const item = editor.getIn(['sets']).find((set: ImmutableJSEditorSetType) => set.get('pos') === key);

    if (!item) {
      return;
    }

    // decide new duration
    const duration = amount + item.get('duration');
    const tableType = editor.getIn(['trainingTable', 'type']);
    const sets = updateSetDurationForKey(editor.get('sets'), tableType, key, duration);
    dispatch(replaceEditorSets(sets));

    // update table duration
    dispatch(updateTableDurationBySets(sets));
  };

export const increaseTimeItem = (key: number, amount: number) => changeTimeItem(key, amount);
export const decreaseTimeItem = (key: number, amount: number) => changeTimeItem(key, -amount);
