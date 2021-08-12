import styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const Container = styled.View`
  background-color: ${colors.headerBg};
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  align-items: center;
  padding: 32px 40px;
  top: -362px;
`;

export const Logo = styled.View`

`;
export const LogoText = styled.Text`
  font-size: 36px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${colors.title};
  font-style: italic;

`;

export const LogoBar = styled.View`
  width: 80px;
  height: 8px;
  left: -6px;
  border-radius: 4px;
  background-color: ${colors.primary};
`;
