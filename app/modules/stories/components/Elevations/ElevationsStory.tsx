import React, { FC, useState } from 'react';
import { Spacer } from '../../../../components/Flow';
import RadioButton from '../../../../components/Forms/RadioButton';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import AppThemeProvider from '../../../../providers/AppThemeProvider/AppThemeProvider';
import ElevationsBlock from './ElevationsBlock';

const ElevationsStory: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  return (
    <AppThemeProvider isDarkTheme={isDarkTheme}>
      <Typography type={TypographyType.H3}>Elevations</Typography>

      <Spacer top={2} bottom={2}>
        <RadioButton
          title="Light"
          checked={!isDarkTheme}
          onPress={() => setIsDarkTheme(false)}
        />
        <RadioButton
          title="Dark side"
          checked={isDarkTheme}
          onPress={() => setIsDarkTheme(true)}
        />
      </Spacer>

      <ElevationsBlock />
    </AppThemeProvider>
  );
};

export default ElevationsStory;
