import styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const Container = styled.View`
  background-color: ${colors.headerBg};
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  align-items: center;
  padding: 32px 40px;
  top: -300px;
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
  width: 86px;
  height: 8px;
  left: -8px;
  border-radius: 4px;
  background-color: ${colors.primary};
`;
