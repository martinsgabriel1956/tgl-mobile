import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { RectButton } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

import { Container, TextBy } from "./styles";

import { AuthText } from "../../components/UI/AuthText";
import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { Input } from "../../components/Input/Input";
import { GreenButton } from "../../components/UI/Button/GreenButton";
import { BackButton } from "../../components/UI/Button/BackButton";
import { SingUpButton } from "../../components/UI/Button/SingUpButton";
import { api } from "../../services/api";
import { Modal } from "../../components/UI/Modal";
import colors from "../../utils/colors";

export function ResetPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const [modalColor, setModalColor] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setmessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  function handleResetPassword() {
    if (!email)
      displayAlert("Please type a valid email", "Hey!!", `${colors.primary}`);

      api
      .post("/forgot_password", {
        email,
      })
      .then(() =>
        displayAlert("We have sent you an email with instructions", "Hey!!", `${colors.primary}`)
      )
      .catch(() =>
        displayAlert("Please type a valid email!", "Hey!!", `${colors.primary}`)
      );
  }

  function hideAlert() {
    setShowAlert(false);
  }

  function displayAlert(message: string, title: string, color: string) {
    setModalTitle(title);
    setModalColor(color);
    setmessage(message);
    setShowAlert(true);
  }

  return (
    <>
      <Container>
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
