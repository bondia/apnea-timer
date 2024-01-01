import React, { FC } from 'react';
import { FONT_COLOR_LIGHT } from '../../../../commonStyles';
import { Col, Grid, Row } from '../../../../components/Grid';
import { Stack } from '../../../../components/Layout';
import List, { Item } from '../../../../components/List';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { CronoSetListType, CronoSetType } from '../../cronoTypes';
import Set from './Set';

type SetsProps = {
  sets: CronoSetListType;
  active?: CronoSetType;
};

const Sets: FC<SetsProps> = ({ sets, active }) => {
  const pos = active?.pos === undefined ? -1 : active?.pos;
  const siblingPos = pos % 2 === 0 ? pos + 1 : pos - 1;
  return (
    <Grid>
      <Row>
        <Col>
          <Typography type={TypographyType.SUBTITLE_2} color={FONT_COLOR_LIGHT} centered>
            Breath up
          </Typography>
        </Col>
        <Col>
          <Typography type={TypographyType.SUBTITLE_2} color={FONT_COLOR_LIGHT} centered>
            Hold
          </Typography>
        </Col>
      </Row>
      <Row>
        <Stack>
          <List>
            {sets.map((set: CronoSetType) => (
              <Item key={set.pos} active={set.pos === pos}>
                <Set set={set} accent={set.pos === pos || set.pos === siblingPos} />
              </Item>
            ))}
          </List>
        </Stack>
      </Row>
    </Grid>
  );
};

export default Sets;
