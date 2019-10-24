import React from 'react';
import styled from 'styled-components';
import { MainContainer, Title, Subtitle } from './elements';

const Container = styled.div``;

const Products = () => (
  <Container className="bg-yellow-900">
    <MainContainer>
      <div className="text-center py-6">
        <Title white>What kind of Coffee we serve for you</Title>
        <Subtitle className="white pt-2">
          Who are in extremely love with eco friendly system.
        </Subtitle>
      </div>
      <div className="flex flex-wrap py-10">
        <div className="w-1/2">
          <img
            src="https://colorlib.com/preview/theme/coffee/img/r1.png"
            alt=""
          />
          <div className="flex py-6">
            <Subtitle className="white uppercase font-bold">
              lorem ipusm
            </Subtitle>
            <div className="px-4">
              <i className="fas fa-star mr-1 text-orange-400 text-sm" />
              <i className="fas fa-star mr-1 text-orange-400 text-sm" />
              <i className="fas fa-star mr-1 text-orange-400 text-sm" />
              <i className="fas fa-star mr-1 white text-sm" />
              <i className="fas fa-star mr-1 white text-sm" />
            </div>
          </div>
          <Subtitle className="white leading-snug">
            Accessories Here you can find the best computer accessory for your
            laptop, monitor, printer, scanner, speaker. Here you can find the
            best computer accessory for your laptop, monitor, printer, scanner,
            speaker.
          </Subtitle>
        </div>
        <div className="w-1/2">
          <img
            src="https://colorlib.com/preview/theme/coffee/img/r2.png"
            alt=""
          />
          <div className="flex py-6">
            <Subtitle className="white uppercase font-bold">
              lorem ipusm
            </Subtitle>
            <div className="px-4">
              <i className="fas fa-star mr-1 text-orange-400 text-sm" />
              <i className="fas fa-star mr-1 text-orange-400 text-sm" />
              <i className="fas fa-star mr-1 text-orange-400 text-sm" />
              <i className="fas fa-star mr-1 white text-sm" />
              <i className="fas fa-star mr-1 white text-sm" />
            </div>
          </div>
          <Subtitle className="white leading-snug">
            Accessories Here you can find the best computer accessory for your
            laptop, monitor, printer, scanner, speaker. Here you can find the
            best computer accessory for your laptop, monitor, printer, scanner,
            speaker.
          </Subtitle>
        </div>
        
      </div>
        
    </MainContainer>
  </Container>
);

export default Products;
