import React, { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import TextComponent from '../../../common/components/TextComponent';
import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL, FONT_COLOR_GREY } from '../../../common/styles/commonStyles';
import secondsToTimeString from '../../../common/utils/time/secondsToTimeString';
import { SetType } from '../../../editor/enums';

const useStyles = (type: SetType, active: boolean) => {
  const mainColor = useMemo(() => (type === SetType.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL), [type]);
  return useMemo(() => {
    return StyleSheet.create({
      clock: {
        color: active ? mainColor : FONT_COLOR_GREY,
        fontSize: 25,
        lineHeight: 28,
        textAlign: 'center',
      },
      result: {
        color: !active ? mainColor : FONT_COLOR_GREY,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
      },
      contraction: {
        color: FONT_COLOR_GREY,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
      },
    });
  }, [active, mainColor]);
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
    <View>
      <TextComponent style={styles.clock}>{durationCopy}</TextComponent>
      {spent > 0 && <TextComponent style={styles.result}>{spentCopy}</TextComponent>}
      {contraction > 0 && <TextComponent style={styles.contraction}>{contractionsCopy}</TextComponent>}
    </View>
  );
};

export default SetItemCrono;
