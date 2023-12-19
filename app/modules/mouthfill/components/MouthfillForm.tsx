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
  const { testPerformed, setTestPerformed, testFailed, setTestFailed, performed, setPerformed, maxDepth } =
    useMouthfill();
  return (
    <SC.FormWrapper>
      <TextComponent style={styles.target}>{maxDepth}m</TextComponent>

      <SC.InputRow>
        <TextComponent style={styles.label}>Test Mouthfill</TextComponent>
      </SC.InputRow>

      <SC.InputRow>
        <SC.ButtonWrapper>
          <LongTouchButton
            title="-"
            onPressStart={() => setTestPerformed(testPerformed - 1)}
            onPressInterval={() => setTestPerformed(testPerformed - 5)}
          />
        </SC.ButtonWrapper>
        <TextComponent style={styles.depth}>{testPerformed}m</TextComponent>
        <SC.ButtonWrapper>
          <LongTouchButton
            title="+"
            onPressStart={() => setTestPerformed(testPerformed + 1)}
            onPressInterval={() => setTestPerformed(testPerformed + 5)}
          />
        </SC.ButtonWrapper>
      </SC.InputRow>

      <SC.InputRow>
        <TextComponent style={styles.label}>Failure Depth</TextComponent>
      </SC.InputRow>

      <SC.InputRow>
        <SC.ButtonWrapper>
          <LongTouchButton
            title="-"
            onPressStart={() => setTestFailed(testFailed - 1)}
            onPressInterval={() => setTestFailed(testFailed - 5)}
          />
        </SC.ButtonWrapper>
        <TextComponent style={styles.depth}>{testFailed}m</TextComponent>
        <SC.ButtonWrapper>
          <LongTouchButton
            title="+"
            onPressStart={() => setTestFailed(testFailed + 1)}
            onPressInterval={() => setTestFailed(testFailed + 5)}
          />
        </SC.ButtonWrapper>
      </SC.InputRow>

      <SC.InputRow>
        <TextComponent style={styles.label}>Mouthfill</TextComponent>
      </SC.InputRow>

      <SC.InputRow>
        <SC.ButtonWrapper>
          <LongTouchButton
            title="-"
            onPressStart={() => setPerformed(performed - 1)}
            onPressInterval={() => setPerformed(performed - 5)}
          />
        </SC.ButtonWrapper>
        <TextComponent style={styles.depth}>{performed}m</TextComponent>
        <SC.ButtonWrapper>
          <LongTouchButton
            title="+"
            onPressStart={() => setPerformed(performed + 1)}
            onPressInterval={() => setPerformed(performed + 5)}
          />
        </SC.ButtonWrapper>
      </SC.InputRow>
    </SC.FormWrapper>
  );
};

export default MouthfillForm;
