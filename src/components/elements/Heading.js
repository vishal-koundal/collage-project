import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: ${props =>
    props.white ? props.theme.colorWhite : props.theme.darkBlack};
`;

const Heading = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container className="text-4xl leading-loose font-semibold" {...props}>
    {children}
  </Container>
);

export default Heading;
