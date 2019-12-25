/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Countup from '../components/Countup';

const Section = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/menu-bg.jpg);
  background-size: cover;
`;

const Review = () => (
  <Layout>
    <Section className="pb-32">
      <Countup />
    </Section>
  </Layout>
);

export default Review;
