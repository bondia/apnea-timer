import styled from 'styled-components/native';

export type TypographyStylesType = {
  color?: string;
  centered?: boolean;
};

const Text = styled.Text<TypographyStylesType>`
  color: ${({ color }) => color || 'black'};
  text-align: ${({ centered }) => (centered ? 'center' : 'auto')};
  font-style: normal;
  font-weight: 400;
`;

export const H1 = styled(Text)`
  font-size: 96px;
  font-weight: 300;
  line-height: 112px;
  letter-spacing: -1.5px;
`;

export const H2 = styled(Text)`
  font-size: 60px;
  font-weight: 300;
  line-height: 72px;
  letter-spacing: -0.5px;
`;

export const H3 = styled(Text)`
  font-size: 48px;
  line-height: 56px;
`;

export const H4 = styled(Text)`
  font-size: 34px;
  line-height: 36px;
`;

export const H5 = styled(Text)`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
`;

export const H6 = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Subtitle1 = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Subtitle2 = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

export const Body1 = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Body2 = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const Button = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export const Caption = styled(Text)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

export const Overline = styled(Text)`
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
