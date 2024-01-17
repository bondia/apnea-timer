import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import useCronoSetCalculations from '../../hooks/useCronoSetCalculations';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import InfoBlock from '../InfoBlock/InfoBlock';
import { TypographyType } from '../Typography/Typography';

type CountdownProps = {
  set: CronoSetType;
};

const Countdown: FC<CountdownProps> = ({ set }) => {
  const { colors } = useAppTheme();
  const { countdownText } = useCronoSetCalculations(set);
  return (
    <InfoBlock
      label="Countdown"
      contentString={countdownText}
      labelColor={colors.primary050}
      labelType={TypographyType.H4}
      contentColor={colors.primary900}
      contentType={TypographyType.H1}
    />
  );
};

export default Countdown;
