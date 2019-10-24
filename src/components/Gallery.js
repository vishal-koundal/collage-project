import React from 'react';
import styled from 'styled-components';
import { MainContainer, Title, Subtitle } from './elements';

const Container = styled.div``;

const Products = () => (
  <Container>
    <MainContainer>
      <div className="text-center py-6">
        <Title>What kind of Coffee we serve for you</Title>
        <Subtitle className="grey pt-2">
          Who are in extremely love with eco friendly system.
        </Subtitle>
      </div>
      <div className="flex flex-wrap py-10">
        <div className="flex-grow-0">
          <img
            className="p-2"
            src="https://colorlib.com/preview/theme/coffee/img/g1.jpg"
            alt=""
          />
          <img
            className="p-2"
            src="https://colorlib.com/preview/theme/coffee/img/g2.jpg"
            alt=""
          />
        </div>
        <div className="flex-grow">
          <img
            className="p-2"
            src="https://colorlib.com/preview/theme/coffee/img/g3.jpg"
            alt=""
          />
          <div className="flex flex-wrap">
            <img
              className="p-2"
              src="https://colorlib.com/preview/theme/coffee/img/g4.jpg"
              alt=""
            />
            <img
              className="p-2"
              src="https://colorlib.com/preview/theme/coffee/img/g5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </MainContainer>
  </Container>
);

export default Products;
