import React from 'react';
import styled, { css } from 'styled-components';
import type { ButtonProps } from './button.props';
import { Container, StyledButton } from './button.styles';

const Button = (props: ButtonProps) => {

  const { title, style: styleOverride } = props;

  return (
    <Container>
      <StyledButton >Button</StyledButton>
    </Container>

  );
};

export default Button;
