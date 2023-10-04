import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import styled from 'styled-components/native';
import { ImmutableJSEditorStateType } from '../../editor/redux/editorTypes';
import { RootStackParamList, Routes } from '../../routes/Routes';
import LongTouchButton from '../LongTouchButton';

const ButtonContainer = styled.View`
  flex-direction: row;
`;

type CronoStartButtonProps = {
  data: ImmutableJSEditorStateType;
};

const CronoStartButton: FC<CronoStartButtonProps> = props => {
  const { data } = props;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressStart = useCallback(() => {
    const initialData = data.toJS();
    navigation.push(Routes.CRONO_SCENE, { initialData });
  }, [data, navigation]);

  return (
    <ButtonContainer>
      <LongTouchButton title="Start" onPressStart={onPressStart} />
    </ButtonContainer>
  );
};

export default CronoStartButton;
