import styled from 'styled-components/native';
import colors from '../../utils/colors';

import * as Animatable from "react-native-animatable";

export const Container = styled(Animatable.View)`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #F7F7F7;
`;

export const TextBy = styled.Text`
  top: 90px;
  color: ${colors.text};
`;

export const ForgetPasswordText = styled.Text`
  font-style: italic;
  color: #c1c1c1;
  margin-top: 25px;
  text-align: right;
  margin-right: 30px;
  
`;
