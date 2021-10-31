import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { COLOR_LIGHT, FONT_COLOR_GREY, FONT_SIZE } from '../../styles/commonStyles';

export const BlockWrapper = styled.View`
  width: 50%;
  margin: 10px 0;
`;

export const baseStyles = StyleSheet.create({
  headerLabel: {
    textAlign: 'center',
    color: FONT_COLOR_GREY,
    fontSize: FONT_SIZE.FONT_SIZE_M,
  },

  headerText: {
    textAlign: 'center',
    fontSize: FONT_SIZE.FONT_SIZE_L,
    color: COLOR_LIGHT,
  },
});
