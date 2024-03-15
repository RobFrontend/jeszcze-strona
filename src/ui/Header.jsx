import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoButton from "./LogoButton";
import { onClickScroll } from "./HandleScrollTop";
import { useState } from "react";

const StyledHeader = styled.header`
  overflow: hidden;
  padding: 1.8rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  height: 8rem;
  background: linear-gradient(
    to bottom right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
`;

const NavLogo = styled.nav`
  display: flex;
  gap: 3.2rem;
`;
const Nav = styled.nav`
  display: flex;
  gap: 3.2rem;
  @media screen and (max-width: 935px) {
    display: none;
  }
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

const Menu = styled.button`
  @media screen and (min-width: 935px) {
    display: none;
  }
`;

const NavMobile = styled.nav`
  /* position: absolute;
  right: 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  min-height: 95vh;
  gap: 3.2rem;
  padding: 1.8rem;
  z-index: 5;
  background-color: rgba(242, 242, 241, 0.9);
`;

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <NavLogo>
          <Slide direction="left" triggerOnce>
            <LogoButton />
          </Slide>
        </NavLogo>
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
          {window.innerWidth < 935 ? (
            <Menu onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? "Menu Opened" : "Menu Closed"}
            </Menu>
          ) : null}
        </Slide>
      </StyledHeader>
      {navOpen ? (
        <Slide direction="right">
          <NavMobile onClick={() => setNavOpen(!navOpen)}>
            <StyledNavLink
              to="/home"
              onClick={() => {
                onClickScroll();
                setNavOpen(!navOpen);
              }}
            >
              Strona Główna
            </StyledNavLink>
            <StyledNavLink
              to="/omnie"
              onClick={() => {
                onClickScroll();
                setNavOpen(!navOpen);
              }}
            >
              O Mnie
            </StyledNavLink>
            <StyledNavLink
              to="/blog"
              onClick={() => {
                onClickScroll();
                setNavOpen(!navOpen);
              }}
            >
              Blog
            </StyledNavLink>
            <StyledNavLink
              to="/wspolpraca"
              onClick={() => {
                onClickScroll();
                setNavOpen(!navOpen);
              }}
            >
              Współpraca
            </StyledNavLink>
            <StyledNavLink
              to="/kontakt"
              onClick={() => {
                onClickScroll();
                setNavOpen(!navOpen);
              }}
            >
              Kontakt
            </StyledNavLink>
          </NavMobile>
        </Slide>
      ) : null}
    </>
  );
}

export default Header;
