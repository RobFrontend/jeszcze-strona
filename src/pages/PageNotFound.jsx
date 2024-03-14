import { Fade, Hinge, Roll } from "react-awesome-reveal";
import BackDropBlur from "../ui/BackDropBlur";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import Header from "../ui/Header";
import Features from "../ui/Features";

function PageNotFound() {
  return (
    <>
      <Header />
      <Hero>
        {/* <BackDropBlur> */}
        <StyledHeroContent>
          <Fade direction="down">
            <Hinge triggerOnce>
              <Heading as="h1" className="hero-h1">
                Jeszcze Strona Albo Sto
              </Heading>
            </Hinge>
          </Fade>
          <Fade>
            <Heading as="h2" className="hero-h2">
              Nie znaleziono strony 😥
            </Heading>

            <Heading as="h2" className="hero-h2">
              (zły adres)
            </Heading>
          </Fade>
        </StyledHeroContent>
        {/* </BackDropBlur> */}
      </Hero>
      <Features />
    </>
  );
}

export default PageNotFound;
