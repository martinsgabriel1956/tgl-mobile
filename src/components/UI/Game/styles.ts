import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../../utils/colors";

export const Container = styled(TouchableOpacity)`
  margin-top: 12px;
  margin-left: 12px;
  background-color: ${colors.headerBg};
  `;


export const GameText = styled.Text`
  border-width: 2px;
  border-color: #000;
  padding-vertical: 4px;
  padding-horizontal: 24px;
  text-align: center;
  border-radius: 16px;
  font-style: italic;
  font-weight: bold;
`;
