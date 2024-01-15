import React, { FC } from 'react';
import InfoBlock from '../../../../components/InfoBlock/InfoBlock';
import { TypographyType } from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';
import { CronoSetType } from '../../cronoTypes';
import useSetCalculations from '../../hooks/useSetCalculations';

type CountupProps = {
  set: CronoSetType;
};

const Countup: FC<CountupProps> = ({ set }) => {
  const { colors } = useAppTheme();
  const {
    spentText,
    status: { isDiving },
  } = useSetCalculations(set);
  return (
    <InfoBlock
      label={isDiving ? 'Hold' : 'Recover'}
      contentString={spentText}
      labelColor={isDiving ? colors.secondary050 : colors.primary050}
      labelType={TypographyType.SUBTITLE_2}
      contentColor={isDiving ? colors.secondary050 : colors.primary050}
      contentType={TypographyType.H6}
    />
  );
};

export default Countup;
