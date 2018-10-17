import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';

const PageTitleContainer = styled.div.attrs({
  background: props =>
  props.background || '#FFEFE4',
  text: props =>
  props.text || '#171717',
})`
  background-color: ${props => props.background};
  color: ${props => props.text};
  height: 80px;
  display: grid;
  align-items: center;
  font-size: 24px;
  padding: 0 16px;
  @media ${media.m} {
    padding: 0 64px;
  }
`;

const PageTitle = ({title, background, text}) => (
  <PageTitleContainer background={background} text={text}>
    {title}
  </PageTitleContainer>
);

export default PageTitle;