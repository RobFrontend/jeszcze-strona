import styled from "styled-components";
import Hero from "../ui/Hero";
import Heading from "../ui/Heading";

import { Fade } from "react-awesome-reveal";
import LinkButton from "../ui/LinkButton";
import Features from "../ui/Features";
import StyledHeroContent from "../ui/StyledHeroContent";
import { onClickScroll } from "../ui/HandleScrollTop";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Container from "../ui/Container";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
// Triple ///////////////////////////////////////////
const SectionTriple = styled.section`
  background: linear-gradient(
    to top,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 150%;
  background-position: center;
  background-size: cover;
`;

const TripleBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 6.4rem;
  gap: 3.2rem;
  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;
const TripleTextBox = styled.div`
  display: grid;
  gap: 3.2rem;
  text-align: center;
  align-items: center;
`;

const PHome = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`;

const TripleButtonBox = styled.div``;

const IMGtripleBox = styled.div`
  overflow: hidden;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2));
  @media screen and (max-width: 530px) {
    grid-row: 1;
    align-self: center;
    justify-self: center;
  }
`;
const IMGtriple = styled.img`
  transition: all 3s;
  transform: scale(1.001);
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 530px) {
    max-height: 30rem;
  }
`;
// GATUNKI //////////////////////////////////
const SectionGatunki = styled.section`
  background: linear-gradient(
    to bottom,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 150%;
  background-position: center;
  background-size: cover;
`;
const GatunkiBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const HeadingGatunki = styled.h3`
  font-size: 2.4rem;
  color: var(--font-light-dark);
  opacity: 0.2;
  padding: 0 1.8rem;
  @media screen and (max-width: 930px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.4rem;
  }
`;

const IMGgatunek = styled.img`
  width: 100%;
  opacity: 0.8;
  filter: brightness(0.9) grayscale(0.1);
  padding: 1.8rem;
  transition: all 1s;
  &:hover {
    transform: scale(1.03);
  }
`;

const ButtonBox = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 3.2rem;
  padding-bottom: 1.8rem;
  text-align: center;
`;

const SectionKontakt = styled.section`
  background: linear-gradient(
    to top,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-position: center;
  background-size: cover;
`;

const KontaktBoxes = styled.div`
  padding: 4.8rem 1.8rem;
  display: grid;
  grid-template-columns: 60fr 40fr;
  gap: 3.2rem;
  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const KontaktTextBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const KontaktButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding: 3.2rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    width: min-content;
    justify-self: center;
  }
`;

const IMGkontakt = styled.img`
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.15));

  justify-self: center;
  @media screen and (max-width: 980px) {
    max-height: 30rem;
    grid-row: 1;
  }
  @media screen and (max-width: 500px) {
    max-height: 20rem;
  }
`;

function Home() {
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
              Lubię książki, a książki lubią mnie <br></br>Recenzje z pasji do
              literatury
            </Heading>

            <HeroButtonBox>
              <LinkButton variation="dark" to="/omnie" onClick={onClickScroll}>
                O mnie
              </LinkButton>
              <LinkButton
                variation="light"
                to="/wspolpraca"
                onClick={onClickScroll}
              >
                Współpraca
              </LinkButton>
            </HeroButtonBox>
          </Fade>
        </StyledHeroContent>
      </Hero>
      <Features />
      {/* TRIPLE SECTION */}
      <SectionTriple>
        <Container>
          <Fade triggerOnce>
            <Heading as="h2" style={{ marginTop: "3.2rem" }}>
              Recenzje z JeszczeStronaAlboSto
            </Heading>
            <TripleBoxes>
              <TripleTextBox>
                <PHome>
                  Zanurz się w świat moich recenzji na JeszczeStronaAlboSto!
                  <br></br>
                  Odkryj barwne opowieści, które kocham dzielić się z
                  czytelnikami.<br></br> Kliknij poniżej, aby poznać mnie
                  lepiej.
                </PHome>

                <TripleButtonBox>
                  <LinkButton
                    variation="smallLight"
                    onClick={onClickScroll}
                    to="/omnie"
                  >
                    O mnie
                  </LinkButton>
                </TripleButtonBox>
              </TripleTextBox>
              <Fade triggerOnce>
                <IMGtripleBox>
                  <IMGtriple src="HomeTriple.webp" alt="triple" />
                </IMGtripleBox>
              </Fade>
            </TripleBoxes>
          </Fade>
        </Container>
      </SectionTriple>
      {/* GATUNKI SECTION */}
      <SectionGatunki>
        <Heading
          as="h2"
          style={{
            textAlign: "center",
            marginBottom: " 4.8rem",
            marginTop: "2.4rem",
          }}
        >
          Różnorodność gatunkowa
        </Heading>
        <Fade delay={250} triggerOnce>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div>
              <IMGgatunek src="GatunekDramat.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekErotyk.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekFantasy.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekHistoryczny.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekHorror.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekKlasyka.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekKryminal.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekObyczajowy.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekRomans.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekSciFi.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekThriller.webp" alt="gatunek" />
            </div>
            <div>
              <IMGgatunek src="GatunekYoungAdult.webp" alt="gatunek" />
            </div>
          </Carousel>
          <GatunkiBox>
            <HeadingGatunki>Dramat</HeadingGatunki>
            <HeadingGatunki>Erotyk</HeadingGatunki>
            <HeadingGatunki>Fantasy</HeadingGatunki>
            <HeadingGatunki>Historyczny</HeadingGatunki>
            <HeadingGatunki>Horror</HeadingGatunki>
            <HeadingGatunki>Klasyka</HeadingGatunki>
            <HeadingGatunki>Kryminał</HeadingGatunki>
            <HeadingGatunki>Obyczajowy</HeadingGatunki>
            <HeadingGatunki>Romans</HeadingGatunki>
            <HeadingGatunki>Sci-Fi</HeadingGatunki>
            <HeadingGatunki>Thriller</HeadingGatunki>
            <HeadingGatunki>YoungAdult</HeadingGatunki>
          </GatunkiBox>
          <ButtonBox>
            <LinkButton
              variation="smallLight"
              onClick={onClickScroll}
              to="/blog"
            >
              Sprawdź Blog
            </LinkButton>
          </ButtonBox>
        </Fade>
      </SectionGatunki>
      {/* Kontakt */}
      <SectionKontakt>
        <Container>
          <Fade triggerOnce>
            <Heading as="h2">Zapraszam do kontaktu oraz wpsółpracy</Heading>
            <KontaktBoxes>
              <KontaktTextBox>
                <div>
                  <Heading as="h4" style={{ marginBottom: "1.8rem" }}>
                    Chcesz się skontaktować ze mną lub zacząć współpracę?
                  </Heading>
                  <PHome>
                    Jeśli masz wizję współpracy lub chcesz porozmawiać o
                    możliwościach, zapraszam do odwiedzenia sekcji 'Kontakt'
                    oraz 'Współpraca'. Razem możemy stworzyć coś wyjątkowego dla
                    miłośników literatury. Czekam na Twój kontakt!
                  </PHome>
                </div>
                <KontaktButtonBox>
                  <LinkButton
                    variation="smallLight"
                    onClick={onClickScroll}
                    to="/wspolpraca"
                  >
                    Współpraca
                  </LinkButton>
                  <LinkButton
                    variation="smallDark"
                    onClick={onClickScroll}
                    to="/wspolpraca"
                  >
                    Kontakt
                  </LinkButton>
                </KontaktButtonBox>
              </KontaktTextBox>
              <IMGkontakt src="hand.webp" alt="dłoń" />
            </KontaktBoxes>
          </Fade>
        </Container>
      </SectionKontakt>
    </>
  );
}

export default Home;
