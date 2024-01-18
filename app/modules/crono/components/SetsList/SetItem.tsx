import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Stack } from '../../../../components/Flow';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../hooks/useAppTheme';
import useCronoSetCalculations from '../../../../hooks/useCronoSetCalculations';
import { CronoSetType } from '../../cronoTypes';

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
    countdownText,
    countupText,
    status: { isDiving, isFinished },
  } = useCronoSetCalculations(set);

  const recoverColor = accent ? primary500 : primary050;
  const divingColor = accent ? secondary500 : secondary050;
  const mainColor = isDiving ? divingColor : recoverColor;
  const lightColor = isDiving ? secondary050 : primary050;

  return (
    <Stack spaceY={2}>
      <Typography type={TypographyType.H6} color={mainColor} centered>
        {countdownText}
      </Typography>

      {accent || isFinished ? (
        <Typography type={TypographyType.BODY_2} color={lightColor} centered>
          {countupText}
        </Typography>
      ) : null}

      <SetNumber>
        <Typography type={TypographyType.CAPTION} color={primary050}>
          {position}
        </Typography>
      </SetNumber>
    </Stack>
  );
};

export default SetItem;
