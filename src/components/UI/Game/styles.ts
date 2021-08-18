import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

type ButtonProps = {
  color: string;
  background: string;
};

export const Container = styled(RectButton)`
  margin-top: 12px;
  margin-left: 12px;

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
