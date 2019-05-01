import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  padding: 5%;
  color: white;
  background: ${props => props.bgColor};
  text-align: ${props => (props.center ? "center" : "flex-start")};
`;

export default Section;
