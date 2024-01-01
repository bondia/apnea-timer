import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Spacer } from '../../../../components/Layout';
import { TableSetListType } from '../../editorTypes';
import EditorTimerInput from '../StaticFormInputs/EditorTimerInput';

type Props = {
  sets: TableSetListType;
};

const StaticSetsList: FC<Props> = props => {
  const { sets } = props;
  return (
    <ScrollView>
      <Spacer spacing={1}>
        {sets.map(({ pos, type, duration, zombie }) => (
          <EditorTimerInput key={pos} index={pos} type={type} duration={duration} zombie={zombie} setNumber={pos} />
        ))}
      </Spacer>
    </ScrollView>
  );
};

export default StaticSetsList;
