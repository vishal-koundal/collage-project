import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: ${props =>
    props.white ? props.theme.colorWhite : props.theme.darkBlack};
`;

const Subtitle = ({ children, ...props }) => (
  <Container className="text-sm leading-tight font-semibold" {...props}>
    {children}
  </Container>
);

export default Subtitle;
