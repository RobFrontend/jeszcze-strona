import { Fade } from "react-awesome-reveal";
import BackDropBlur from "../ui/BackDropBlur";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import UseTransition from "../features/collab/useTransition";
import Features from "../ui/Features";

const collabText = ["wydawnictwami", "autorami"];

function Collab() {
  // const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
  //   return () => clearTimeout(intervalId);
  // }, []);
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
    </>
  );
}

export default Collab;
