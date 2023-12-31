import React, { FC } from 'react';
import styled from 'styled-components/native';
import { COLOR_LIGHT } from '../../commonStyles';
import secondsToTimeString from '../../utils/time/secondsToTimeString';
import Typography, { TypographyType } from '../Typography/Typography';

type BlockWrapperProps = {
  width?: string;
};

export const BlockWrapper = styled.View<BlockWrapperProps>`
  width: ${(props: BlockWrapperProps) => props.width || '50%'};
  margin: 10px 0;
`;

type InfoBlockProps = {
  title?: string;
  timeContent?: number;
  rawContent?: number | string;
  textColor?: string;
  width?: string;
};

const InfoBlock: FC<InfoBlockProps> = props => {
  const { title, timeContent, rawContent, width, textColor = COLOR_LIGHT } = props;

  return (
    <BlockWrapper width={width}>
      {title && (
        <Typography type={TypographyType.H6} color={textColor} centered>
          {title}
        </Typography>
      )}

      <Typography type={TypographyType.H3} color={textColor} centered>
        {timeContent !== undefined ? secondsToTimeString(timeContent) : rawContent}
      </Typography>
    </BlockWrapper>
  );
};

export default InfoBlock;
