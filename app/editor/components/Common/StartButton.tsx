import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import styled from 'styled-components/native';
import LongTouchButton from '../../../common/components/LongTouchButton';
import { Routes } from '../../../main/types/Routes';
import { ImmutableJSEditorStateType } from '../../redux/editorTypes';

const ButtonContainer = styled.View`
  flex-direction: row;
`;
interface StartButtonProps {
  data: ImmutableJSEditorStateType;
}

const StartButton: FC<StartButtonProps> = props => {
  const { data } = props;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <ButtonContainer>
      <LongTouchButton
        title="Start"
        onPressStart={() => navigation.push(Routes.CRONO_SCENE, { initialData: data.toJS() })}
      />
    </ButtonContainer>
  );
};

export default StartButton;
