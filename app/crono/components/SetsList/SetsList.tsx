import React from 'react';
import { ScrollView } from 'react-native';
import { ImmutableJSCronoType, ImmutableJSSetType } from '../../redux/CronoTypes';
import SetItem from './SetItem';
import * as SC from './SetsList.styled';

interface SetsListProps {
  crono: ImmutableJSCronoType;
}

export default function SetsList(props: SetsListProps): JSX.Element {
  const { crono } = props;
  const sets: ImmutableJSSetType[] = crono.getIn(['sets']);
  return (
    <ScrollView>
      <SC.SetsWrapper>
        {sets.map((item: ImmutableJSSetType, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <SetItem key={index} item={item} />
        ))}
      </SC.SetsWrapper>
    </ScrollView>
  );
}
