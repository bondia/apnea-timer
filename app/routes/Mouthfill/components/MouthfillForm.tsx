import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_DARK, COLOR_GREEN_NORMAL, FONT_COLOR_GREY } from '../../../commonStyles';
import LongTouchButton from '../../../components/LongTouchButton';
import TextComponent from '../../../components/TextComponent/TextComponent';
import useMouthfill from '../hooks/useMouthfill';
import * as SC from './MouthfillForm.styled';

const styles = StyleSheet.create({
  target: {
    marginTop: 30,
    marginBottom: 30,
    color: COLOR_GREEN_NORMAL,
    textAlign: 'center',
    fontSize: 60,
  },
  label: {
    paddingTop: 33,
    lineHeight: 15,
    fontSize: 25,
    color: COLOR_DARK,
  },
  depth: {
    paddingTop: 25,
    flex: 1,
    color: FONT_COLOR_GREY,
    fontSize: 30,
    lineHeight: 30,
    textAlign: 'center',
  },
});

const MouthfillForm: FC = () => {
  const { d1, setD1, d2, setD2, d3, setD3, d4 } = useMouthfill();
  return (
    <SC.FormWrapper>
      <TextComponent style={styles.target}>{d4}m</TextComponent>

      <SC.InputRow>
        <TextComponent style={styles.label}>Test Mouthfill</TextComponent>
      </SC.InputRow>

      <SC.InputRow>
        <SC.ButtonWrapper>
          <LongTouchButton title="-" onPressStart={() => setD1(d1 - 1)} onPressInterval={() => setD1(d1 - 5)} />
        </SC.ButtonWrapper>
        <TextComponent style={styles.depth}>{d1}m</TextComponent>
        <SC.ButtonWrapper>
          <LongTouchButton title="+" onPressStart={() => setD1(d1 + 1)} onPressInterval={() => setD1(d1 + 5)} />
        </SC.ButtonWrapper>
      </SC.InputRow>

      <SC.InputRow>
        <TextComponent style={styles.label}>Failure Depth</TextComponent>
      </SC.InputRow>

      <SC.InputRow>
        <SC.ButtonWrapper>
          <LongTouchButton title="-" onPressStart={() => setD2(d2 - 1)} onPressInterval={() => setD2(d2 - 5)} />
        </SC.ButtonWrapper>
        <TextComponent style={styles.depth}>{d2}m</TextComponent>
        <SC.ButtonWrapper>
          <LongTouchButton title="+" onPressStart={() => setD2(d2 + 1)} onPressInterval={() => setD2(d2 + 5)} />
        </SC.ButtonWrapper>
      </SC.InputRow>

      <SC.InputRow>
        <TextComponent style={styles.label}>Mouthfill</TextComponent>
      </SC.InputRow>

      <SC.InputRow>
        <SC.ButtonWrapper>
          <LongTouchButton title="-" onPressStart={() => setD3(d3 - 1)} onPressInterval={() => setD3(d3 - 5)} />
        </SC.ButtonWrapper>
        <TextComponent style={styles.depth}>{d3}m</TextComponent>
        <SC.ButtonWrapper>
          <LongTouchButton title="+" onPressStart={() => setD3(d3 + 1)} onPressInterval={() => setD3(d3 + 5)} />
        </SC.ButtonWrapper>
      </SC.InputRow>
    </SC.FormWrapper>
  );
};

export default MouthfillForm;
