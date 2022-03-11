import React, { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY } from '../../../commonStyles';
import TextComponent from '../../../components/TextComponent/TextComponent';
import { SetType } from '../../../editor/enums';
import secondsToTimeString from '../../../utils/time/secondsToTimeString';

const useStyles = (type: SetType, active: boolean) => {
  return useMemo(() => {
    const mainColor = type === SetType.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
    return StyleSheet.create({
      wrapper: {
        minHeight: 60,
      },
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

interface Props {
  active: boolean;
  duration: number;
  type: SetType;
  contraction: number;
  started: number;
  ended: number;
}

const SetItemCrono: FC<Props> = props => {
  const {
    active = true,
    duration = 0,
    type = SetType.SET_TYPE_PREPARE,
    contraction = -1,
    started = 0,
    ended = 0,
  } = props;

  const styles = useStyles(type, active);
  const spent = useMemo(() => (started > 0 && ended > 0 ? Math.round((ended - started) / 1000) : 0), [ended, started]);
  const spentCopy = useMemo(() => secondsToTimeString(spent), [spent]);
  const durationCopy = useMemo(() => secondsToTimeString(duration), [duration]);
  const contractionsCopy = useMemo(() => secondsToTimeString(contraction), [contraction]);

  return (
    <View style={styles.wrapper}>
      <TextComponent style={styles.clock}>{durationCopy}</TextComponent>
      {spent > 0 && <TextComponent style={styles.result}>{spentCopy}</TextComponent>}
      {contraction > 0 && <TextComponent style={styles.contraction}>{contractionsCopy}</TextComponent>}
    </View>
  );
};

export default SetItemCrono;
