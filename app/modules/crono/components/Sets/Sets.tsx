import React, { FC } from 'react';
import List, { Item } from '../../../../components/List';
import { CronoSetListType, CronoSetType } from '../../cronoTypes';
import Set from './Set';
import * as SC from './Sets.styled';

type SetsProps = {
  sets: CronoSetListType;
  active: CronoSetType;
};

const Sets: FC<SetsProps> = ({ sets, active }) => {
  const pos = active?.pos || -1;
  const siblingPos = pos % 2 === 0 ? pos + 1 : pos - 1;
  return (
    <SC.Sets>
      <List>
        {sets.map((set: CronoSetType) => (
          <Item key={set.pos} active={set.pos === pos}>
            <Set set={set} accent={set.pos === pos || set.pos === siblingPos} />
          </Item>
        ))}
      </List>
    </SC.Sets>
  );
};

export default Sets;
