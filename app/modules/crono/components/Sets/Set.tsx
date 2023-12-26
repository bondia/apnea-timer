import React, { FC, useMemo } from 'react';
import { round } from 'lodash';
import { SetModeEnum, SetTypeEnum } from '../../../editor/enums';
import { CronoSetType } from '../../cronoTypes';
import generateTimestamp from '../../../../utils/time/generateTimestamp';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import * as SC from './Sets.styled';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { SURFACE_COLORS } from '../../../../darkTheme';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY, FONT_COLOR_LIGHT } from '../../../../commonStyles';

type SetProps = {
  set: CronoSetType;
  accent?: boolean;
};

const Set: FC<SetProps> = props => {
  const {
    set: {
      type,
      pos,
      running: { mode, countdown, contraction, startTimestamp, endTimestamp },
    },
    accent,
  } = props;
  console.info(accent);

  const currentTimestamp = generateTimestamp();

  const isRunning = SetModeEnum.SET_MODE_RUNNING === mode;
  const active = isRunning || mode === SetModeEnum.SET_MODE_INITIAL;
  const ended = active ? currentTimestamp : endTimestamp;
  const started = startTimestamp || 0;
  const duration = countdown;

  const spent = useMemo(() => (started > 0 && ended > 0 ? round((ended - started) / 1000, 2) : 0), [ended, started]);
  const spentText = useMemo(() => secondsToTimeString(spent), [spent]);
  const durationText = useMemo(() => secondsToTimeString(duration), [duration]);
  const contractionsText = useMemo(() => secondsToTimeString(contraction), [contraction]);

  const mainColor = type === SetTypeEnum.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
  const durationTextColor = active ? mainColor : FONT_COLOR_GREY;
  const spentTextColor = !active ? mainColor : FONT_COLOR_LIGHT;

  return (
    <>
      <SC.SetNumber>
        <Typography color={SURFACE_COLORS.ELEVATION_00}>{pos + 1}</Typography>
      </SC.SetNumber>

      <Typography type={TypographyType.H6} color={durationTextColor} centered>
        {durationText}
      </Typography>

      {spent > 0 && (
        <Typography color={spentTextColor} centered>
          {spentText}
        </Typography>
      )}

      {contraction > 0 && (
        <Typography color={FONT_COLOR_LIGHT} centered>
          {contractionsText}
        </Typography>
      )}
    </>
  );
};

export default Set;
