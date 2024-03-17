import styled from "styled-components";
import Hero from "../ui/Hero";
import Heading from "../ui/Heading";
import BackDropBlur from "../ui/BackDropBlur";
import { Fade } from "react-awesome-reveal";
import LinkButton from "../ui/LinkButton";
import Features from "../ui/Features";
import StyledHeroContent from "../ui/StyledHeroContent";

const HeroButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9.6rem;
  margin-bottom: 9.6rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 4.8rem;
  }
`;

function Home() {
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
              Lubię książki, a książki lubią mnie <br></br>Recenzje z pasji do
              literatury
            </Heading>

            <HeroButtonBox>
              <LinkButton variation="dark" to="/omnie">
                O mnie
              </LinkButton>
              <LinkButton variation="light" to="/wspolpraca">
                Współpraca
              </LinkButton>
            </HeroButtonBox>
          </Fade>
        </StyledHeroContent>
        {/* </BackDropBlur> */}
      </Hero>
      <Features />
    </>
  );
}

export default Home;
