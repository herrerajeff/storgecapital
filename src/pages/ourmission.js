import React from "react"
import App from '../components/layout';
import Wrapper from '../components/wrapper';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PageTitle from '../components/pagetitle';
import { c_tan, c_black } from "../utils/theme";

const About = ({data}) => (
  <App background={`${c_black}`} text="white" image={data.imageMission.childImageSharp.fluid.src}>
    <Helmet title="Our Mission" />
    <PageTitle title="Our Mission" background={`${c_tan}`} text={`${c_black}`} />
    <Wrapper>
      <p>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper.
      </p>
      <p>
        Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.
      </p><p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.
      </p>
    </Wrapper>
  </App>
);

export default About;

export const pageQuery = graphql`
  query {
    imageMission: file(relativePath: { eq: "storgemain.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    }
  }
`
