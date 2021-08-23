import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import * as Animatable from "react-native-animatable";

import { api } from "../../services/api";
import colors from "../../utils/colors";

import { AuthText } from "../../components/UI/AuthText";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/Button/GreenButton";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/Input/PasswordInput";
import { SingUpButton } from "../../components/UI/Button/SingUpButton";
import { Modal } from "../../components/UI/Modal";

import { Container, TextBy, ForgetPasswordText } from "./styles";

const UpAnimation = {
  0: {
    bottom: -400,
  },
  0.5: {
    bottom: 150,
  },
  0.6: {},
  0.7: {},
  0.75: {
    bottom: 750,
  },
  1: {
    bottom: 2000,
  },
};

const handleOpacity = {
  0: {
    opacity: 0.3,
  },
  1: {
    opacity: 1,
  },
};

export function Authentication() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const [modalColor, setModalColor] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setmessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function hideAlert() {
    setShowAlert(false);
  }

  function displayAlert(message: string, title: string, color: string) {
    setModalTitle(title);
    setModalColor(color);
    setmessage(message);
    setShowAlert(true);
  }
  
  async function isLogin() {
    const user = await AsyncStorage.getItem("token");

    if (user) {
      navigation.navigate("TGL");
    }
  }

  function handleAuthentication() {
    const isLogged = email || password;

    api
      .post("/login", {
        email,
        password,
      })
      .then(async (res) => {
        setEmail("");
        setPassword("");
        setIsLoading(true);
        await AsyncStorage.setItem("token", res.data.token);

        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate("TGL");
        }, 2000);
      })
      .catch(async (err) => {
        setIsLoading(false);
        if(!isLogged) {
          displayAlert("Please fill all the fields", "Hey", "red");
        } else {
          displayAlert(
            "Email or password are wrong",
            "Hey!!",
            `red`
          );
        }
        await AsyncStorage.clear();
      });
  }
  useEffect(() => {
    isLogin();
  }, []);

  return (
    <>
      <Container animation={handleOpacity} duration={8000}>
        {!isLoading ? (
          <>
            <Logo />
            <AuthText>Authentication</AuthText>
            <Card>
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
              />
              <PasswordInput onChangeText={setPassword} />
              <RectButton onPress={() => navigation.navigate("ResetPassword")}>
                <ForgetPasswordText>I forget my password</ForgetPasswordText>
              </RectButton>
              <RectButton onPress={handleAuthentication}>
                <GreenButton>Log In</GreenButton>
              </RectButton>
            </Card>
            <SingUpButton onPress={() => navigation.navigate("Registration")} />
            <TextBy>Copyright 2021 Luby Software</TextBy>
          </>
        ) : (
          <ActivityIndicator size={200} color={colors.primary} />
        )}
      </Container>
      <Modal
        title={modalTitle}
        color={modalColor}
        showAlert={showAlert}
        callback={hideAlert}
        message={message}
      />
      <Animatable.Image
        animation={UpAnimation}
        duration={6000}
        source={require("../../assets/splash.png")}
        style={{
          position: "absolute",
          alignSelf: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
}
