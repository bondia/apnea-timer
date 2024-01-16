import React, { FC } from 'react';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import useSetCalculations from '../../modules/crono/hooks/useSetCalculations';
import useAppTheme from '../../providers/AppThemeProvider/useAppTheme';
import InfoBlock from '../InfoBlock/InfoBlock';
import { TypographyType } from '../Typography/Typography';

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
