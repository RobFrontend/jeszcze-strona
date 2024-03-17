import { Fade } from "react-awesome-reveal";

import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import Features from "../ui/Features";
import BloxBoxes from "../features/blog/BloxBoxes";
import { useArticles } from "../features/blog/useArticles";
import LoaderFull from "../ui/LoaderFull";

function Blog() {
  let { isLoading } = useArticles();
  if (isLoading) return <LoaderFull />;
  return (
    <>
      <Hero>
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
              Zapraszam do odkrywania świata literatury razem ze mną<br></br>
              Przygotuj się na recenzje, inspiracje i wiele więcej!
            </Heading>
          </Fade>
        </StyledHeroContent>
      </Hero>
      <Features />
      <BloxBoxes />
    </>
  );
}

export default Blog;
