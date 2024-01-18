import React, { FC } from 'react';
import { Stack } from '../../../../components/Flow';
import List, { Item } from '../../../../components/List';
import Typography, {
  TypographyType,
} from '../../../../components/Typography/Typography';
import useAppTheme from '../../../../hooks/useAppTheme';
import { CronoSetListType, CronoSetType } from '../../cronoTypes';
import Set from './SetItem';

type SetsListProps = {
  sets: CronoSetListType;
  active?: CronoSetType;
};

const SetsList: FC<SetsListProps> = ({ sets, active }) => {
  const { colors } = useAppTheme();
  const pos = active?.pos === undefined ? -1 : active?.pos;
  const siblingPos = pos % 2 === 0 ? pos + 1 : pos - 1;
  return (
    <Stack grow={1}>
      <Stack
        grow={0}
        basis="auto"
        spaceAround
        horizontal
        spaceTop={4}
        spaceBottom={5}
      >
        <Stack basis="50%">
          <Typography
            type={TypographyType.H6}
            color={colors.primary200}
            centered
          >
            Recover
          </Typography>
        </Stack>
        <Stack basis="50%">
          <Typography
            type={TypographyType.H6}
            color={colors.primary200}
            centered
          >
            Breath Hold
          </Typography>
        </Stack>
      </Stack>
      <List>
        {sets.map((set: CronoSetType) => {
          const isActive = set.pos === pos || set.pos === siblingPos;
          return (
            <Item key={set.pos} active={set.pos === pos} width="46%">
              <Set set={set} accent={isActive} />
            </Item>
          );
        })}
      </List>
    </Stack>
  );
};

export default SetsList;
