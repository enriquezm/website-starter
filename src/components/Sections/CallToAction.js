import React from "react";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const CallToAction = props => (
  <Section center bgColor={props.bgColor}>
    <h2>Call to Action!</h2>
    <Button href="#">Join Now</Button>
  </Section>
);

export default CallToAction;
