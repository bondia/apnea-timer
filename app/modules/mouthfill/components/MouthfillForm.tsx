import React, { FC } from 'react';
import { COLOR_GREEN_NORMAL, FONT_COLOR_GREY } from '../../../commonStyles';
import NumericInput from '../../../components/Forms/NumericInput';
import { Spacer } from '../../../components/Layout';
import Typography, { TypographyType } from '../../../components/Typography/Typography';
import useMouthfill from '../hooks/useMouthfill';

const MouthfillForm: FC = () => {
  const { testPerformed, setTestPerformed, testFailed, setTestFailed, performed, setPerformed, maxDepth } =
    useMouthfill();
  return (
    <Spacer spacing={1}>
      <Typography type={TypographyType.H1} color={COLOR_GREEN_NORMAL} centered>
        {maxDepth}m
      </Typography>

      <NumericInput
        headline="Test Mouthfill"
        decrease={() => setTestPerformed(testPerformed - 1)}
        decreaseInterval={() => setTestPerformed(testPerformed - 5)}
        increase={() => setTestPerformed(testPerformed + 1)}
        increaseInterval={() => setTestPerformed(testPerformed + 5)}
      >
        <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
          {testPerformed}m
        </Typography>
      </NumericInput>

      <NumericInput
        headline="Failure Depth"
        decrease={() => setTestFailed(testFailed - 1)}
        decreaseInterval={() => setTestFailed(testFailed - 5)}
        increase={() => setTestFailed(testFailed + 1)}
        increaseInterval={() => setTestFailed(testFailed + 5)}
      >
        <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
          {testFailed}m
        </Typography>
      </NumericInput>

      <NumericInput
        headline="Mouthfill"
        decrease={() => setPerformed(performed - 1)}
        decreaseInterval={() => setPerformed(performed - 5)}
        increase={() => setPerformed(performed + 1)}
        increaseInterval={() => setPerformed(performed + 5)}
      >
        <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
          {performed}m
        </Typography>
      </NumericInput>
    </Spacer>
  );
};

export default MouthfillForm;
