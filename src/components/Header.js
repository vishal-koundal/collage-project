/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navbar = styled.nav`
  background: ${props => props.theme.primaryColor};
`;
const NavItems = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/' },
  { id: 3, name: 'coffee', url: '/' },
  { id: 4, name: 'review', url: '/' },
  { id: 5, name: 'blog', url: '/' },
];
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Navbar className="flex items-center justify-between flex-wrap fixed inset-x-0 py-4 px-12">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            src="https://colorlib.com/preview/theme/coffee/img/logo.png"
            alt="cafe-logo"
          />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm text-center lg:flex-grow uppercase">
            {NavItems.map(item => (
              <Link
                to={item.url}
                className="block mt-4 lg:inline-block lg:mt-0 text-sm mr-6"
                key={item.id}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
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
      </Navbar>
    );
  }
}
