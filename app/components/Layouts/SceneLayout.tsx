import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import { Stack } from '../Flow';

type SafeAreaViewProps = {
  backgroundColor?: string;
};

const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SceneLayout: FC<PropsWithChildren> = ({ children }) => {
  const {
    elevations: { ELEVATION_16 },
  } = useAppTheme();
  return (
    <SafeAreaView backgroundColor={ELEVATION_16}>
      <Stack grow={1} fullWidth>
        {children}
      </Stack>
    </SafeAreaView>
  );
};

export default SceneLayout;
