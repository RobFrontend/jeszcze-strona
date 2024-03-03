import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 9.6rem;
      text-transform: capitalize;

      color: var(--font-dark-white);
      font-family: "Clicker Script", cursive;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 5.2rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3.2rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.4rem;
      color: var(--font-dark-dark);
    `}
`;

export default Heading;
