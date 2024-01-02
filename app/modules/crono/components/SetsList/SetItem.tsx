import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Stack } from '../../../../components/Flow';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../themes/useAppTheme';
import { CronoSetType } from '../../cronoTypes';
import useSetCalculations from '../../hooks/useSetCalculations';

export const SetNumber = styled.View`
  position: absolute;
  right: -2px;
  bottom: -5px;
`;

type SetItemProps = {
  set: CronoSetType;
  accent?: boolean;
};

const SetItem: FC<SetItemProps> = ({ set, accent }) => {
  const { oldColors } = useAppTheme();
  const {
    position,
    durationText,
    spentText,
    status: { isDiving, isFinished },
  } = useSetCalculations(set);

  const color = isDiving ? oldColors.COLOR_RED_NORMAL : oldColors.COLOR_GREEN_NORMAL;

  return (
    <Stack spaceX={2} spaceY={2}>
      <SetNumber>
        <Typography type={TypographyType.CAPTION} color={oldColors.FONT_COLOR_GREY}>
          {position}
        </Typography>
      </SetNumber>

      {/* Main info (Countdown / Duration) */}
      {!isFinished || accent ? (
        <Typography type={accent ? TypographyType.H3 : TypographyType.BODY_1} color={color} centered>
          {durationText}
        </Typography>
      ) : null}

      {!accent && isFinished ? (
        <Typography type={accent ? TypographyType.H3 : TypographyType.BODY_1} color={color} centered>
          {spentText}
        </Typography>
      ) : null}

      {accent ? (
        <Typography type={TypographyType.BODY_1} color={oldColors.FONT_COLOR_LIGHT} centered>
          {spentText}
        </Typography>
      ) : null}

      {/* <SetContractions set={set} /> */}
    </Stack>
  );
};

export default SetItem;
