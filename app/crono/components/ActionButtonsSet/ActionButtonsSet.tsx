import React, { FC } from 'react';
import LongTouchButton from '../../../common/components/LongTouchButton';
import { CronoMode, TableType } from '../../../editor/enums';
import { CronoActionsTypes, ImmutableJSCronoType } from '../../redux/cronoTypes';
import * as SC from './ActionButtonsSet.styled';
import useButtonsHandling from './useButtonsHandling';

interface CronoButtonSetProps {
  crono: ImmutableJSCronoType;
  cronoActions: CronoActionsTypes;
}

const CronoButtonSet: FC<CronoButtonSetProps> = props => {
  const { crono, cronoActions } = props;

  const {
    clock,
    tableType,
    tableMode,
    canTrackContractions,
    handleStartAuto,
    handleStartCoach,
    handleSkip,
    handleContraction,
    handleFinish,
  } = useButtonsHandling({ crono, cronoActions });

  return (
    <SC.ButtonSetWrapper>
      {clock < 0 && TableType.TABLE_TYPE_ENDURANCE !== tableType && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Auto" onPressStart={handleStartAuto} />
        </SC.ButtonWrapper>
      )}

      {clock < 0 && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Coach" onPressStart={handleStartCoach} />
        </SC.ButtonWrapper>
      )}

      {clock >= 0 && CronoMode.CRONO_MODE_FINISHED !== tableMode && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Skip" onPressStart={handleSkip} />
        </SC.ButtonWrapper>
      )}

      {clock >= 0 && canTrackContractions() && (
        <SC.ButtonWrapper>
          <LongTouchButton title="1st Cont" onPressStart={handleContraction} />
        </SC.ButtonWrapper>
      )}

      {CronoMode.CRONO_MODE_FINISHED === tableMode && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Finish" onPressStart={handleFinish} />
        </SC.ButtonWrapper>
      )}
    </SC.ButtonSetWrapper>
  );
};

export default CronoButtonSet;
