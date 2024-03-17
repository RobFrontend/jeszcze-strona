import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const varations = {
  dark: css`
    background-color: var(--font-dark-dark);
    color: var(--font-medium-white);
    filter: drop-shadow(5px 5px 15px var(--font-dark-dark));
  `,
  light: css`
    background-color: var(--font-medium-white);
    color: var(--font-dark-dark);
    filter: drop-shadow(5px 5px 15px var(--font-dark-dark));
  `,
  smallDark: css`
    background-color: var(--font-dark-dark);
    color: var(--font-medium-white);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.2));
  `,
  smallLight: css`
    background-color: var(--font-medium-white);
    color: var(--font-dark-dark);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.2));
  `,
};

const LinkButton = styled(NavLink)`
  padding: 1.2rem 3.2rem;
  text-transform: uppercase;
  font-size: 2.4rem;
  letter-spacing: 1px;

  border-radius: var(--border-radius-lg);
  font-weight: 600;
  &:hover {
    opacity: 0.8;
  }
  ${(props) => varations[props.variation]}
`;

export default LinkButton;
