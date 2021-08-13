import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  justify-content: center;
  height: 100%;
  background-color: #F7F7F7;
  `;

export const TypeGameText = styled.Text`
  top: -260px;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.title};
  text-transform: uppercase;
  margin-left: 22px;
  `

export const ChooseGame = styled.Text`
  margin-left: 22px;
  top: -240px;
  font-style: italic;
  color: ${colors.text};
  font-size: 16px;
`;