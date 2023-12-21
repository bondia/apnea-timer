import React, { FC } from 'react';
import { CronoSetListType, CronoSetType } from '../../cronoTypes';
import Set from './Set';
import List from '../../../../components/List';
import * as SC from './Sets.styled';

type SetsProps = {
  sets: CronoSetListType;
};

const Sets: FC<SetsProps> = ({ sets }) => {
  return (
    <SC.Sets>
      <List>
        {sets.map((set: CronoSetType) => (
          <Set key={set.pos} set={set} />
        ))}
      </List>
    </SC.Sets>
  );
};

export default Sets;
