import React from "react"
import App from '../components/layout';
import Wrapper from '../components/wrapper';
import PageTitle from '../components/pagetitle';
import SubTitle from '../components/subtitle';
import { c_tan, c_red, c_black } from "../utils/theme";
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const About = ({data}) => (
  <App background={`${c_tan}`} image={data.imageWWA.childImageSharp.fluid.src}>
    <Helmet title="Who We Are" />
    <PageTitle title="Who We Are" background={`${c_red}`} text='#FFFFFF' />
    <Wrapper>
      <p>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper.
      </p>
      <p>
        Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
      </p>
    </Wrapper>
    <SubTitle title="The Team" background={`${c_black}`} text="white" />
    <Wrapper wrapperbackground='#EEE' wrappertext={`${c_black}`} >
      <p>This is where the team images will go</p>
    </Wrapper>
  </App>
);

export default About;

export const pageQuery = graphql`
  query {
    imageWWA: file(relativePath: { eq: "storgewhoweare.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    }
  }
`