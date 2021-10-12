import React, { FC } from 'react';
import generateTimestamp from '../../../common/utils/time/generateTimestamp';
import { SetMode } from '../../../editor/enums';
import { ImmutableJSSetType } from '../../redux/cronoTypes';
import Crono from './SetItemCrono';
import * as SC from './SetsList.styled';

interface Props {
  item: ImmutableJSSetType;
}

const SetItem: FC<Props> = props => {
  const { item } = props;
  const type = item.get('type');
  const mode = item.getIn(['running', 'mode']);
  const countdown = item.getIn(['running', 'countdown']);
  const contraction = item.getIn(['running', 'contraction']);
  const active = mode === SetMode.SET_MODE_RUNNING || mode === SetMode.SET_MODE_INITIAL;
  const currentTimestamp = generateTimestamp();
  const startTimestamp = item.getIn(['running', 'startTimestamp']);
  const endTimestamp = item.getIn(['running', 'endTimestamp']);
  const ended = active ? currentTimestamp : endTimestamp;
  return (
    <SC.SetItemWrapper>
      <Crono
        active={active}
        type={type}
        duration={countdown}
        contraction={contraction}
        started={startTimestamp || 0}
        ended={ended || 0}
      />
    </SC.SetItemWrapper>
  );
};

export default SetItem;
