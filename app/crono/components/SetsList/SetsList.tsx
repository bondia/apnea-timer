import React from 'react';
import { ScrollView } from 'react-native';

import { ImmutableJSSetType, ImmutableJSCronoType } from '../../redux/CronoTypes';
import * as SC from './SetsList.styled';
import SetItem from './SetItem';

interface SetsListProps {
    crono: ImmutableJSCronoType;
}

export default function SetsList(props: SetsListProps): JSX.Element {
    const { crono } = props;
    let sets: ImmutableJSSetType[] = crono.getIn(['sets']);
    return (
        <ScrollView>
            <SC.SetsWrapper>
                {sets.map((item: ImmutableJSSetType, index: number) =>
                    <SetItem key={index} item={item} />
                )}
            </SC.SetsWrapper>
        </ScrollView>
    )
}