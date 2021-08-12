import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const GreenButtonText = styled.Text`
  font-size: 32px;
  font-style: italic;
  font-weight: bold;
  color: ${colors.primary};
  font-family: sans-serif;
  margin-right: 10px;
`;