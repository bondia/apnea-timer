import React, { FC, useMemo } from 'react';
import { FONT_COLOR_LIGHT } from '../../../../commonStyles';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
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
  const contractionsText = useMemo(() => secondsToTimeString(contraction), [contraction]);
  if (contraction <= 0) {
    return null;
  }
  return (
    <Typography type={TypographyType.CAPTION} color={FONT_COLOR_LIGHT} centered>
      {contractionsText}
    </Typography>
  );
};

export default SetContractions;
