import React, { FC } from 'react';
import * as SC from '../ActionButtonsSet.styled';
import LongTouchButton from '../../../../../components/LongTouchButton';

type ActionButtonProps = {
  title: string;
  action: () => void;
};

const ActionButton: FC<ActionButtonProps> = ({ title, action }) => {
  return (
    <SC.ButtonWrapper>
      <LongTouchButton title={title} onPressStart={action} />
    </SC.ButtonWrapper>
  );
};

export default ActionButton;
