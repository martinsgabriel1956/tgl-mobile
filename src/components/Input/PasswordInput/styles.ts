import { TextInput } from "react-native";
import styled from "styled-components/native";
import colors from "../../../utils/colors";

export const Container = styled.View`
  padding: 18px 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.color ? colors.primary : colors.border};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const AuthInput = styled(TextInput)`
  color: ${colors.inputText};
  font-style: italic;
  font-weight: bold;
`;
