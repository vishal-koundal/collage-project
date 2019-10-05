import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  color: ${props => props.theme.lighterBlack};
`;

const Button = ({ children, ...props }) => {
  return (
    <Container
      type="submit"
      className="bg-transparent hover:bg-transparent rounded"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      {children}
    </Container>
  );
};

export default Button;
