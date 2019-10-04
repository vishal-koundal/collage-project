import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: #ffffff;
`;

const Title = ({ children, ...props }) => (
  <Container className="text-2xl leading-normal font-semibold" {...props}>
    {children}
  </Container>
);

export default Title;
