import React, { FC, useCallback } from 'react';
import styled from 'styled-components/native';

import { EditorStateType } from '../../modules/editor/editorTypes';
import { RoutesEnum } from '../../routes/Routes';
import LongTouchButton from '../LongTouchButton';
import useAppNavitation from '../../routes/useAppNavigation';

const ButtonContainer = styled.View`
  flex-direction: row;
`;

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
    <ButtonContainer>
      <LongTouchButton title="Start" onPressStart={onPressStart} />
    </ButtonContainer>
  );
};

export default CronoStartButton;
