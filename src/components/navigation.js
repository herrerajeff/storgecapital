import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {media} from '../utils/media';
import { c_black, c_red } from '../utils/theme';

const NavigationContainer = styled.div`
  display: grid;
  align-items: center;
  @media ${media.m} {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr 1fr;
`;

const NavLink = styled(Link)`
  text-align: center;
  font-size: 14px;
  padding: 32px 0;
  color: ${c_black};
  text-decoration: none;
  @media ${media.l} {
    font-size: 1.8vw;
  }
  @media ${media.m} {
    font-size: 18px;
    text-align: right;
    padding: 8px 16px;
  }
  &:hover {
    color: ${c_red};
  }
`;

const Navigation = () => (
  <NavigationContainer>
    <NavLink to="/whoweare/">Who We Are</NavLink>
    <NavLink to="/ourmission/">Our Mission</NavLink>
    <NavLink to="/connect/">Connect</NavLink>
  </NavigationContainer>
);

export default Navigation;