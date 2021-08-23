import { Dimensions, KeyboardAvoidingView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../utils/colors";

const { width, height } = Dimensions.get("window");

export const Container = styled(KeyboardAvoidingView)`
  color: ${colors.bg};
  height: 100%;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  margin-left: 32px;
  border-width: 4px;
  border-color: ${colors.primary};
  border-radius: 50px;
`;

export const AvatarContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EditIconContainer = styled(RectButton)`
  margin-right: 40px;
  height: 55px;
  width: 55px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const NameText = styled.Text`
  margin-left: 36px;
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
  color: ${colors.title};
`;

export const InfoContainer = styled.View`
  margin-top: 20px;
  margin-left: 36px;
  margin-bottom: 40px;
`;

export const InfoText = styled.Text`
  margin-top: 6px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text};
`;

export const ProfileFieldIcon = styled.View`
  background-color: ${colors.primary};
  position: absolute;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 66px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;

export const IsEditableContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;