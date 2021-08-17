import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Container, AuthInput } from "./styles";
import { RectButton} from "react-native-gesture-handler";
import colors from "../../../utils/colors";
import { TextInputProps } from "react-native";

export function PasswordInput(props: TextInputProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container color={isFocused}>
      <AuthInput
        secureTextEntry={isVisible}
        placeholder="Password"
        keyboardType="default"
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={props.onChangeText}
      />
      <RectButton>
        <Ionicons name="eye-outline" size={24} onPress={() => {
          setIsVisible(prev => !prev) 
        }} color={!isVisible ? colors.primary : colors.border} />
      </RectButton>
    </Container>
  );
}
