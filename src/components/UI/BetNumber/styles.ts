import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled(RectButton)`
  margin-top: 8px;
  background-color: ${props => props.color};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-horizontal: 6px;
`;

export const BetNumberText = styled.Text`
  text-align: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.headerBg};
  margin-top: 18px;

`;

