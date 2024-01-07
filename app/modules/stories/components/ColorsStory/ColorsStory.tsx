import React, { FC, useState } from 'react';
import { Spacer, Stack } from '../../../../components/Flow';
import RadioButton from '../../../../components/Forms/RadioButton';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import AppThemeProvider from '../../../../providers/AppThemeProvider/AppThemeProvider';
import SurfacesDemo from '../SurfacesDemo';
import ColorBlock from './ColorBlock';
import SingleColor from './SingleColor';

const ColorsStory: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  return (
    <AppThemeProvider isDarkTheme={isDarkTheme}>
      <Typography type={TypographyType.H3}>Colors</Typography>

      <Spacer top={4} bottom={8}>
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

      <ColorBlock title="Primary" colorName="primary" />

      <ColorBlock title="Secondary" colorName="secondary" />

      <ColorBlock title="Inverted" colorName="inverted" />

      <Typography type={TypographyType.H4}>Error</Typography>
      <Stack grow={1} spaceTop={4} spaceBottom={8}>
        <SurfacesDemo>
          <SingleColor name="error" />
        </SurfacesDemo>
      </Stack>
    </AppThemeProvider>
  );
};

export default ColorsStory;
