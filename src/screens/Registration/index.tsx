import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

import { AuthText } from "../../components/UI/AuthText";
import { BackButton } from "../../components/UI/BackButton";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/GreenButton";
import { Input } from "../../components/UI/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/UI/PasswordInput";

import { Container, TextBy } from "./styles";

export function Registration() {
  const navigation  = useNavigation();

  return (
    <Container>
      <Logo />
      <AuthText>Registration</AuthText>
      <Card>
        <Input
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="none"
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <PasswordInput />
        <GreenButton>Register</GreenButton>
      </Card>
      <BackButton onPress={() => navigation.goBack()}  />
      <TextBy>Copyright 2021 Luby Software</TextBy>
    </Container>
  );
}
