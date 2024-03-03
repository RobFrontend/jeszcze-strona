import styled from "styled-components";
import { onClickScrollSmooth } from "./HandleScrollTop";

const Logo = styled.button`
  font-family: "Clicker Script", cursive;
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--font-medium-dark);
  filter: drop-shadow(5px 5px 15px var(--font-verylight-dark));
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: var(--font-verylight-dark);
  }
`;

function LogoButton() {
  return <Logo onClick={onClickScrollSmooth}>JeszczeStronaAlboSto</Logo>;
}

export default LogoButton;
