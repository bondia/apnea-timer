import React, { FC, useMemo } from 'react';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../themes/useAppTheme';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import { CronoSetType } from '../../cronoTypes';

type SetContractionsProps = {
  set: CronoSetType;
};

const SetContractions: FC<SetContractionsProps> = ({
  set: {
    running: { contraction },
  },
}) => {
  const { colors } = useAppTheme();
  const contractionsText = useMemo(() => secondsToTimeString(contraction), [contraction]);
  if (contraction <= 0) {
    return null;
  }
  return (
    <Typography type={TypographyType.CAPTION} color={colors.primary900} centered>
      {contractionsText}
    </Typography>
  );
};

export default SetContractions;
