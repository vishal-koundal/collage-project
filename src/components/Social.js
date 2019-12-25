import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Icon = styled.i``;

const Socialicons = [
  { id: 1, name: 'fab fa-instagram', url: '/' },
  { id: 2, name: 'fab fa-facebook-f', url: '/' },
  { id: 3, name: 'fab fa-twitter', url: '/' },
];

const Social = () => (
  <div className="flex">
    {Socialicons.map(item => (
      <Link
        to={item.url}
        key={item.id}
        className="inline-block px-2 py-2 mt-4 lg:mt-0 text-xl">
        <Icon className={item.name} />
      </Link>
    ))}
  </div>
);

export default Social;
