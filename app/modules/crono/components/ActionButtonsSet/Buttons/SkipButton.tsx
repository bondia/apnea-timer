import React, { FC, useCallback } from 'react';
import { debounce } from 'lodash';
import * as SC from '../ActionButtonsSet.styled';
import LongTouchButton from '../../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../../redux/hooks';
import { skipSet } from '../../../redux/cronoActions';
import { CronoSetType } from '../../../redux/CronoTypes';

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
  const onPressStart = useCallback(
    debounce(skip, 500, {
      leading: true,
      trailing: false,
    }),
    [skip],
  );

  return (
    <SC.ButtonWrapper>
      <LongTouchButton title="Skip" onPressStart={() => onPressStart(set)} />
    </SC.ButtonWrapper>
  );
};

export default SkipButton;
