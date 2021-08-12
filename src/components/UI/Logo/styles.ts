import * as Font from "expo-font";

import { Text } from "react-native";
import styled from "styled-components/native";

import colors from "../../../utils/colors";

export const LogoBar = styled.View`
  width: 108px;
  height: 8px;
  left: 0;
  border-radius: 4px;
  background-color: ${colors.primary};
  margin-bottom: 40px;
`;

export const LogoText = styled(Text)`
  text-align: center;
  font-size: 48px;
  font-style: italic;
  color: ${colors.title};

  font-weight: 700;
  font-family: "sans-serif";
`;
