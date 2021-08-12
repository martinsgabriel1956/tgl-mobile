import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, TextBy } from "./styles";

import { AuthText } from "../../components/UI/AuthText";
import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { Input } from "../../components/UI/Input";
import { GreenButton } from "../../components/UI/GreenButton";
import { BackButton } from "../../components/UI/BackButton";
import { SingUpButton } from "../../components/UI/SingUpButton";

export function ResetPassword() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo />
      <AuthText>Reset password</AuthText>
      <Card>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <GreenButton>Send link</GreenButton>
      </Card>
      <BackButton onPress={() => navigation.goBack()} />
      <SingUpButton onPress={() => navigation.navigate('Registration')} />
      <TextBy>Copyright 2021 Luby Software</TextBy>
    </Container>
  );
}
