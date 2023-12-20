import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { CronoSetType } from '../../modules/crono/cronoTypes';
import SetItem from './SetItem';
import { Grid } from './SetsList.styled';

type SetsListProps = {
  sets: CronoSetType[];
};

const SetsList: FC<SetsListProps> = ({ sets }) => (
  <ScrollView>
    <Grid>
      {sets.map((set: CronoSetType) => (
        <SetItem key={set.pos} set={set} />
      ))}
    </Grid>
  </ScrollView>
);

export default SetsList;
