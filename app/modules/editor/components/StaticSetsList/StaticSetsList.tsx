import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Grid } from '../../../../components/Grid';
import { TableSetListType } from '../../editorTypes';
import EditorTimerInput from '../StaticFormInputs/EditorTimerInput';

type Props = {
  sets: TableSetListType;
};

const StaticSetsList: FC<Props> = props => {
  const { sets } = props;
  return (
    <ScrollView>
      <Grid>
        {sets.map(({ pos, type, duration, zombie }) => (
          <EditorTimerInput key={pos} index={pos} type={type} duration={duration} zombie={zombie} setNumber={pos} />
        ))}
      </Grid>
    </ScrollView>
  );
};

export default StaticSetsList;
