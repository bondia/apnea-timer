import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { CronoSetListType, CronoSetType } from '../../modules/crono/cronoTypes';
import SetItem from './SetItem';
import { Grid } from './SetsList.styled';

type SetsListProps = {
  sets: CronoSetListType;
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
