import React from "react";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Hero = props => (
  <Section bgColor={props.bgColor}>
    <h2>Hello, World!</h2>
    <p>This is the hero section.</p>
    <Button href="#">Learn More</Button>
  </Section>
);

export default Hero;
