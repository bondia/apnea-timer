import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { round } from 'lodash';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY, FONT_COLOR_LIGHT, FONT_SIZE } from '../../commonStyles';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import { SetModeEnum, SetTypeEnum } from '../../modules/editor/enums';
import generateTimestamp from '../../utils/time/generateTimestamp';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import TextComponent from '../TextComponent/TextComponent';
import * as SC from './SetsList.styled';
import { SURFACE_COLORS } from '../../darkTheme';

// TODO: Migrate to styled components
const getSetItemStyles = (type: SetTypeEnum, active: boolean) => {
  const mainColor = type === SetTypeEnum.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
  return StyleSheet.create({
    setNumber: {
      color: SURFACE_COLORS.ELEVATION_00,
      position: 'absolute',
      left: 5,
      top: 5,
      fontSize: FONT_SIZE.FONT_SIZE_S,
    },
    clock: {
      color: active ? mainColor : FONT_COLOR_GREY,
      fontSize: FONT_SIZE.FONT_SIZE_M,
      lineHeight: FONT_SIZE.FONT_SIZE_M + 4,
      textAlign: 'center',
    },
    result: {
      color: !active ? mainColor : FONT_COLOR_LIGHT,
      fontSize: FONT_SIZE.FONT_SIZE_S,
      lineHeight: FONT_SIZE.FONT_SIZE_S + 4,
      textAlign: 'center',
    },
    contraction: {
      color: FONT_COLOR_LIGHT,
      fontSize: FONT_SIZE.FONT_SIZE_XS,
      lineHeight: FONT_SIZE.FONT_SIZE_XS + 4,
      textAlign: 'center',
    },
  });
};

type Props = {
  set: CronoSetType;
};

const SetItemCrono: FC<Props> = props => {
  const {
    set: {
      type,
      pos,
      running: { mode, countdown, contraction, startTimestamp, endTimestamp },
    },
  } = props;

  const currentTimestamp = generateTimestamp();

  const isRunning = SetModeEnum.SET_MODE_RUNNING === mode;
  const active = isRunning || mode === SetModeEnum.SET_MODE_INITIAL;
  const ended = active ? currentTimestamp : endTimestamp;
  const started = startTimestamp || 0;
  const duration = countdown;

  const styles = getSetItemStyles(type, active);
  const spent = useMemo(() => (started > 0 && ended > 0 ? round((ended - started) / 1000, 2) : 0), [ended, started]);
  const spentText = useMemo(() => secondsToTimeString(spent), [spent]);
  const durationText = useMemo(() => secondsToTimeString(duration), [duration]);
  const contractionsText = useMemo(() => secondsToTimeString(contraction), [contraction]);

  return (
    <SC.GridItem>
      <SC.Set isRunning={isRunning}>
        <TextComponent style={styles.setNumber}>{pos + 1}</TextComponent>
        <TextComponent style={styles.clock}>{durationText}</TextComponent>
        {spent > 0 && <TextComponent style={styles.result}>{spentText}</TextComponent>}
        {contraction > 0 && <TextComponent style={styles.contraction}>{contractionsText}</TextComponent>}
      </SC.Set>
    </SC.GridItem>
  );
};

export default SetItemCrono;
