import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoButton from "./LogoButton";
import { onClickScroll } from "./HandleScrollTop";

const StyledHeader = styled.header`
  overflow: hidden;
  padding: 1.8rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);

  background: linear-gradient(
    to bottom right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3.2rem;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--font-medium-dark);
  font-size: 1.8rem;
  padding: 0.7rem 1.7rem;
  font-weight: 600;
  border: 1px solid transparent;

  &:hover {
    opacity: 0.8;
    border: 1px solid var(--font-light-dark);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-tiny);
  }

  &:active,
  &.active {
    color: var(--font-verylight-dark);
    border-bottom: 1px solid var(--font-light-dark);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Slide direction="left" triggerOnce>
          <LogoButton />
        </Slide>
      </Nav>
      <Slide direction="right" triggerOnce>
        <Nav>
          <StyledNavLink to="/home" onClick={onClickScroll}>
            Strona Główna
          </StyledNavLink>
          <StyledNavLink to="/omnie" onClick={onClickScroll}>
            O Mnie
          </StyledNavLink>
          <StyledNavLink to="/blog" onClick={onClickScroll}>
            Blog
          </StyledNavLink>
          <StyledNavLink to="/wspolpraca" onClick={onClickScroll}>
            Współpraca
          </StyledNavLink>
          <StyledNavLink to="/kontakt" onClick={onClickScroll}>
            Kontakt
          </StyledNavLink>
        </Nav>
      </Slide>
    </StyledHeader>
  );
}

export default Header;
