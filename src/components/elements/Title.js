import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: ${props =>
    props.white ? props.theme.colorWhite : props.theme.textGray};
`;

const Title = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container className="text-2xl leading-normal font-semibold" {...props}>
    {children}
  </Container>
);

export default Title;
