import styled from "styled-components";

const LightLink = styled.a`
  color: white;
  opacity: 0.5;
  text-decoration: none;
  transition: all 0.3s;
  :hover {
    opacity: 1;
    transition: all 0.2s;
  }
`;

export default LightLink;
