import styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const Container = styled.View`
  background-color: ${colors.headerBg};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 36px 26px 24px;
  margin-top: 24px;
  top: -20px;
`;

export const Logo = styled.View`

`;
export const LogoText = styled.Text`
  font-size: 36px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${colors.title};
  font-style: italic;
  margin-top: 8px;
`;

export const LogoBar = styled.View`
  width: 86px;
  height: 8px;
  left: -8px;
  border-radius: 4px;
  background-color: ${colors.primary};
`;

export const HeaderButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;