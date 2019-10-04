import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: #ffffff;
`;

const Heading = ({ children, ...props }) => (
  <Container className="text-4xl leading-loose font-semibold" {...props}>
    {children}
  </Container>
);

export default Heading;
