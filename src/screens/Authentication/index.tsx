import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { AuthText } from "../../components/UI/AuthText";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/GreenButton";
import { Input } from "../../components/UI/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/UI/PasswordInput";
import { SingUpButton } from "../../components/UI/SingUpButton";

import { Container, TextBy, ForgetPasswordText } from "./styles";
import colors from "../../utils/colors";
import { ActivityIndicator } from "react-native";
import { api } from "../../services/api";
import Toast from "react-native-toast-message";

export function Authentication() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  async function isLogin() {
    const user = await AsyncStorage.getItem("token");

    if(!user) return;

    navigation.navigate("TGL");
  }

  function handleAuthentication() {
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
        Toast.show({
          type: "error",
          text1: "Hey",
          text2: "Email or password are wrong",
        });
        await AsyncStorage.clear();
      });
  }
  useEffect(() => {
    isLogin();
  }, []);

  return (
    <>
      <Container animation="fadeInUp" duration={2000}>
        {!isLoading ? (
          <>
            <Toast ref={(ref) => Toast.setRef(ref)} />
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
    </>
  );
}
