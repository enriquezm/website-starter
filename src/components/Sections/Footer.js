import React from "react";
import Section from "../Utils/Section";
import Row from "../Utils/Row";
import LightLink from "../Utils/LightLink";
import FeatherIcon from "feather-icons-react";

const Footer = props => (
  <Section bgColor={props.bgColor}>
    <Row justifyContent="space-between">
      <div>
        <Row>
          <li>
            <LightLink href="#">Link 1</LightLink>
          </li>
          <li>
            <LightLink href="#">Link 2</LightLink>
          </li>
          <li>
            <LightLink href="#">Link 3</LightLink>
          </li>
        </Row>
        <p>
          &copy; {new Date().getFullYear()} Simpo Theme, All Rights Reserved.
        </p>
      </div>
      <div>
        <Row>
          <li>
            <LightLink href="#">
              <FeatherIcon icon="twitter" />
            </LightLink>
          </li>
          <li>
            <LightLink href="#">
              <FeatherIcon icon="facebook" />
            </LightLink>
          </li>
          <li>
            <LightLink href="#">
              <FeatherIcon icon="instagram" />
            </LightLink>
          </li>
        </Row>
      </div>
    </Row>
  </Section>
);

export default Footer;
