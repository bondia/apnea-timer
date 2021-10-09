import React from 'react';
import { SetMode } from '../../../editor/enums';
import { ImmutableJSSetType } from '../../redux/cronoTypes';
import Crono from './SetItemCrono';
import * as SC from './SetsList.styled';

interface SetItemProps {
  item: ImmutableJSSetType;
}

export default function SetItem(props: SetItemProps): JSX.Element {
  const { item } = props;
  const type = item.get('type');
  const mode = item.getIn(['running', 'mode']);
  const countdown = item.getIn(['running', 'countdown']);
  const contraction = item.getIn(['running', 'contraction']);
  return (
    <SC.SetItemWrapper>
      <Crono
        active={
          mode === SetMode.SET_MODE_RUNNING || mode === SetMode.SET_MODE_INITIAL
        }
        type={type}
        duration={countdown}
        contraction={contraction}
      />
    </SC.SetItemWrapper>
  );
}
