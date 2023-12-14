import { StoreThunkAction } from '../../../../../redux/types';
import updateSetDurationForKey from '../../../helpers/sets/updateSetDurationForKey';
import { updateTableDurationBySetsAction } from './updateTableDurationBySetsAction';
import replaceEditorSetsAction from '../replaceEditorSetsAction';

const changeTimeItem =
  (key: number, amount: number): StoreThunkAction =>
  (dispatch, getState) => {
    const {
      editor: {
        trainingTable: { type: tableType },
        sets,
      },
    } = getState();

    // find item
    const item = sets.find(set => set.pos === key);

    if (!item) {
      return;
    }

    // decide new duration
    const duration = amount + item.duration;
    const newSets = updateSetDurationForKey([...sets], tableType, key, duration);
    dispatch(replaceEditorSetsAction(newSets));

    // update table duration
    dispatch(updateTableDurationBySetsAction(newSets));
  };

export const increaseTimeItem = (key: number, amount: number) => changeTimeItem(key, amount);
export const decreaseTimeItem = (key: number, amount: number) => changeTimeItem(key, -amount);
