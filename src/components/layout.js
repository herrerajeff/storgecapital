import React from 'react';
import { c_red, c_black, c_tan } from '../utils/theme';
import styled, { createGlobalStyle } from 'styled-components';
import {media} from '../utils/media';
import Helmet from 'react-helmet';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  body {
    min-height: 100%;
    height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
    &::selection {
      background-color: ${c_black};
      color: white;
    }
  }
`;

const AppContainer = styled.div`
  border-top: solid 4px ${c_red};
  min-height: 100vh;
  display: grid;
  grid-template:
    [row1-start] "header" auto [row1-end]
    [row2-start] "main" auto [row2-end]
    [row3-start] "content" 2fr [row3-end]
    / 1fr;
  @media ${media.m}{
    display: grid;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    grid-template:
      [row1-start] "header content" 80px [row1-end]
      [row2-start] "main content" 1fr [row2-end]
      / 1fr 1.5fr;
    }
`;

const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-rows: 2fr 1fr 0.5fr;
  @media ${media.m} {
    grid-template-rows: 1.5fr 1fr 90px;
  }
`;

const Content = styled.div.attrs({
  background: props =>
  props.background || '#FFEFE4',
  text: props =>
  props.text || '#171717',
})`
  background-color: ${props => props.background};
  color: ${props => props.text};
  min-height: 100%;
  p {
    font-size: 0.75em;
    font-weight: 400;
    letter-spacing: 0.03em;
  }
  @media ${media.m} {
    grid-area: content;
    overflow: scroll;
  }
`;

const Image = styled.div.attrs({
  background: props =>
  props.image || 'https://images.unsplash.com/photo-1536140288515-e048003af363?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00aba3b2a1824c1f8d5910a9ecc573ef&auto=format&fit=crop&w=985&q=80',
})`
  background-color: ${c_red};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all .25s ease;
  &:before {
    background-color: ${c_tan};
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    background-color: ${c_red};
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const App = ({children, background, image, text, data}) => (
  <AppContainer>
    <Helmet titleTemplate="%s · Storgē Capital" defaultTitle="Storgē Capital"></Helmet>
    <GlobalStyle />
    <Header />
    <Main>
      <Image image={image}></Image>
      <Navigation />
      <Footer />
    </Main>
    <Content background={background} text={text}>
      {children}
    </Content>
  </AppContainer>
);

export default App;

