import { Fade } from "react-awesome-reveal";
import BackDropBlur from "../ui/BackDropBlur";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import Features from "../ui/Features";
import styled from "styled-components";
import ArticleBox from "../features/blog/ArticleBox";
import Sort from "../features/blog/Sort";

const BlogBoxes = styled.section`
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
`;

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
          </Fade>
        </StyledHeroContent>
        {/* </BackDropBlur> */}
      </Hero>
      <Features />
      <BlogBoxes>
        <Sort />
        <ArticleBox />
        <ArticleBox />
      </BlogBoxes>
    </>
  );
}

export default Blog;
