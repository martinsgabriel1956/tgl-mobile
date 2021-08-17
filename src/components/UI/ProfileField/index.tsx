import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container, ProfileFieldText } from './styles';

interface ProfileFieldProps {
  children: ReactNode;
}

export function ProfileField({ children }: ProfileFieldProps) {
  return (
    <Container>
      <ProfileFieldText>{children}</ProfileFieldText>
    </Container>
  );
};


