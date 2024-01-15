import React, { FC } from 'react';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import { TypographyType } from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';
import { CronoSetType } from '../../cronoTypes';
import useSetCalculations from '../../hooks/useSetCalculations';

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
