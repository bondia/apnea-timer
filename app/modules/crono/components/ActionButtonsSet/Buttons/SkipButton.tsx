import React, { FC, useCallback } from 'react';
import { debounce } from 'lodash';
import { useAppDispatch } from '../../../../../redux/hooks';
import { CronoSetType } from '../../../redux/CronoTypes';
import skipSetAction from '../../../redux/skipSetAction';
import ActionButton from './ActionButton';

type SkipButtonProps = {
  set: CronoSetType;
};

const SkipButton: FC<SkipButtonProps> = ({ set }) => {
  const dispatch = useAppDispatch();

  const skip = useCallback(
    (currentSet: CronoSetType) => {
      if (set != null) {
        return dispatch(skipSetAction(currentSet.pos));
      }
      return undefined;
    },
    [dispatch],
  );

  // TODO: Check that callback
  const skipSetDebounced = useCallback(
    debounce(skip, 500, {
      leading: true,
      trailing: false,
    }),
    [skip],
  );

  return <ActionButton title="Skip" action={() => skipSetDebounced(set)} />;
};

export default SkipButton;
