/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';

import HomeAbout from '../components/HomeAbout';
import Layout from '../components/Layout';
import { Title, Subtitle, MainContainer } from '../components/elements';
import Countup from '../components/Countup';

const Section = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/menu-bg.jpg);
  background-size: cover;
`;

const Review = () => (
  <Layout>
    <Section>
      <MainContainer>
        <div className="text-center py-6">
          <Title>What kind of Coffee we serve for you</Title>
          <Subtitle className="grey pt-2">
            Who are in extremely love with eco friendly system.
          </Subtitle>
        </div>
      </MainContainer>
    </Section>
  </Layout>
);

export default Review;
