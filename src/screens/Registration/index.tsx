import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { AuthText } from "../../components/UI/AuthText";
import { BackButton } from "../../components/UI/Button/BackButton";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/Button/GreenButton";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/Input/PasswordInput";

import { Container, TextBy } from "./styles";
import { api } from "../../services/api";
import { Modal } from "../../components/UI/Modal";
import colors from "../../utils/colors";

export function Registration() {
  const navigation = useNavigation();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [modalColor, setModalColor] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setmessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function displayAlert(message: string, title: string, color: string) {
    setModalTitle(title);
    setModalColor(color);
    setmessage(message);
    setShowAlert(true);
  }
  function hideAlert() {
    setShowAlert(false);
  }

  function handleRegister() {
    const isInvalid = !name || !email || !password;

    if (isInvalid) displayAlert("Please fill all the fields", "Hey", "red");

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        displayAlert("You are now registered!!", "Hey", `${colors.primary}`);

        setTimeout(() => {
          navigation.navigate("Authentication");
        }, 2000);
      })
      .catch((err) => {
        if(!isInvalid) displayAlert("Email already exists!!", "Hey", `${colors.primary}`);
      }
        
      );
  }

  return (
    <>
      <Container>
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
      <Modal
        title={modalTitle}
        color={modalColor}
        showAlert={showAlert}
        callback={hideAlert}
        message={message}
      />
    </>
  );
}
