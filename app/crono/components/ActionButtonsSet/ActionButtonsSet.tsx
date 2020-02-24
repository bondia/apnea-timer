import React from 'react';
import * as tableEnums from '../../../editor/enums';
import LongTouchButton from '../../../common/components/LongTouchButton';
import * as SC from './ActionButtonsSet.styled';
import { CronoActionsTypes, ImmutableJSCronoType } from '../../redux/cronoTypes';
import useButtonsHandling from './useButtonsHandling';

interface CronoButtonSetProps {
    crono: ImmutableJSCronoType;
    cronoActions: CronoActionsTypes;
}

export default function CronoButtonSet(props: CronoButtonSetProps): JSX.Element {
    const {
        crono,
        cronoActions
    } = props;

    const {
        clock,
        tableType,
        tableMode,
        canTrackContractions,
        handleStartAuto,
        handleStartCoach,
        handleSkip,
        handleContraction,
        handleFinish
    } = useButtonsHandling({ crono, cronoActions });

    return (
        <SC.ButtonSetWrapper>
            {clock < 0 && tableEnums.TABLE_TYPE_ENDURANCE !== tableType && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Auto"
                        onPressStart={handleStartAuto}
                        />
                </SC.ButtonWrapper>
            )}

            {clock < 0 && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Coach"
                        onPressStart={handleStartCoach}
                    />
                </SC.ButtonWrapper>
            )}

            {clock >= 0 && tableEnums.CRONO_MODE_FINISHED !== tableMode && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Skip"
                        onPressStart={handleSkip}
                    />
                </SC.ButtonWrapper>
            )}

            {clock >= 0 && canTrackContractions() && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="1st Cont"
                        onPressStart={handleContraction}
                    />
                </SC.ButtonWrapper>
            )}

            {tableEnums.CRONO_MODE_FINISHED === tableMode && (
                <SC.ButtonWrapper>
                    <LongTouchButton
                        title="Finish"
                        onPressStart={handleFinish}
                    />
                </SC.ButtonWrapper>
            )}
        </SC.ButtonSetWrapper>
    );
}