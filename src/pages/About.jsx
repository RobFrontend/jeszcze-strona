import { Fade } from "react-awesome-reveal";

import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Features from "../ui/Features";
import styled from "styled-components";
import Container from "../ui/Container";
import LinkButton from "../ui/LinkButton";
import { onClickScroll } from "../ui/HandleScrollTop";

const SectionAbout = styled.section`
  background: linear-gradient(
    to top,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 150%;
  background-position: center;
  background-size: cover;
  background-position: top;
`;

const SectionAboutCollab = styled.section`
  background: url("KontaktBG.webp"),
    linear-gradient(to top, var(--font-light-white), var(--font-dark-white));
  background-position: center;
  background-size: cover;
`;

const AboutBoxes = styled.div`
  display: grid;
  gap: 9.6rem;
`;

const AboutBox = styled.div`
  padding: 1.8rem;
`;

const Grid2cols = styled.div`
  display: grid;
  grid-template-columns: 65fr 35fr;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IMGomnie = styled.img`
  max-height: 40rem;
  border-radius: 1000px;
  align-self: center;
  justify-self: center;
  transition: all 0.5s;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) brightness(0.95)
    grayscale(0.1);

  &:hover {
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25)) brightness(1)
      grayscale(0);
  }
  @media screen and (max-width: 768px) {
    grid-row: 1;
    max-height: 20rem;
  }
`;

const AboutTextBox = styled.div`
  padding: 1.8rem;
  display: grid;
  gap: 1.8rem;
`;

const Pabout = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`;

const CollabFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const GatunkiBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const GatunkiContent = styled.div`
  display: grid;
  grid-template-columns: 50fr 50fr;
  gap: 4.8rem;
  padding: 1.8rem;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 1.6rem;
  justify-self: end;
`;

const LI = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: fit-content;
  padding: 0.2rem;
`;

const IMGtranGatunki = styled.img`
  max-height: 30em;
  width: auto;
  align-self: center;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1)) brightness(0.95)
    grayscale(0.1);
`;

function About() {
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
              Trochę o mnie
            </Heading>
          </Fade>
        </StyledHeroContent>
      </Hero>
      <Features />
      <SectionAbout>
        <Container>
          <AboutBoxes>
            <Fade delay={250} triggerOnce>
              <AboutBox>
                <Heading
                  as="h2"
                  style={{ marginBottom: " 4.8rem", marginTop: "2.4rem" }}
                >
                  Witajcie!
                </Heading>
                <Grid2cols>
                  <AboutTextBox>
                    <Heading as="h3">Jestem Monika</Heading>
                    <Heading as="h4">
                      A o to skupisko mojej miłości do książek
                    </Heading>
                    <Pabout>
                      Na moim kawałku internetu znajdziesz skupisko mojej
                      miłości do książek, pisanej w formie szczerych recenzji.
                      Od lat wiernie oddaję się pasji czytania i eksploracji
                      literackiego świata. Moje recenzje są jak rozmowy z
                      najlepszymi przyjaciółmi- luźne, autentyczne i pełne
                      emocji.
                    </Pabout>
                    <Pabout>
                      Na moim bookstagramowym profilu znajdziesz mieszankę
                      różnorodnych gatunków literackich. Od zapierających dech w
                      piersiach podróży przez fantastyczne światy po sercowe
                      romanse, mroczne thrillery i emocjonujące kryminały. Nie
                      brakuje również historii przesiąkniętych dreszczykiem
                      grozy czy młodzieżowych opowieści odkrywających tajemnice
                      życia.
                    </Pabout>
                  </AboutTextBox>
                  <IMGomnie src="OmnieMonika.webp" alt="Monia" />
                </Grid2cols>
              </AboutBox>
            </Fade>
          </AboutBoxes>
        </Container>
      </SectionAbout>
      <SectionAboutCollab>
        <Container>
          <AboutBoxes>
            <AboutBox>
              <Fade triggerOnce direction="left">
                <CollabFlex>
                  <Heading
                    as="h3"
                    style={{
                      marginBottom: "1.2rem",
                      marginTop: "1.8rem",
                    }}
                  >
                    Jestem otwarta na współpracę
                  </Heading>
                  <Pabout>
                    Jestem otwarta na współpracę z autorami, wydawnictwami oraz
                    księgarniami, które pragną podzielić się swoimi dziełami.
                    Moje recenzje nie tylko oddają esencję książki, ale także
                    zachęcają czytelników do odkrywania nowych przygód
                    literackich.
                  </Pabout>
                  <Pabout>
                    Jeśli jesteś autorem z pasją do pisania, wydawnictwem
                    poszukującym promocji lub księgarnią chcącą dotrzeć do
                    nowych czytelników, to właściwe miejsce! Skontaktuj się ze
                    mną, a wspólnie stworzymy coś wyjątkowego dla miłośników
                    literatury.
                  </Pabout>
                  <LinkButton
                    variation="smallDark"
                    to="/wspolpraca"
                    onClick={onClickScroll}
                    style={{
                      width: "min-content",
                      alignSelf: "center",
                      marginTop: "1.8rem",
                    }}
                  >
                    Współpraca
                  </LinkButton>
                </CollabFlex>
              </Fade>
            </AboutBox>
          </AboutBoxes>
        </Container>
      </SectionAboutCollab>
      <SectionAbout>
        <Container>
          <AboutBoxes>
            <AboutBox>
              <Fade triggerOnce direction="right">
                <GatunkiBox>
                  <Heading as="h4" style={{ textAlign: "center" }}>
                    Przekrój gatunków, który znajdziesz na moim profilu, to:
                  </Heading>
                  <GatunkiContent>
                    <UL>
                      <LI>Fantastyka</LI>
                      <LI>Science Fiction</LI>
                      <LI>Romans</LI>
                      <LI>Erotyk</LI>
                      <LI>Historyczne</LI>
                      <LI>Thriller</LI>
                      <LI>Kryminał</LI>
                      <LI>Klasyka</LI>
                      <LI>Dramat</LI>
                      <LI>Obyczajowy</LI>
                      <LI>Horror</LI>
                      <LI>Young Adult</LI>
                    </UL>
                    <Fade delay={500} triggerOnce>
                      <IMGtranGatunki src="TranGatunki.webp" alt="photo tran" />
                    </Fade>
                  </GatunkiContent>
                  <Heading as="h4" style={{ textAlign: "center" }}>
                    Zapraszam Cię do świata książek, gdzie każda strona to nowa
                    przygoda!
                  </Heading>
                  <LinkButton
                    variation="smallLight"
                    to="/blog"
                    onClick={onClickScroll}
                    style={{
                      width: "min-content",
                      alignSelf: "center",
                      marginTop: "1.8rem",
                    }}
                  >
                    Blog
                  </LinkButton>
                </GatunkiBox>
              </Fade>
            </AboutBox>
          </AboutBoxes>
        </Container>
      </SectionAbout>
    </>
  );
}

export default About;
