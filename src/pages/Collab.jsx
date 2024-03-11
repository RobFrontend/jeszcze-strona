import { Fade } from "react-awesome-reveal";
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

function Collab() {
  return (
    <>
      <Hero>
        <BackDropBlur>
          <StyledHeroContent>
            <Fade direction="down">
              <Heading as="h1" className="hero-h1">
                Jeszcze Strona Albo Sto
              </Heading>
            </Fade>
            <Fade delay={500} triggerOnce>
              <Heading as="h2" className="hero-h2">
                Współpracuję z różnymi <UseTransition />i
              </Heading>
            </Fade>
          </StyledHeroContent>
        </BackDropBlur>
      </Hero>
      <Features />
      <CollabSection>
        <Container>
          <Heading as="h2">Współprace</Heading>
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
              <LogoIMG src="LogoPapierowyKsiezyc.webp" alt="logo wydawnictwa" />
            </Fade>
            <Fade delay={700} triggerOnce>
              <LogoIMG src="LogoPhantomBooks.webp" alt="logo wydawnictwa" />
            </Fade>
            <Fade delay={800} triggerOnce>
              <LogoIMG src="LogoSpisekPisarzy.webp" alt="logo wydawnictwa" />
            </Fade>
            <Fade delay={900} triggerOnce>
              <LogoIMG src="LogoVesper.webp" alt="logo wydawnictwa" />
            </Fade>
            <Fade delay={1000} triggerOnce>
              <LogoIMG
                src="LogoWydawnictwoKobiece.webp"
                alt="logo wydawnictwa"
              />
            </Fade>
            <Fade delay={1100} triggerOnce>
              <LogoIMG src="LogoYouYa.webp" alt="logo wydawnictwa" />
            </Fade>
            <Fade delay={1200} triggerOnce>
              <LogoIMG src="LogoZnak.webp" alt="logo wydawnictwa" />
            </Fade>
          </WydawnictwaBoxes>
        </Container>
      </CollabSection>
    </>
  );
}

export default Collab;
