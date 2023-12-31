import React, { FC } from 'react';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_LIGHT } from '../../../../commonStyles';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { SURFACE_COLORS } from '../../../../darkTheme';
import { CronoSetType } from '../../cronoTypes';
import useSetCalculations from '../../hooks/useSetCalculations';
import * as SC from './Sets.styled';

type SetProps = {
  set: CronoSetType;
  accent?: boolean;
};

const Set: FC<SetProps> = ({ set, accent }) => {
  const {
    position,
    durationText,
    spentText,
    status: { isDiving, isRunning, isFinished },
  } = useSetCalculations(set);

  const color = isDiving ? COLOR_RED_NORMAL : COLOR_GREEN_NORMAL;

  return (
    <SC.Set>
      <SC.SetNumber>
        <Typography color={SURFACE_COLORS.ELEVATION_00}>{position}</Typography>
      </SC.SetNumber>

      {/* Main info (Countdown / Duration) */}
      <Typography type={accent ? TypographyType.H3 : TypographyType.H5} color={color} centered>
        {isRunning || !isFinished ? durationText : spentText}
      </Typography>

      {accent && !isFinished ? (
        <Typography type={TypographyType.BODY_2} color={FONT_COLOR_LIGHT} centered>
          {spentText}
        </Typography>
      ) : null}

      {/* <SetContractions set={set} /> */}
    </SC.Set>
  );
};

export default Set;
