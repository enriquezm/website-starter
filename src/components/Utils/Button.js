import styled from "styled-components";

const Button = styled.a`
  border: 1px solid white;
  color: white;
  padding: 15px;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
  }
  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export default Button;
