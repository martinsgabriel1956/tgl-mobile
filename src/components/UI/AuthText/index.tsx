import React, { ReactNode } from "react";
import { View } from 'react-native';

import { TextContent } from "./styles";

interface AuthTextProps {
  children: ReactNode;
}

export function AuthText({ children }: AuthTextProps) {
  return (
    <View>
      <TextContent>{children}</TextContent>
    </View>
  );
}
