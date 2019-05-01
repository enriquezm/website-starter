import React from "react";
import Section from "../Utils/Section";
import Button from "../Utils/Button";
import styled from "styled-components";

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Feature = styled.div`
  text-align: left;
  width: 100%;
  @media (min-width: 768px) {
    text-align: ${props => props.aligned};
    width: 45%;
  }
`;

const Features = props => (
  <Section center bgColor={props.bgColor}>
    <h2>Features</h2>
    <p>This is what we offer.</p>
    <FeatureContainer>
      <Feature aligned="right">
        <h3>Feature 1</h3>
        <p>Here are some details for this feature.</p>
        <Button href="#">Learn More</Button>
      </Feature>
      <Feature aligned="left">
        <h3>Feature 2</h3>
        <p>Here are some details for this feature.</p>
        <Button href="#">Learn More</Button>
      </Feature>
    </FeatureContainer>
  </Section>
);

export default Features;
