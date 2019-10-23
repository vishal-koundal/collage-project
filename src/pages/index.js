import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomeAbout from '../components/HomeAbout';

const Container = styled.div``;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Container>
          <HomeHero />
          <HomeAbout />
        </Container>
      </Layout>
    );
  }
}
