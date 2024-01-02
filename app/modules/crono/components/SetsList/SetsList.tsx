import React, { FC } from 'react';
import { FONT_COLOR_LIGHT } from '../../../../commonStyles';
import { Stack } from '../../../../components/Flow';
import List, { Item } from '../../../../components/List';
import Typography, { TypographyType } from '../../../../components/Typography/Typography';
import { CronoSetListType, CronoSetType } from '../../cronoTypes';
import Set from './SetItem';

type SetsListProps = {
  sets: CronoSetListType;
  active?: CronoSetType;
};

const SetsList: FC<SetsListProps> = ({ sets, active }) => {
  const pos = active?.pos === undefined ? -1 : active?.pos;
  const siblingPos = pos % 2 === 0 ? pos + 1 : pos - 1;
  return (
    <>
      <Stack grow={0} basis="auto" spaceAround horizontal spaceTop={4} spaceBottom={3}>
        <Typography type={TypographyType.H5} color={FONT_COLOR_LIGHT} centered>
          Breath up
        </Typography>
        <Typography type={TypographyType.H5} color={FONT_COLOR_LIGHT} centered>
          Hold
        </Typography>
      </Stack>
      <List>
        {sets.map((set: CronoSetType) => {
          const isActive = set.pos === pos || set.pos === siblingPos;
          return (
            <Item key={set.pos} active={set.pos === pos} width="50%">
              <Set set={set} accent={isActive} />
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default SetsList;
