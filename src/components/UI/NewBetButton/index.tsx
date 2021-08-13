import React from 'react';


import { Container, IconContainer } from './styles';

import { NewBetIcon } from '../NewBetIcon';

export function NewBetButton() {
  return (
    <Container>
      <IconContainer>
        <NewBetIcon />
      </IconContainer>
    </Container>
  );
};