import React from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";

import colors from "../../../utils/colors";

export function NewBetIcon() {
  return (
    <Container>
      <MaterialCommunityIcons
        name="circle-outline"
        size={110}
        color={colors.headerBg}
        style={{
          position: "absolute",
          left: -27,
          top: -27,
        }}
      />
      <Feather name="dollar-sign" size={56} color={colors.headerBg} />
    </Container>
  );
}
