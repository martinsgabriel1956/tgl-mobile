import React from "react";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";

import avatar from "../../assets/avatar.png";

import { Header } from "../../components/UI/Header";

import {
  Container,
  Avatar,
  AvatarContainer,
  EditIconContainer,
  NameText,
  InfoContainer,
  InfoText,
  ProfileFieldIcon,
} from "./styles";
import { ProfileField } from "../../components/UI/ProfileField";
import { View } from "react-native";

export function Account() {
  return (
    <Container>
      <Header />
      <AvatarContainer>
        <Avatar source={avatar} />
        <EditIconContainer>
          <Feather name="edit" size={32} color="white" />
        </EditIconContainer>
      </AvatarContainer>
      <NameText>Gabriel Martins</NameText>
      <InfoContainer>
        <InfoText>Info:</InfoText>
        <View>
          <ProfileFieldIcon>
            <AntDesign name="user" size={28} color="white" />
          </ProfileFieldIcon>
          <ProfileField>Gabriel Martins</ProfileField>
        </View>
        <View>
          <ProfileFieldIcon>
            <MaterialIcons name="alternate-email" size={28} color="white" />
          </ProfileFieldIcon>
          <ProfileField>martins@adm.com</ProfileField>
        </View>
        <View>
          <ProfileFieldIcon>
            <AntDesign name="key" size={28} color="white" />
          </ProfileFieldIcon>
          <ProfileField>1234</ProfileField>
        </View>
      </InfoContainer>
    </Container>
  );
}
