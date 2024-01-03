import { Icon } from '@rneui/base';
import { CheckBox } from '@rneui/themed';
import React, { FC, useState } from 'react';
import { useColorScheme } from 'react-native';
import useAppTheme from '../../components/AppThemeProvider/useAppTheme';
import { Spacer, Stack } from '../../components/Flow';
import ThemedSceneLayout from '../../components/Layouts/ThemedSceneLayout';
import Typography, { TypographyType } from '../../components/Typography/Typography';

enum Options {
  default = 'default',
  light = 'light',
  dark = 'dark',
}

const SettingsScene: FC = () => {
  const { colors } = useAppTheme();

  const theme = useColorScheme();
  const [option, setOption] = useState<Options>(Options.default);

  return (
    <ThemedSceneLayout>
      <Stack spaceX={3} spaceTop={3}>
        <Typography type={TypographyType.H2} color={colors.primary900}>
          Settings
        </Typography>

        <Spacer spacing={3} />

        <CheckBox
          title={<Typography>Device Settings ({theme})</Typography>}
          checked={option === Options.default}
          onPress={() => setOption(Options.default)}
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
        <CheckBox
          title={<Typography>Light mode</Typography>}
          checked={option === Options.light}
          onPress={() => setOption(Options.light)}
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
        <CheckBox
          title={<Typography>Dark side</Typography>}
          checked={option === Options.dark}
          onPress={() => setOption(Options.dark)}
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
      </Stack>
    </ThemedSceneLayout>
  );
};

export default SettingsScene;
