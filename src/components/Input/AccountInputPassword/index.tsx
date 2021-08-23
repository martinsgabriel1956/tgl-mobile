import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";

import { Container, ProfileFieldInput } from './styles';
import colors from '../../../utils/colors';

interface AccountInputProps {
  children: ReactNode;
}

export function AccountInputPassword (props: TextInputProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <Container>
      <ProfileFieldInput
        secureTextEntry={isVisible}
        placeholder="Password"
        keyboardType="default"
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={props.onChangeText}
      />
      <RectButton>
        <Ionicons name="eye-outline" size={28}  onPress={() => {
          setIsVisible(prev => !prev) 
        }} color={!isVisible ? colors.primary : colors.border} />
      </RectButton>
    </Container>
  );
};


