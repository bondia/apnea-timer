import React, { FC } from 'react';
import { CronoSetType } from '../../modules/crono/redux/CronoTypes';
import * as SC from './Bar.styled';

export type SingleBarProps = {
  set: CronoSetType;
};

const SingleBar: FC<SingleBarProps> = ({ set }) => (
  <SC.SingleBarOuter>
    <SC.SingleBarInner set={set} />
  </SC.SingleBarOuter>
);

export default SingleBar;
