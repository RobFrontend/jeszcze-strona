import { Fade } from "react-awesome-reveal";
import BackDropBlur from "../ui/BackDropBlur";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Features from "../ui/Features";

function About() {
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
              Trochę o mnie
            </Heading>
          </Fade>
        </StyledHeroContent>
        {/* </BackDropBlur> */}
      </Hero>
      <Features />
    </>
  );
}

export default About;
