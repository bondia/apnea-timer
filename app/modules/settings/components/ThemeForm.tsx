import { Icon } from '@rneui/base';
import { CheckBox } from '@rneui/themed';
import React, { FC } from 'react';
import { useColorScheme } from 'react-native';
import useAppTheme from '../../../components/AppThemeProvider/useAppTheme';
import Typography from '../../../components/Typography/Typography';
import { ThemeSettingsOptions } from '../../../themes/types';
import { useSettingThemeContext } from '../context/ThemeSettingsContext';

const ThemeForm: FC = () => {
  const { colors } = useAppTheme();
  const theme = useColorScheme();

  const { theme: storedTheme, updateTheme } = useSettingThemeContext();

  return (
    <>
      <CheckBox
        title={<Typography>Device Settings ({theme})</Typography>}
        checked={storedTheme === null}
        onPress={() => updateTheme(null)}
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
          <Icon name="radio-button-unchecked" type="material" color="grey" size={25} iconStyle={{ marginRight: 10 }} />
        }
      />
      <CheckBox
        title={<Typography>Light mode</Typography>}
        checked={ThemeSettingsOptions.light === storedTheme}
        onPress={() => updateTheme(ThemeSettingsOptions.light)}
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
          <Icon name="radio-button-unchecked" type="material" color="grey" size={25} iconStyle={{ marginRight: 10 }} />
        }
      />
      <CheckBox
        title={<Typography>Dark side</Typography>}
        checked={ThemeSettingsOptions.dark === storedTheme}
        onPress={() => updateTheme(ThemeSettingsOptions.dark)}
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
          <Icon name="radio-button-unchecked" type="material" color="grey" size={25} iconStyle={{ marginRight: 10 }} />
        }
      />
    </>
  );
};

export default ThemeForm;
