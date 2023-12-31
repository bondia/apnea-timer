import React, { FC } from 'react';
import { COLOR_DARK, COLOR_GREEN_NORMAL, FONT_COLOR_GREY } from '../../../commonStyles';
import { Col, Grid, Row } from '../../../components/Grid';
import LongTouchButton from '../../../components/LongTouchButton';
import Typography, { TypographyType } from '../../../components/Typography/Typography';
import useMouthfill from '../hooks/useMouthfill';

const MouthfillForm: FC = () => {
  const { testPerformed, setTestPerformed, testFailed, setTestFailed, performed, setPerformed, maxDepth } =
    useMouthfill();
  return (
    <Grid>
      <Row>
        <Col>
          <Typography type={TypographyType.H1} color={COLOR_GREEN_NORMAL} centered>
            {maxDepth}m
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <Typography type={TypographyType.H5} color={COLOR_DARK}>
            Test Mouthfill
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <LongTouchButton
            title="-"
            onPressStart={() => setTestPerformed(testPerformed - 1)}
            onPressInterval={() => setTestPerformed(testPerformed - 5)}
          />
        </Col>
        <Col>
          <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
            {testPerformed}m
          </Typography>
        </Col>
        <Col>
          <LongTouchButton
            title="+"
            onPressStart={() => setTestPerformed(testPerformed + 1)}
            onPressInterval={() => setTestPerformed(testPerformed + 5)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Typography type={TypographyType.H5} color={COLOR_DARK}>
            Failure Depth
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <LongTouchButton
            title="-"
            onPressStart={() => setTestFailed(testFailed - 1)}
            onPressInterval={() => setTestFailed(testFailed - 5)}
          />
        </Col>
        <Col>
          <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
            {testFailed}m
          </Typography>
        </Col>
        <Col>
          <LongTouchButton
            title="+"
            onPressStart={() => setTestFailed(testFailed + 1)}
            onPressInterval={() => setTestFailed(testFailed + 5)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Typography type={TypographyType.H5} color={COLOR_DARK}>
            Mouthfill
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col>
          <LongTouchButton
            title="-"
            onPressStart={() => setPerformed(performed - 1)}
            onPressInterval={() => setPerformed(performed - 5)}
          />
        </Col>
        <Col>
          <Typography type={TypographyType.H3} color={FONT_COLOR_GREY} centered>
            {performed}m
          </Typography>
        </Col>
        <Col>
          <LongTouchButton
            title="+"
            onPressStart={() => setPerformed(performed + 1)}
            onPressInterval={() => setPerformed(performed + 5)}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default MouthfillForm;
