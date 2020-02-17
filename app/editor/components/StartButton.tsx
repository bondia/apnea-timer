import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Actions } from 'react-native-router-flux';

import { routesEnum } from '../../main/enums/routes';

import * as SC from './StartButton.styled';
import LongTouchButton from '../../common/components/LongTouchButton';

interface StartButtonProps {
    data: object;
}

export default function StartButton(props: StartButtonProps): JSX.Element {
    const { data } = props;
    return (
        <SC.Container>
            <LongTouchButton
                title="Start"
                onPressStart={() =>
                    Actions[routesEnum.CRONO_SCENE]({ crono: data })
                }
                fullwidth
            />
        </SC.Container>
    );
}

