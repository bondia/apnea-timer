import React, { FC } from 'react';
import LongTouchButton from '../../../../components/LongTouchButton';
import { CronoActionsTypes, CronoStateType } from '../../../../modules/crono/redux/CronoTypes';
import { CronoModeEnum, TableTypeEnum } from '../../../../modules/editor/enums';
import * as SC from './ActionButtonsSet.styled';
import useButtonsHandling from './useButtonsHandling';

type CronoButtonSetProps = {
  crono: CronoStateType;
  cronoActions: CronoActionsTypes;
};

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
      {clock < 0 && TableTypeEnum.TABLE_TYPE_ENDURANCE !== tableType && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Auto" onPressStart={handleStartAuto} />
        </SC.ButtonWrapper>
      )}

      {clock < 0 && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Coach" onPressStart={handleStartCoach} />
        </SC.ButtonWrapper>
      )}

      {clock >= 0 && CronoModeEnum.CRONO_MODE_FINISHED !== tableMode && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Skip" onPressStart={handleSkip} />
        </SC.ButtonWrapper>
      )}

      {clock >= 0 && canTrackContractions() && (
        <SC.ButtonWrapper>
          <LongTouchButton title="1st Cont" onPressStart={handleContraction} />
        </SC.ButtonWrapper>
      )}

      {CronoModeEnum.CRONO_MODE_FINISHED === tableMode && (
        <SC.ButtonWrapper>
          <LongTouchButton title="Finish" onPressStart={handleFinish} />
        </SC.ButtonWrapper>
      )}
    </SC.ButtonSetWrapper>
  );
};

export default CronoButtonSet;
