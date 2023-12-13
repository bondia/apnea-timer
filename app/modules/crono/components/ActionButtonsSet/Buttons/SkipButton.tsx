import React, { FC, useCallback } from 'react';
import { debounce } from 'lodash';
import { useAppDispatch } from '../../../../../redux/hooks';
import { skipSet } from '../../../redux/cronoActions';
import { CronoSetType } from '../../../redux/CronoTypes';
import ActionButton from './ActionButton';

type SkipButtonProps = {
  set: CronoSetType;
};

const SkipButton: FC<SkipButtonProps> = ({ set }) => {
  const dispatch = useAppDispatch();

  const skip = useCallback(
    (currentSet: CronoSetType) => {
      if (set != null) {
        return dispatch(skipSet(currentSet.pos));
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
