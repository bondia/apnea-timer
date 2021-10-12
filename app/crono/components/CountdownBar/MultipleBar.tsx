import React from 'react';
import { View } from 'react-native';
import { ImmutableJSSetType } from '../../redux/cronoTypes';
import SingleBar from './SingleBar';

interface MultipleBarProps {
  sets: ImmutableJSSetType[];
}

export default function MultipleBar(props: MultipleBarProps): JSX.Element {
  const { sets } = props;
  return (
    <View>
      {sets.map((set: ImmutableJSSetType, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <SingleBar key={index} set={set} />
      ))}
    </View>
  );
}
