import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, TextBy } from "./styles";

import { AuthText } from "../../components/UI/AuthText";
import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { Input } from "../../components/UI/Input";
import { GreenButton } from "../../components/UI/GreenButton";
import { BackButton } from "../../components/UI/BackButton";
import { SingUpButton } from "../../components/UI/SingUpButton";
import Toast from "react-native-toast-message";
import axios from "axios";
import { RectButton } from "react-native-gesture-handler";
import { api } from "../../services/api";

export function ResetPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  function handleResetPassword() {
    if (!email)
      Toast.show({
        type: "error",
        text1: "Hey",
        text2: "Please type a valid email",
      });

    api
      .post("/forgot_password", {
        email,
      })
      .then(() =>
        Toast.show({
          type: "success",
          text1: "Hey",
          text2: "We have sent you an email with instructions",
        })
      )
      .catch(() =>
        Toast.show({
          type: "error",
          text1: "Hey",
          text2: "Please type a valid email!",
        })
      );
  }

  return (
    <Container>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Logo />
      <AuthText>Reset password</AuthText>
      <Card>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <RectButton onPress={handleResetPassword}>
          <GreenButton>Send link</GreenButton>
        </RectButton>
      </Card>
      <BackButton onPress={() => navigation.goBack()} />
      <SingUpButton onPress={() => navigation.navigate("Registration")} />
      <TextBy>Copyright 2021 Luby Software</TextBy>
    </Container>
  );
}
