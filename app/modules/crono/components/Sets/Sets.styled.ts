import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { SetTypeEnum } from '../../../editor/enums';
import {
  COLOR_GREEN_NORMAL,
  COLOR_RED_NORMAL,
  FONT_COLOR_GREY,
  FONT_COLOR_LIGHT,
  FONT_SIZE,
} from '../../../../commonStyles';
import { SURFACE_COLORS } from '../../../../darkTheme';

// eslint-disable-next-line import/prefer-default-export
export const Sets = styled.View`
  flex: 1 0 0;
`;

// TODO: Migrate to styled components
export const getSetItemStyles = (type: SetTypeEnum, active: boolean) => {
  const mainColor = type === SetTypeEnum.SET_TYPE_PREPARE ? COLOR_GREEN_NORMAL : COLOR_RED_NORMAL;
  return StyleSheet.create({
    setNumber: {
      color: SURFACE_COLORS.ELEVATION_00,
      position: 'absolute',
      left: 5,
      top: 5,
      fontSize: FONT_SIZE.FONT_SIZE_S,
    },
    clock: {
      color: active ? mainColor : FONT_COLOR_GREY,
      fontSize: FONT_SIZE.FONT_SIZE_M,
      lineHeight: FONT_SIZE.FONT_SIZE_M + 4,
      textAlign: 'center',
    },
    result: {
      color: !active ? mainColor : FONT_COLOR_LIGHT,
      fontSize: FONT_SIZE.FONT_SIZE_S,
      lineHeight: FONT_SIZE.FONT_SIZE_S + 4,
      textAlign: 'center',
    },
    contraction: {
      color: FONT_COLOR_LIGHT,
      fontSize: FONT_SIZE.FONT_SIZE_XS,
      lineHeight: FONT_SIZE.FONT_SIZE_XS + 4,
      textAlign: 'center',
    },
  });
};
