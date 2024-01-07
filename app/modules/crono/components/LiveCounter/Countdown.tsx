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
  const { duration } = useSetCalculations(set);
  return (
    <InfoBlock
      label="Countdown"
      content={duration}
      isTimestamp
      labelColor={colors.primary050}
      labelType={TypographyType.H5}
      contentColor={colors.primary900}
      contentType={TypographyType.H2}
    />
  );
};

export default Countdown;
