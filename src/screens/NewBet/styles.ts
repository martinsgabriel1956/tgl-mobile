import { ScrollView, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import colors from "../../utils/colors";

export const Container = styled(Animatable.View)`
  justify-content: center;
  height: 100%;
  background-color: #f7f7f7;
  opacity: ${props => props.showCart ? '0.2' : '1.0'};
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
  width: 100%;
  height: 20%;
  margin-bottom: 48px;
`;
export const DescriptionContainer = styled(View)`
  top: ${(props) => (props.top ? -78 : -240)}px;
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: -60px;
  position: relative;
`;

export const BarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: -20px;
`;

export const Bar = styled.View`
  height: 8px;
  width: 40px;
  background-color: #c1c1c1;
  border-radius: 8px;
  margin-top: 18px;
`;

export const FillYourBetText = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
  color: ${colors.title};
`;

export const DescriptionText = styled.Text`
  margin-top: 8px;
  color: ${colors.text};
  font-size: 16px;
  font-style: italic;
  line-height: 24px;
  margin-right: 8px;
`;

export const BetNumbersContainer = styled(ScrollView)`
  height: 70%;
  margin-left: 22px;
  flex-wrap: nowrap;
  margin-bottom: 24px;
`;

export const GameContainer = styled.View``;

export const AnimationBetContainer = styled(Animatable.View)``;

export const DescriptionAnimatedContainer = styled(Animatable.View)``;

export const BetNumberSelectedContainer = styled(ScrollView)``;

export const BetCloseIcon = styled.View`
  position: absolute;
  bottom: 40px;
  right: 20px;
`;

export const ButtonContainer = styled(Animatable.View)`
  flex-direction: row;
  margin-top: 20px;
`;

export const ActionButton = styled(RectButton)`
  margin-right: 8px;
`;

export const AddToCartButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 6px;
`;

export const ActionButtonText = styled.Text`
  border-color: ${colors.primary};
  border-width: 2px;
  padding: 6px;
  color: ${colors.primary};
  font-weight: bold;
  border-radius: 6px;
`;

export const AddToCartButtonText = styled.Text`
  border-color: ${colors.primary};
  border-width: 2px;
  padding: 6px 8px;
  color: ${colors.headerBg};
  font-weight: bold;
  border-radius: 6px;
`;
