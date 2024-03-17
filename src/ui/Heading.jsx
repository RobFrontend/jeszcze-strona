import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 9.6rem;
      text-transform: capitalize;
      color: var(--font-dark-white);
      font-family: "Clicker Script", cursive;
      margin-bottom: 2.4rem;
      @media screen and (max-width: 935px) {
        font-size: 8rem;
      }

      @media screen and (max-width: 615px) {
        font-size: 7.2rem;
      }
      @media screen and (max-width: 515px) {
        font-size: 6.2rem;
      }
      @media screen and (max-width: 430px) {
        font-size: 5.2rem;
      }
      @media screen and (max-width: 350px) {
        font-size: 4.2rem;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 5.2rem;
      color: var(--font-light-dark);
      line-height: 1.2;
      @media screen and (max-width: 615px) {
        font-size: 4.2rem;
      }
      @media screen and (max-width: 515px) {
        font-size: 3.6rem;
      }
      @media screen and (max-width: 430px) {
        font-size: 3.2rem;
      }
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3.2rem;
      color: var(--font-light-dark);
      letter-spacing: -1.5px;
      line-height: 1.05;
      @media screen and (max-width: 430px) {
        font-size: 2.4rem;
      }
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.4rem;
      letter-spacing: -1px;
      color: var(--font-medium-dark);
      @media screen and (max-width: 430px) {
        font-size: 2rem;
      }
    `}
`;

export default Heading;
