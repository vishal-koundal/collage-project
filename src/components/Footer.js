import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Subtitle, MainContainer } from './elements';

const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/footer-bg.jpg);
  background-size: cover;
`;

const Footer = () => (
  <Container className="py-40">
    <MainContainer className="block sm:flex white py-40">
     <div className="w-2/5 pr-12">
        <Subtitle className="text-xl font-semibold font-hairline">
          About Us
        </Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore dolore.
        </Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Copyright ©2019 All rights reserved | This template is made with by
          Colorlib
        </Subtitle>
      </div>
      <div className="w-2/5 pr-12">
        <Subtitle className="text-xl font-semibold white">Newsletter</Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Stay update with our latest
        </Subtitle>
        <form class="w-full max-w-sm mt-4">
  <div class="flex">
  <input class="w-full p-3" type="text" placeholder="Enter Email" aria-label="Full name"/>
    <button class="flex-shrink-0 bg-yellow-900 p-3" type="button">
      -->
    </button>
  </div>
</form>
      </div>
      <div className="w-1/5 pr-12">
        <Subtitle className="text-xl font-semibold white">Follow Us</Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Let us be social
        </Subtitle>
        <div className="pt-6">
          <Link to="/" className="inline-block px-2 py-2 mt-4 lg:mt-0">
            <i className="fab fa-instagram text-xl" />
          </Link>
          <Link to="/" className="inline-block px-2 py-2 mt-4 lg:mt-0">
            <i className="fab fa-facebook-f text-xl" />
          </Link>
          <Link to="/" className="inline-block px-2 py-2 mt-4 lg:mt-0">
            <i className="fab fa-twitter text-xl" />
          </Link>
        </div>
      </div>
    </MainContainer>
  </Container>
);

export default Footer;
