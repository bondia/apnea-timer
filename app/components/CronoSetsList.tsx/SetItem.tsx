import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY } from '../../commonStyles';
import { CronoSetType } from '../../crono/redux/CronoTypes';
import { SetMode, SetType } from '../../editor/enums';
import generateTimestamp from '../../utils/time/generateTimestamp';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import TextComponent from '../TextComponent/OldTextComponent';
import * as SC from './SetsList.styled';

// TODO: Migrate to styled components
const useStyles = (type: SetType, active: boolean) => {
  return useMemo(() => {
    const mainColor = type === SetType.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
    return StyleSheet.create({
      clock: {
        color: active ? mainColor : FONT_COLOR_GREY,
        fontSize: 22,
        lineHeight: 24,
        textAlign: 'center',
      },
      result: {
        color: !active ? mainColor : FONT_COLOR_GREY,
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
      },
      contraction: {
        color: FONT_COLOR_GREY,
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
      },
    });
  }, [active, type]);
};

type Props = {
  set: CronoSetType;
};

const SetItemCrono: FC<Props> = props => {
  const {
    set: {
      type,
      running: { mode, countdown, contraction, startTimestamp, endTimestamp },
    },
  } = props;

  const currentTimestamp = generateTimestamp();

  const active = mode === SetMode.SET_MODE_RUNNING || mode === SetMode.SET_MODE_INITIAL;
  const ended = active ? currentTimestamp : endTimestamp;
  const started = startTimestamp || 0;
  const duration = countdown;

  const isRunning = SetMode.SET_MODE_RUNNING === mode;

  const styles = useStyles(type, active);
  const spent = useMemo(() => (started > 0 && ended > 0 ? Math.round((ended - started) / 1000) : 0), [ended, started]);
  const spentCopy = useMemo(() => secondsToTimeString(spent), [spent]);
  const durationCopy = useMemo(() => secondsToTimeString(duration), [duration]);
  const contractionsCopy = useMemo(() => secondsToTimeString(contraction), [contraction]);

  return (
    <SC.GridItem>
      <SC.Set isRunning={isRunning}>
        <TextComponent style={styles.clock}>{durationCopy}</TextComponent>
        {spent > 0 && <TextComponent style={styles.result}>{spentCopy}</TextComponent>}
        {contraction > 0 && <TextComponent style={styles.contraction}>{contractionsCopy}</TextComponent>}
      </SC.Set>
    </SC.GridItem>
  );
};

export default SetItemCrono;
