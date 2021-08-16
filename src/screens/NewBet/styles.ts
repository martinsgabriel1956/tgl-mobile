import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  justify-content: center;
  height: 100%;
  background-color: #f7f7f7;
`;

export const TypeGameText = styled.Text`
  top: 0px;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.title};
  text-transform: uppercase;
  margin-left: 22px;
  margin-top: 8px;
`;

export const ChooseGame = styled.Text`
  margin-top: 10px;
  margin-bottom: 6px;
  margin-left: 22px;
  font-style: italic;
  color: ${colors.text};
  font-size: 16px;
`;

export const TypeGameContainer = styled(ScrollView)`
  margin-left: 10px;
  height: 26%;
`;
export const DescriptionContainer = styled(View)`
  margin-left: 24px;
  margin-bottom: 32px;
`;

export const FillYourBetText = styled.Text`
  font-weight: bold;
  font-style: italic;
  top: 0;
  font-size: 18px;
  color: ${colors.title};
`;

export const DescriptionText = styled.Text`
  margin-top: 8px;
  color: ${colors.text};
  font-size: 16px;
  font-style: italic;
  line-height: 24px;
`;

export const BetNumbersContainer = styled(ScrollView)`
  height: 100%;
  margin-left: 22px;
  flex-wrap: nowrap;
`;

