import { Fade, Zoom } from "react-awesome-reveal";
import BackDropBlur from "../ui/BackDropBlur";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import UseTransition from "../features/collab/useTransition";
import Features from "../ui/Features";
import Container from "../ui/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoIMG = styled.img`
  max-height: 10rem;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) grayscale(0.5)
    brightness(0.8);

  @media (max-width: 50em) {
    max-height: 7rem;
  }
  @media (max-width: 35em) {
    max-height: 5rem;
  }
`;

const WydawnictwaBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  padding-bottom: 4.8rem;
  padding-top: 3.2rem;
`;

const CollabSection = styled.section`
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 150%;
  background-position: center;
`;

const CollabInvite = styled.div`
  margin-bottom: 6.4rem;
`;

const CollabInviteBox = styled.div`
  display: grid;
  grid-template-columns: 70fr 30fr;
  gap: 3.2rem;
  justify-items: center;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`;

const KontaktLink = styled(Link)`
  color: var(--font-verylight-dark);

  &:hover {
    color: var(--font-light-dark);
  }
`;

const Pkontakt = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  align-self: start;
  padding-left: 1.8rem;
  @media (max-width: 35em) {
    font-size: 1.8rem;
    text-align: justify;
  }
`;

const IMGtransparent = styled.img`
  max-height: 30rem;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.4)) brightness(0.95);
  align-self: center;
  opacity: 0.95;
  transition: all 1s;
  @media (max-width: 35em) {
    max-height: 20rem;
  }
  &:hover {
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.4)) brightness(1);
    opacity: 1;
    transform: scale(1.05);
  }
`;

function Collab() {
  return (
    <>
      <Hero>
        {/* <BackDropBlur> */}
        <StyledHeroContent>
          <Fade direction="down">
            <Heading as="h1" className="hero-h1">
              Jeszcze Strona Albo Sto
            </Heading>
          </Fade>
          <Fade delay={500} triggerOnce>
            <Heading as="h2" className="hero-h2">
              Współpracuję z <UseTransition />i
            </Heading>
          </Fade>
        </StyledHeroContent>
        {/* </BackDropBlur> */}
      </Hero>
      <Features />
      <Fade triggerOnce>
        <CollabSection>
          <Container>
            <CollabInvite>
              <Heading
                as="h2"
                style={{ marginBottom: " 4.8rem", marginTop: "2.4rem" }}
              >
                Zapraszam do współpracy
              </Heading>
              <CollabInviteBox>
                <Pkontakt>
                  Otwarta na różnorodne współprace! <br></br>Jeśli jesteś
                  autorem, wydawnictwem lub księgarnią poszukującą możliwości
                  promocji lub recenzji - jestem tutaj dla Ciebie.<br></br>{" "}
                  Skontaktuj się ze mną poprzez wiadomość DM na{" "}
                  <KontaktLink
                    to="https://www.instagram.com/jeszcze_strona_albo_sto/"
                    target="_blank"
                  >
                    Instagramie{" "}
                  </KontaktLink>
                  lub napisz bezpośrednio na mój adres email:
                  jeszczestronaalbo100@gmail.com - czekam na inspirujące
                  projekty. <br></br>Razem możemy stworzyć coś wyjątkowego dla
                  miłośników literatury!
                </Pkontakt>

                <Fade direction="up" triggerOnce>
                  <IMGtransparent src="MonikaTransparent.webp" alt="Monika" />
                </Fade>
              </CollabInviteBox>
            </CollabInvite>
          </Container>
          <Container>
            <Heading
              as="h2"
              style={{ marginBottom: " 4.8rem", marginTop: "2.4rem" }}
            >
              Moje współprace
            </Heading>
            <Heading as="h3" style={{ textAlign: "center" }}>
              Księgarnie oraz wydawnictwa
            </Heading>
            <WydawnictwaBoxes>
              <Fade>
                <LogoIMG src="LogoAnimi.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={100} triggerOnce>
                <LogoIMG src="LogoBeya.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={200} triggerOnce>
                <LogoIMG src="LogoEditio.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={300} triggerOnce>
                <LogoIMG src="LogoLuna.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={400} triggerOnce>
                <LogoIMG src="LogoMediaRodzina.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={500} triggerOnce>
                <LogoIMG src="LogoNowaBasn.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={600} triggerOnce>
                <LogoIMG
                  src="LogoPapierowyKsiezyc.webp"
                  alt="logo wydawnictwa"
                />
              </Fade>
              <Fade delay={700} triggerOnce>
                <LogoIMG src="LogoPhantomBooks.webp" alt="logo wydawnictwa" />
              </Fade>

              <Fade delay={800} triggerOnce>
                <LogoIMG src="LogoVesper.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={900} triggerOnce>
                <LogoIMG
                  src="LogoWydawnictwoKobiece.webp"
                  alt="logo wydawnictwa"
                />
              </Fade>
              <Fade delay={1000} triggerOnce>
                <LogoIMG src="LogoYouYa.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={1100} triggerOnce>
                <LogoIMG src="LogoZnak.webp" alt="logo wydawnictwa" />
              </Fade>
              <Fade delay={1200} triggerOnce>
                <LogoIMG src="LogoSpisekPisarzy.webp" alt="logo wydawnictwa" />
              </Fade>
            </WydawnictwaBoxes>
            <Heading as="h3" style={{ textAlign: "center" }}>
              Autorzy
            </Heading>
            <WydawnictwaBoxes>
              <Fade delay={500} triggerOnce>
                <Heading as="h4">Katarzyna Wierzbicka</Heading>
                <Heading as="h4">Agata Konefał</Heading>
                <Heading as="h4">Marek Zychla</Heading>
              </Fade>
            </WydawnictwaBoxes>
          </Container>
        </CollabSection>
      </Fade>
    </>
  );
}

export default Collab;
