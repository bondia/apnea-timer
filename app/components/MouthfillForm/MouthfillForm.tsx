import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import useMouthfill from '../../hooks/useMouthfill';
import { Spacer, Stack } from '../Flow';
import NumericInput from '../Forms/NumericInput';
import Typography, { TypographyType } from '../Typography/Typography';

const MouthfillForm: FC = () => {
  const { colors } = useAppTheme();
  const {
    testPerformed,
    setTestPerformed,
    testFailed,
    setTestFailed,
    performed,
    setPerformed,
    maxDepth,
  } = useMouthfill();
  return (
    <Stack spaceAround grow={1}>
      <Typography type={TypographyType.H1} color={colors.primary900} centered>
        {maxDepth} m
      </Typography>

      <Spacer xAxis={4}>
        <NumericInput
          headline="Test Mouthfill"
          decrease={() => setTestPerformed(testPerformed - 1)}
          decreaseInterval={() => setTestPerformed(testPerformed - 5)}
          increase={() => setTestPerformed(testPerformed + 1)}
          increaseInterval={() => setTestPerformed(testPerformed + 5)}
        >
          <Typography
            type={TypographyType.H3}
            color={colors.inverted900}
            centered
          >
            {testPerformed} m
          </Typography>
        </NumericInput>

        <Spacer spacing={6} />

        <NumericInput
          headline="Failure Depth"
          decrease={() => setTestFailed(testFailed - 1)}
          decreaseInterval={() => setTestFailed(testFailed - 5)}
          increase={() => setTestFailed(testFailed + 1)}
          increaseInterval={() => setTestFailed(testFailed + 5)}
        >
          <Typography
            type={TypographyType.H3}
            color={colors.inverted900}
            centered
          >
            {testFailed} m
          </Typography>
        </NumericInput>

        <Spacer spacing={6} />

        <NumericInput
          headline="Mouthfill"
          decrease={() => setPerformed(performed - 1)}
          decreaseInterval={() => setPerformed(performed - 5)}
          increase={() => setPerformed(performed + 1)}
          increaseInterval={() => setPerformed(performed + 5)}
        >
          <Typography
            type={TypographyType.H3}
            color={colors.inverted900}
            centered
          >
            {performed} m
          </Typography>
        </NumericInput>
      </Spacer>
    </Stack>
  );
};

export default MouthfillForm;
