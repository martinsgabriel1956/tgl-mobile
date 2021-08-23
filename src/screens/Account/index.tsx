import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Feather, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";

import { api } from "../../services/api";

import { Header } from "../../components/UI/Header";
import { ProfileField } from "../../components/UI/ProfileField";
import { AccountInput } from "../../components/Input/AccountInput";
import { AccountInputPassword } from "../../components/Input/AccountInputPassword";
import { Modal } from "../../components/UI/Modal";

import avatar from "../../assets/avatar.png";

import {
  Container,
  Avatar,
  AvatarContainer,
  EditIconContainer,
  NameText,
  InfoContainer,
  InfoText,
  ProfileFieldIcon,
  IsEditableContainer,
} from "./styles";

import colors from "../../utils/colors";

export function Account() {
  const [inputName, setInputName] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();

  const [profileName, setProfileName] = useState<string>();
  const [profileEmail, setProfileEmail] = useState<string>();

  const [isEditable, setIsEditable] = useState(false);
  const [token, setToken] = useState<string>();

  const [modalColor, setModalColor] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setmessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  async function getDate() {
    const user = await AsyncStorage.getItem("token");

    if (user) setToken(user);
  }

  function handleEdit() {
    setIsEditable(true);
  }

  function handleCancelEdit() {
    setIsEditable(false);
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

  function handleUpdateData() {
    const isInvalid = !inputEmail || !inputName || !inputPassword;

    if (isInvalid)
      displayAlert("Please fill all the fields", "Hey", `${colors.primary}`);

    api
      .put(
        "/users",
        {
          name: inputName,
          email: inputEmail,
          password: inputPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        displayAlert("Your data was updated", "Success", `${colors.primary}`);
        setInputName("");
        setInputEmail("");
        setInputPassword("");

        setIsEditable(false);
      })
      .catch((err) =>
        displayAlert(
          "Something went wrong, please check the fields",
          "Hey",
          `${colors.primary}`
        )
      );
  }

  useEffect(() => {
    getDate();

    api
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfileName(res.data.name);
        setProfileEmail(res.data.email);
      })
      .catch((err) => {});
  }, [handleUpdateData]);

  return (
    <>
      <Container 
        behavior="position" 
        enabled
        keyboardVerticalOffset={80}
      >
        <Header />
        <AvatarContainer>
          <Avatar source={avatar} />

          {!isEditable ? (
            <View>
              <EditIconContainer onPress={handleEdit}>
                <Feather name="edit" size={32} color="white" />
              </EditIconContainer>
            </View>
          ) : (
            <IsEditableContainer>
              <EditIconContainer
                onPress={handleCancelEdit}
                style={{
                  backgroundColor: "red",
                  marginRight: 30
                }}
              >
                <AntDesign name="close" size={32} color="white" />
              </EditIconContainer>
              <EditIconContainer onPress={handleUpdateData}>
                <AntDesign name="check" size={32} color="white" />
              </EditIconContainer>
            </IsEditableContainer>
          )}
        </AvatarContainer>
        <NameText>{profileName}</NameText>
        <InfoContainer>
          <InfoText>{isEditable ? "Edit Info:" : "Info:"}</InfoText>
          {isEditable ? (
            <>
              <Animatable.View animation="fadeInLeft" duration={600}>
                <ProfileFieldIcon>
                  <AntDesign name="user" size={28} color="white" />
                </ProfileFieldIcon>
                <AccountInput
                  placeholder="Name"
                  keyboardType="default"
                  autoCapitalize="words"
                  onChangeText={setInputName}
                />
              </Animatable.View>
              <Animatable.View animation="fadeInLeft" duration={700}>
                <ProfileFieldIcon>
                  <MaterialIcons
                    name="alternate-email"
                    size={28}
                    color="white"
                  />
                </ProfileFieldIcon>
                <AccountInput
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={setInputEmail}
                />
              </Animatable.View>
              <Animatable.View animation="fadeInLeft" duration={800}>
                <ProfileFieldIcon>
                  <Entypo name="key" size={24} color="white" />
                </ProfileFieldIcon>
                <AccountInputPassword onChangeText={setInputPassword} />
              </Animatable.View>
            </>
          ) : (
            <>
              <View>
                <ProfileFieldIcon>
                  <AntDesign name="user" size={28} color="white" />
                </ProfileFieldIcon>
                <ProfileField>{profileName}</ProfileField>
              </View>
              <View>
                <ProfileFieldIcon>
                  <MaterialIcons
                    name="alternate-email"
                    size={28}
                    color="white"
                  />
                </ProfileFieldIcon>
                <ProfileField>{profileEmail}</ProfileField>
              </View>
            </>
          )}
        </InfoContainer>
      </Container>
      <Animatable.View animation="fadeIn" duration={200}>
        <Modal
          title={modalTitle}
          color={modalColor}
          showAlert={showAlert}
          callback={hideAlert}
          message={message}
        />
      </Animatable.View>
    </>
  );
}
