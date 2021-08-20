import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

import { Container, ProfileFieldInput } from './styles';

interface AccountInputProps {
  children: ReactNode;
}

export function AccountInput(props: TextInputProps | any) {
  return (
    <Container>
      <ProfileFieldInput
        {...props}
      />
    </Container>
  );
};


