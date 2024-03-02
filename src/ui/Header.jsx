import { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
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
    box-shadow: var(--shadow-lg);
  }

  &:active,
  &.active {
    color: var(--font-verylight-dark);
    border-bottom: 1px solid var(--font-light-dark);
  }
`;

const Logo = styled.button`
  font-family: "Clicker Script", cursive;
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--font-verylight-dark);
  filter: drop-shadow(5px 5px 15px var(--font-medium-dark));
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function Header() {
  const handleClickScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  console.log(window);
  return (
    <StyledHeader>
      <Nav>
        <Slide direction="left" triggerOnce>
          <Logo onClick={handleClickScroll}>JeszczeStronaAlboSto</Logo>
        </Slide>
      </Nav>
      <Slide direction="right" triggerOnce>
        <Nav>
          <StyledNavLink to="/home">Strona Główna</StyledNavLink>
          <StyledNavLink to="/omnie">O Mnie</StyledNavLink>
          <StyledNavLink to="/blog">Blog</StyledNavLink>
          <StyledNavLink to="/wspolpraca">Współpraca</StyledNavLink>
          <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
        </Nav>
      </Slide>
    </StyledHeader>
  );
}

export default Header;
