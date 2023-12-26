import React, { FC, useMemo } from 'react';
import { round } from 'lodash';
import { SetModeEnum } from '../../../editor/enums';
import { CronoSetType } from '../../cronoTypes';
import generateTimestamp from '../../../../utils/time/generateTimestamp';
import secondsToTimeString from '../../../../utils/time/secondsToTimeString';
import { getSetItemStyles } from './Sets.styled';
import TextComponent from '../../../../components/TextComponent/TextComponent';

type Props = {
  set: CronoSetType;
  accent?: boolean;
};

const Set: FC<Props> = props => {
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

  const styles = getSetItemStyles(type, active);
  const spent = useMemo(() => (started > 0 && ended > 0 ? round((ended - started) / 1000, 2) : 0), [ended, started]);
  const spentText = useMemo(() => secondsToTimeString(spent), [spent]);
  const durationText = useMemo(() => secondsToTimeString(duration), [duration]);
  const contractionsText = useMemo(() => secondsToTimeString(contraction), [contraction]);

  return (
    <>
      <TextComponent style={styles.setNumber}>{pos + 1}</TextComponent>
      <TextComponent style={styles.clock}>{durationText}</TextComponent>
      {spent > 0 && <TextComponent style={styles.result}>{spentText}</TextComponent>}
      {contraction > 0 && <TextComponent style={styles.contraction}>{contractionsText}</TextComponent>}
    </>
  );
};

export default Set;
