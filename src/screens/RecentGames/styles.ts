import { ScrollView, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import colors from "../../utils/colors";

export const Container = styled.View`
  justify-content: center;
  height: 100%;
  background-color: #f7f7f7;
`;

export const RecentGamesText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.title};
  text-transform: uppercase;
  margin-left: 22px;
  margin-top: 8px;
`;

export const TypeGameContainer = styled(ScrollView)`
  margin-left: 10px;
  height: 50px;
`;

export const CloseContainer = styled(View)`
  align-items: flex-end;
  bottom: 30px;
  right: 12px;
`;

export const FilteredContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilteredButtonsContainer = styled(View)`
  flex-direction: row;
  margin-right: 32px;
  `;

export const PrevButton = styled(RectButton)`
  margin-right: 18px;
`;

export const NextButton = styled(RectButton)``;

export const NumberPage = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-right: 12px;
  font-weight: bold;
  color: ${colors.title};
  font-style: italic;
`

export const Filters = styled.Text`
  margin-top: 10px;
  margin-bottom: 6px;
  margin-left: 22px;
  font-style: italic;
  color: ${colors.text};
  font-size: 16px;
`

export const BetsContainer = styled(ScrollView)`
  height: 58%;
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  margin-left: 16px;
  margin-top: 20px;
`;
