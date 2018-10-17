import React from "react"
import App from '../components/layout';
import Wrapper from '../components/wrapper';
import styled from 'styled-components';
import PageTitle from '../components/pagetitle';
import { c_tan, c_red, c_black } from "../utils/theme";
import { graphql } from 'gatsby';
import { media } from '../utils/media';
import Helmet from 'react-helmet';

const Form = styled.form`
  display: grid;
  grid-template-areas:
    "name email"
    "message message"
    "submit submit";
  grid-gap: 24px;
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  input, textarea {
    border: 1px solid transparent;
    display: block;
    width: 100%;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #FFF;
    transition: all .25s ease;
    &:focus {
      border: 1px solid ${c_red};
      outline: none;
    }
  }
  input[type=submit] {
    background-color: ${c_red};
    color: white;
    padding: 1em;
    font-size: 18px;
    grid-area: submit;
    cursor: pointer;
    &:hover {
      background-color: ${c_black};
    }
  }
  div:nth-of-type(1){
    grid-area: name;
  }
  div:nth-of-type(2){
    grid-area: email;
  }
  div:nth-of-type(3){
    grid-area: message;
  }
  textarea {
    min-height: 200px;
    background-color: white;
  }
`;

const FormWrapper = styled.div`
  background-color: #EEE;
  padding: 32px 16px;
  font-size: 1em;
  @media ${media.m} {
    padding: 64px;
  }
`;

const About = ({data}) => (
  <App background='white' image={data.imageConnect.childImageSharp.fluid.src}>
    <Helmet title="Connect" />
    <PageTitle title="Connect" background={`${c_black}`} text='#FFFFFF' />
    <Wrapper>
      <p>
        Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
    </Wrapper>
    <FormWrapper>
      <Form>
        <div>
          <label>Full Name</label>
          <input type="text" id="name"/>
        </div>
        <div>
          <label>E-Mail</label>
          <input type="email" id="Email"/>
        </div>
        <div>
          <label>Message</label>
          <textarea id="Message"/>
        </div>
        <input type="submit" value="Send"></input>
      </Form>
    </FormWrapper>
  </App>
);

export default About;

export const pageQuery = graphql`
  query {
    imageConnect: file(relativePath: { eq: "storgewhoweare.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    }
  }
`