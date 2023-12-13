import React, { FC } from 'react';
import * as SC from '../ActionButtonsSet.styled';
import LongTouchButton from '../../../../../components/LongTouchButton';
import { useAppDispatch } from '../../../../../redux/hooks';
import trackContractionAction from '../../../redux/actions/composed/trackContractionAction';

const ContractionButton: FC = () => {
  const dispatch = useAppDispatch();
  const onPressStart = () => dispatch(trackContractionAction());
  return (
    <SC.ButtonWrapper>
      <LongTouchButton title="1st Cont" onPressStart={onPressStart} />
    </SC.ButtonWrapper>
  );
};

export default ContractionButton;
