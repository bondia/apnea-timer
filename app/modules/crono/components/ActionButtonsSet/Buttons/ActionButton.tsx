import React, { FC } from 'react';
import LongTouchButton from '../../../../../components/LongTouchButton';
import * as SC from '../ActionButtonsSet.styled';

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
