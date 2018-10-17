import React from "react"
import {media} from '../utils/media';
import App from '../components/layout';
import Wrapper from '../components/wrapper';
import styled from 'styled-components';
import { c_tan, c_red } from "../utils/theme";
import { graphql } from 'gatsby';


const Hero = styled.div`
  p {
    font-size: 5.5vh;
    @media ${media.m} {
      font-size: 5vw;
    }
    font-weight: 300 !important;
    letter-spacing: -0.02em !important;
    line-height: 1.4em !important;
    span {
      color: ${c_red};
    }
  }
`;

const Home = ({data}) => (
  <App background={`${c_tan}`} image={data.imageHome.childImageSharp.fluid.src}>
    <Wrapper>
      <Hero>
        <p>
          Storge Capital mobilizes underrepresented entrepreneurs through <span>equity-centered storytelling, capacity building, &amp; mentorship.</span>
        </p>
      </Hero>
    </Wrapper>
  </App>
);

export default Home;

export const pageQuery = graphql`
  query {
    imageHome: file(relativePath: { eq: "storgemain.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    }
  }
`