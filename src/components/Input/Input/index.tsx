import React, { useRef, useState } from "react";
import { TextInputProps, Animated } from "react-native";


import { Container, AuthInput} from "./styles";

export function Input(props: TextInputProps | any) {
  const [isFocused, setIsFocused] = useState(false);
  
  const animatedIsFocused = useRef(new Animated.Value(0)).current;

  Animated.timing(animatedIsFocused, {
    toValue: isFocused ? 1 : 0,
    duration: 200,
    useNativeDriver: true,
  }).start();

  return (
    <Container color={isFocused}>
      <AuthInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
}
