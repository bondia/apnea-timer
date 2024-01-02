import { debounce } from 'lodash';
import React, { FC, useCallback } from 'react';
import LongTouchButton from '../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../redux/hooks';
import { CronoSetType } from '../../cronoTypes';
import skipSetAction from '../../redux/actions/composed/skipSetAction';

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

  return <LongTouchButton title="Skip" onPressStart={() => skipSetDebounced(set)} />;
};

export default SkipButton;
