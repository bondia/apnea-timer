import React, { FC, useCallback } from 'react';

import { RoutesEnum } from '../../../../Routes';
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

  return <LongTouchButton title="Start" onPressStart={onPressStart} />;
};

export default CronoStartButton;
