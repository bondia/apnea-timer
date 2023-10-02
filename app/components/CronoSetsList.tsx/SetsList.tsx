import React, { FC } from 'react';
import { CronoSetType } from '../../crono/redux/CronoTypes';
import SetItem from './SetItem';
import { Grid } from './SetsList.styled';

interface SetsListProps {
  sets: CronoSetType[];
}

const SetsList: FC<SetsListProps> = (props: SetsListProps) => {
  const { sets } = props;
  return (
    <Grid>
      {sets.map((set: CronoSetType) => (
        <SetItem key={set.pos} set={set} />
      ))}
    </Grid>
  );
};

export default SetsList;
