import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import useCronoSetCalculations from '../../hooks/useCronoSetCalculations';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import InfoBlock from '../InfoBlock/InfoBlock';
import { TypographyType } from '../Typography/Typography';

type CountupProps = {
  set: CronoSetType;
};

const Countup: FC<CountupProps> = ({ set }) => {
  const { colors } = useAppTheme();
  const {
    countupText,
    status: { isDiving },
  } = useCronoSetCalculations(set);
  return (
    <InfoBlock
      label={isDiving ? 'Hold' : 'Recover'}
      contentString={countupText}
      labelColor={isDiving ? colors.secondary050 : colors.primary050}
      labelType={TypographyType.SUBTITLE_2}
      contentColor={isDiving ? colors.secondary050 : colors.primary050}
      contentType={TypographyType.H6}
    />
  );
};

export default Countup;
