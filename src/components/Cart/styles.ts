import { RectButton, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  position: absolute;
  right: 0;
  top: 34px;
  width: 66%;
  margin-right: 12px;
  background-color: ${colors.headerBg};
  height: 95.5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CloseContainer = styled.View`
  align-items: flex-end;
  margin-top: 10px;
  margin-right: 18px;
`;

export const CartTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 32px;
`;

export const BetsContainer = styled(ScrollView)`
  height: 52%;
`;

export const CartTitle = styled.Text`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.title};
  font-style: italic;
  margin-left: 8px;
`;

export const Bets = styled(ScrollView)`
  padding: 0 16px;
`;

export const CartTotalTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: absolute;
  top: 540px;
  left: 0;
  right: 0;
`;

export const CartTotalText = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: ${colors.title};
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const ValueText = styled.Text`
  font-size: 18px;
  color: ${colors.title};
`;

export const SaveCartContainer = styled.View`
  background-color: #ebebeb;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 40px 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 620px;
`;

export const SaveButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SaveText = styled.Text`
  font-size: 32px;
  font-style: italic;
  font-weight: bold;
  color: ${colors.primary};
`;
