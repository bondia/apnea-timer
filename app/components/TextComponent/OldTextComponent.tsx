import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import * as common from '../../commonStyles';

type TextComponentProps = {
  style: TextStyle;
  children: ReactNode;
};

const styles = StyleSheet.create({
  text: {
    fontSize: common.FONT_SIZE.FONT_SIZE_M,
    fontFamily: common.FONT_FAMILY,
  },
});

// TODO: Refactor to use only styled components

const TextComponent: FC<TextComponentProps> = (props: TextComponentProps) => {
  const { children, style } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default TextComponent;
