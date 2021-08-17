import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import { AuthText } from "../../components/UI/AuthText";
import { BackButton } from "../../components/UI/BackButton";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/GreenButton";
import { Input } from "../../components/UI/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/UI/PasswordInput";

import { Container, TextBy } from "./styles";
import { api } from "../../services/api";

export function Registration() {
  const navigation = useNavigation();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleRegister() {
    const isInvalid = !name || !email || !password;

    if (isInvalid) {
      Toast.show({
        type: "error",
        text1: "Hey",
        text2: "Please fill all the fields",
      });
    }

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Hey",
          text2: "You are now registered",
        });

        setTimeout(() => {
          navigation.navigate("Authentication");
        }, 2000);
      })
      .catch((err) =>
        Toast.show({
          type: "error",
          text1: "Hey",
          text2: "Email already exists!!",
        })
      );
  }

  return (
    <Container>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Logo />
      <AuthText>Registration</AuthText>
      <Card>
        <Input
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="words"
          onChangeText={setName}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <PasswordInput onChangeText={setPassword} />
        <RectButton onPress={handleRegister}>
          <GreenButton>Register</GreenButton>
        </RectButton>
      </Card>
      <BackButton onPress={() => navigation.goBack()} />
      <TextBy>Copyright 2021 Luby Software</TextBy>
    </Container>
  );
}
