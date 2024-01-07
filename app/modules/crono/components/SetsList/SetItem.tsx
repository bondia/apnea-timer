import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Stack } from '../../../../components/Flow';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../providers/AppThemeProvider/useAppTheme';
import { CronoSetType } from '../../cronoTypes';
import useSetCalculations from '../../hooks/useSetCalculations';

export const SetNumber = styled.View`
  position: absolute;
  right: 4px;
  bottom: -4px;
`;

type SetItemProps = {
  set: CronoSetType;
  accent?: boolean;
};

const SetItem: FC<SetItemProps> = ({ set, accent }) => {
  const {
    colors: { primary500, primary050, secondary500, secondary050 },
  } = useAppTheme();

  const {
    position,
    durationText,
    spentText,
    status: { isDiving, isFinished },
  } = useSetCalculations(set);

  const recoverColor = accent ? primary500 : primary050;
  const divingColor = accent ? secondary500 : secondary050;
  const mainColor = isDiving ? divingColor : recoverColor;
  const lightColor = isDiving ? secondary050 : primary050;

  return (
    <Stack spaceY={2}>
      <SetNumber>
        <Typography type={TypographyType.CAPTION} color={primary050}>
          {position}
        </Typography>
      </SetNumber>

      {/* Main info (Countdown / Duration) */}
      {!isFinished || accent ? (
        <Typography
          type={accent ? TypographyType.H3 : TypographyType.H4}
          color={mainColor}
          centered
        >
          {durationText}
        </Typography>
      ) : null}

      {!accent && isFinished ? (
        <Typography
          type={accent ? TypographyType.H3 : TypographyType.BODY_1}
          color={lightColor}
          centered
        >
          {spentText}
        </Typography>
      ) : null}

      {accent ? (
        <Typography type={TypographyType.BODY_1} color={lightColor} centered>
          {spentText}
        </Typography>
      ) : null}
    </Stack>
  );
};

export default SetItem;
