import { Icon } from '@rneui/base';
import { CheckBox } from '@rneui/themed';
import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import Typography from '../Typography/Typography';

type RadioButtonProps = {
  checked: boolean;
  title: string;
  onPress?: () => void;
};

const RadioButton: FC<RadioButtonProps> = ({ checked, title, onPress }) => {
  const { colors } = useAppTheme();
  return (
    <CheckBox
      title={<Typography>{title}</Typography>}
      checked={checked}
      onPress={onPress}
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color={colors.primary900}
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color="grey"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
    />
  );
};

export default RadioButton;
