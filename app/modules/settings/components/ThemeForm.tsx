import React, { FC } from 'react';
import { useColorScheme } from 'react-native';
import RadioButton from '../../../components/Forms/RadioButton';
import { ThemeSettingsOptions } from '../../../themes/types';
import { useUserThemeContext } from '../context/UserThemeContext';

const ThemeForm: FC = () => {
  const theme = useColorScheme();
  const { theme: storedTheme, updateTheme } = useUserThemeContext();
  return (
    <>
      <RadioButton
        title={`Device Settings (${theme})`}
        checked={storedTheme === null}
        onPress={() => updateTheme(null)}
      />

      <RadioButton
        title="Light mode"
        checked={ThemeSettingsOptions.light === storedTheme}
        onPress={() => updateTheme(ThemeSettingsOptions.light)}
      />

      <RadioButton
        title="Dark side"
        checked={ThemeSettingsOptions.dark === storedTheme}
        onPress={() => updateTheme(ThemeSettingsOptions.dark)}
      />
    </>
  );
};

export default ThemeForm;
