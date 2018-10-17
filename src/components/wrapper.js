import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';

const WrapperContainer = styled.div.attrs({
  background: props =>
  props.wrapperbackground || '#FFF',
  text: props =>
  props.wrappertext || '#171717',
})`
  padding: 32px 16px;
  font-size: 18px;
  line-height: 1.4em;
  background-color: ${props => props.wrapperbackground};
  color: ${props => props.wrappertext};
  @media ${media.m} {
    font-size: 24px;
    padding: 64px;
  }
`;

const Wrapper = ({children, wrapperbackground, wrappertext}) => (
  <WrapperContainer wrapperbackground={wrapperbackground} wrappertext={wrappertext}>
    {children}
  </WrapperContainer>
);

export default Wrapper;