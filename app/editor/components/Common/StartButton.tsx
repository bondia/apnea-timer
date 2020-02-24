import React from 'react';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components/native';

import * as routesEnum from '../../../main/enums/routes';

import LongTouchButton from '../../../common/components/LongTouchButton';
import { ImmutableJSEditorStateType } from '../../redux/editorTypes';

interface StartButtonProps {
    data: ImmutableJSEditorStateType;
}

export default function StartButton(props: StartButtonProps): JSX.Element {
    const { data } = props;
    return (
        <ButtonContainer>
            <LongTouchButton
                title="Start"
                onPressStart={() =>
                    Actions[routesEnum.CRONO_SCENE]({ initialData: data.toJS() })
                }
            />
        </ButtonContainer>
    );
}

export const ButtonContainer = styled.View`
    flex-direction: row;
`;