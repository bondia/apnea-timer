import { format } from 'date-fns';
import { addMilliseconds } from 'date-fns/fp';
import { now } from 'lodash';
import React, { FC } from 'react';
import useAppTheme from '../../hooks/useAppTheme';
import { CronoStateType } from '../../modules/crono/cronoTypes';
import InfoBlock from '../InfoBlock/InfoBlock';
import { TypographyType } from '../Typography/Typography';

type ETAProps = {
  crono: CronoStateType;
};

const ETA: FC<ETAProps> = ({
  crono: {
    running: { countdown: totalTime = 0 },
  },
}) => {
  const { colors } = useAppTheme();
  const date = addMilliseconds(now(), totalTime * 1000);
  return (
    <InfoBlock
      label="ETA"
      content={format(date, 'HH:mm:ss')}
      labelColor={colors.primary050}
      labelType={TypographyType.SUBTITLE_2}
      contentColor={colors.primary100}
      contentType={TypographyType.H6}
    />
  );
};

export default ETA;
