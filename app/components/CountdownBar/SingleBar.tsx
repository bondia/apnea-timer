import React, { FC } from 'react';
import { CronoSetType } from '../../crono/redux/CronoTypes';
import * as SC from './Bar.styled';

export interface SingleBarProps {
  set: CronoSetType;
}

const SingleBar: FC<SingleBarProps> = props => {
  const { set } = props;
  return (
    <SC.SingleBarOuter>
      <SC.SingleBarInner set={set} />
    </SC.SingleBarOuter>
  );
};

export default SingleBar;
