import React, { FC } from 'react';
import { View } from 'react-native';
import { CronoSetType } from '../../crono/redux/CronoTypes';
import SingleBar from './SingleBar';

type MultipleBarProps = {
  sets: CronoSetType[];
};

const MultipleBar: FC<MultipleBarProps> = ({ sets }) => (
  <View>
    {sets.map((set: CronoSetType) => (
      <SingleBar key={set.pos} set={set} />
    ))}
  </View>
);

export default MultipleBar;
