import { Fade } from "react-awesome-reveal";
import BackDropBlur from "../ui/BackDropBlur";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import Features from "../ui/Features";
import BloxBoxes from "../features/blog/BloxBoxes";

function Blog() {
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
              Witaj na moim blogu!
            </Heading>
            <Heading as="h3" className="hero-h3">
              Zapraszam do odkrywania świata literatury razem ze mną.
            </Heading>
            <Heading as="h3" className="hero-h3">
              Przygotuj się na recenzje, inspiracje i wiele więcej!
            </Heading>
          </Fade>
        </StyledHeroContent>
        {/* </BackDropBlur> */}
      </Hero>
      <Features />
      <BloxBoxes />
    </>
  );
}

export default Blog;
