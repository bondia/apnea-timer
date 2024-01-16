import React, { FC } from 'react';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import useSetCalculations from '../../modules/crono/hooks/useSetCalculations';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import InfoBlock from '../InfoBlock/InfoBlock';
import { TypographyType } from '../Typography/Typography';

type CountdownProps = {
  set: CronoSetType;
};

const Countdown: FC<CountdownProps> = ({ set }) => {
  const { colors } = useAppTheme();
  const { durationText } = useSetCalculations(set);
  return (
    <InfoBlock
      label="Countdown"
      contentString={durationText}
      labelColor={colors.primary050}
      labelType={TypographyType.H4}
      contentColor={colors.primary900}
      contentType={TypographyType.H1}
    />
  );
};

export default Countdown;
