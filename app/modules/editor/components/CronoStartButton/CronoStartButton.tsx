import React, { FC, useCallback } from 'react';

import { RoutesEnum } from '../../../../Routes';
import { Stack } from '../../../../components/Layout';
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
    <Stack grow={0} shrink={0} basis="auto" horizontal spaceTop={2} spaceX={2}>
      <LongTouchButton title="Start" onPressStart={onPressStart} />
    </Stack>
  );
};

export default CronoStartButton;
