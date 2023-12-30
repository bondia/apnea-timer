import React, { FC } from 'react';
import { FONT_COLOR_GREY, FONT_COLOR_LIGHT } from '../../../../commonStyles';
import { Col, Grid } from '../../../../components/Grid';
import InfoTimeBlock from '../../../../components/InfoTimeBlock/InfoTimeBlock';
import { TableTypeEnum } from '../../../editor/enums';
import { CronoSetType, CronoStateType } from '../../cronoTypes';

import { TypographyType } from '../../../../components/Typography/Typography';
import * as SC from './LiveCounter.styled';

type LiveCounterProps = {
  crono: CronoStateType;
  set: CronoSetType;
};

const LiveCounter: FC<LiveCounterProps> = props => {
  const {
    crono: {
      trainingTable: { type: tableTypeEnum },
      running: { clock: spentTime, countdown: totalTime, contractions },
    },
    set,
  } = props;

  // set data
  const pos = set ? set.pos : 0;
  const currentSet = pos <= 1 ? 1 : pos / 2 + 1;
  const targeting = spentTime > 0 ? spentTime + totalTime : totalTime;

  return (
    <Grid>
      {/* STATIC */}
      {TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableTypeEnum && (
        <SC.LiveCounterRow>
          <Col>
            <InfoTimeBlock
              label="Time Left"
              labelColor={FONT_COLOR_GREY}
              labelType={TypographyType.SUBTITLE_1}
              timestamp={totalTime}
              contentColor={FONT_COLOR_LIGHT}
              contentType={TypographyType.H6}
            />
          </Col>

          <Col>
            <InfoTimeBlock
              label="Contractions"
              labelColor={FONT_COLOR_GREY}
              labelType={TypographyType.SUBTITLE_1}
              timestamp={contractions}
              contentColor={FONT_COLOR_LIGHT}
              contentType={TypographyType.H6}
            />
          </Col>
        </SC.LiveCounterRow>
      )}

      {/* ENDURANCE */}
      {/* TODO: CLEAN UP FOR ENDURANCE */}
      {TableTypeEnum.TABLE_TYPE_ENDURANCE === tableTypeEnum && (
        <SC.LiveCounterRow>
          <Col>
            <InfoTimeBlock
              label="Targeting"
              labelColor={FONT_COLOR_GREY}
              timestamp={targeting}
              contentColor={FONT_COLOR_LIGHT}
            />
          </Col>
          <Col>
            <InfoTimeBlock
              label="Spent Time"
              labelColor={FONT_COLOR_GREY}
              timestamp={spentTime > 0 ? spentTime : 0}
              contentColor={FONT_COLOR_LIGHT}
            />
          </Col>
          <Col>
            <InfoTimeBlock
              label="Current Dive"
              labelColor={FONT_COLOR_GREY}
              timestamp={currentSet}
              contentColor={FONT_COLOR_LIGHT}
            />
          </Col>
        </SC.LiveCounterRow>
      )}
    </Grid>
  );
};

export default LiveCounter;
