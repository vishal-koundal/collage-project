import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import { Button, Subtitle, Heading } from './elements';

const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/header-bg.jpg);
  background-size: cover;
`;

const HomeHero = () => (
  <Container className="pt-32 pb-64 px-6 sm:px-24 bg-center">
    <div className="w-full lg:w-1/2">
      <Subtitle white className="uppercase font-bold pb-4">
        Now you can feel the Energy.
      </Subtitle>
      <Heading white className="text-3xl sm:text-6xl font-bold pb-4">
        Start your day with a black Coffee
      </Heading>
      <Button>BUYmdkfjh</Button>
    </div>
  </Container>
);

export default HomeHero;
