import React from 'react';
import styled from 'styled-components';
import { c_black } from '../utils/theme';

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${c_black};
  padding: 16px;
  a {
    color: white;
    font-size: 14px;
    letter-spacing: 0.03em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <a href="mailto:hello@storgecapital.com">hello@storgecapital.com</a>
    <a href="https://www.twitter.com/storgecapital" target="_blank" rel="noopener noreferrer">@storgecapital</a>
  </FooterContainer>
);

export default Footer;