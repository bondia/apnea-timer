import React, { FC, useCallback } from 'react';

import { RoutesEnum } from '../../../../Routes';
import { Spacer, Stack } from '../../../../components/Layout';
import LongTouchButton from '../../../../components/LongTouchButton';
import useAppNavitation from '../../../../useAppNavigation';
import { EditorStateType } from '../../editorTypes';

type CronoStartButtonProps = {
  data: EditorStateType;
};

const CronoStartButton: FC<CronoStartButtonProps> = props => {
  const { data } = props;
  const navigation = useAppNavitation();

  const onPressStart = useCallback(() => {
    navigation.push(RoutesEnum.CRONO_SCENE, { initialData: data });
  }, [data, navigation]);

  return (
    <Spacer top={2} xAxis={2}>
      <Stack grow={0} shrink={0} basis="auto" horizontal>
        <LongTouchButton title="Start" onPressStart={onPressStart} />
      </Stack>
    </Spacer>
  );
};

export default CronoStartButton;
