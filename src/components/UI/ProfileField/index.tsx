import React, { ReactNode } from 'react';

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


