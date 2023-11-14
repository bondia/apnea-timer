import React, { FC, useCallback } from 'react';
import styled from 'styled-components/native';
import { EditorStateType, ImmutableJSEditorStateType } from '../../modules/editor/editorTypes';
import { RoutesEnum } from '../../routes/Routes';
import LongTouchButton from '../LongTouchButton';
import useAppNavitation from '../../routes/useAppNavigation';

const ButtonContainer = styled.View`
  flex-direction: row;
`;

type CronoStartButtonProps = {
  data: ImmutableJSEditorStateType;
};

const CronoStartButton: FC<CronoStartButtonProps> = props => {
  const { data } = props;
  const navigation = useAppNavitation();

  const onPressStart = useCallback(() => {
    const initialData = data.toJS<EditorStateType>();
    navigation.push(RoutesEnum.CRONO_SCENE, { initialData });
  }, [data, navigation]);

  return (
    <ButtonContainer>
      <LongTouchButton title="Start" onPressStart={onPressStart} />
    </ButtonContainer>
  );
};

export default CronoStartButton;
