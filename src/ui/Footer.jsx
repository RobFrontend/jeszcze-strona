import styled from "styled-components";
import LogoButton from "./LogoButton";
import { Fade, Slide } from "react-awesome-reveal";
import { Link, NavLink } from "react-router-dom";
import { onClickScroll } from "./HandleScrollTop";

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;

    background-image: url("FooterBG.webp");
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
  }
`;

const FooterContentBox = styled.div`
  margin: 0 auto;
  padding: 6.4rem 3.2rem 1.8rem;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
`;

const FooterMenu = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.6rem;
  justify-content: center;
  justify-items: center;
  color: var(--font-medium-dark);
  font-weight: 300;
`;

const Pmenu = styled.p`
  margin-bottom: 0.6rem;
`;

const FooterCopy = styled.p`
  font-size: 1.2rem;
  opacity: 0.5;
  font-weight: 600;
  text-align: center;
  color: var(--font-verylight-dark);
`;

const StyledFooterNavLink = styled(NavLink)`
  color: var(--font-medium-dark);
`;
const StyledFooterLink = styled(Link)`
  color: var(--font-medium-dark);
`;

function Footer() {
  return (
    <StyledFooter>
      <Fade triggerOnce>
        <FooterContentBox>
          <Fade direction="down">
            <LogoButton />
          </Fade>
          <Fade delay={500} triggerOnce>
            <FooterMenu>
              <div>
                <Pmenu>
                  <StyledFooterNavLink to="/blog" onClick={onClickScroll}>
                    Blog
                  </StyledFooterNavLink>
                </Pmenu>
                <Pmenu>
                  <StyledFooterNavLink to="/wspolpraca" onClick={onClickScroll}>
                    Współpraca
                  </StyledFooterNavLink>
                </Pmenu>
              </div>
              <div>
                <Pmenu>
                  <StyledFooterNavLink to="/omnie" onClick={onClickScroll}>
                    O mnie
                  </StyledFooterNavLink>
                </Pmenu>
                <Pmenu>
                  <StyledFooterNavLink to="/kontakt" onClick={onClickScroll}>
                    Kontakt
                  </StyledFooterNavLink>
                </Pmenu>
              </div>
              <div>
                <Pmenu>E-mail: jeszczestronaalbo100@gmail.com</Pmenu>
                <Pmenu>
                  Instagram:{" "}
                  <StyledFooterLink
                    to="https://www.instagram.com/jeszcze_strona_albo_sto/"
                    target="_blank"
                  >
                    jeszcze_strona_albo_sto
                  </StyledFooterLink>
                </Pmenu>
              </div>
            </FooterMenu>
          </Fade>
          <div>
            <Slide triggerOnce>
              <FooterCopy>
                &copy; {new Date().getFullYear()} JeszczeStronaAlboSto
              </FooterCopy>
            </Slide>
            <Slide triggerOnce direction="right">
              <FooterCopy>By RobFrontend</FooterCopy>
            </Slide>
          </div>
        </FooterContentBox>
      </Fade>
    </StyledFooter>
  );
}

export default Footer;
