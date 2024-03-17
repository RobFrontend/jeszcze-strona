import { Fade } from "react-awesome-reveal";

import Hero from "../ui/Hero";
import StyledHeroContent from "../ui/StyledHeroContent";
import Heading from "../ui/Heading";
import Features from "../ui/Features";
import styled from "styled-components";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

const SectionKontakt = styled.section`
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 150%;
  background-position: center;
  background-size: cover;
  background-position: top;
`;

const KontaktBox = styled.div`
  display: grid;
  grid-template-columns: 30fr 70fr;
  gap: 4.8rem;
  padding: 3.2rem;
  justify-items: center;
  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    padding: 1.8rem;
  }
`;

const IMGkontakt = styled.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  filter: grayscale(0.1);
  @media (max-width: 48em) {
    max-width: 60%;
  }
`;
const KontaktTextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.2rem;
`;

const KontaktHeadings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const KontaktLink = styled(Link)`
  color: var(--font-verylight-dark);

  &:hover {
    color: var(--font-light-dark);
  }
`;

const Pkontakt = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  align-self: end;
  text-align: justify;
`;

function Contact() {
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
              Zapraszam do kontaktu <br></br>Twoje dzieła mają szansę zajaśnieć!
            </Heading>
          </Fade>
        </StyledHeroContent>
      </Hero>
      <Features />

      <SectionKontakt>
        <Container>
          <Fade delay={250} triggerOnce>
            <Heading
              as="h2"
              style={{ marginBottom: "3.2rem", marginTop: "3.2rem" }}
            >
              Stwórzmy coś wyjątkowego
            </Heading>
            <KontaktBox>
              <IMGkontakt src="Kontakt.webp" alt="Monika" />
              <KontaktTextBox>
                <KontaktHeadings>
                  <Heading as="h3">Monika Drzazgowska</Heading>
                  <Heading as="h3">jeszczestronaalbo100@gmail.com</Heading>
                  <Heading as="h3">
                    <KontaktLink
                      to="https://www.instagram.com/jeszcze_strona_albo_sto/"
                      target="_blank"
                    >
                      jeszcze_strona_albo_sto
                    </KontaktLink>
                  </Heading>
                </KontaktHeadings>
                <Pkontakt>
                  Gotowa na współpracę! Jeśli chcesz podzielić się swoją
                  historią lub potrzebujesz recenzji, śmiało napisz do mnie.
                  Jestem dostępna pod adresem e-mail. Aby szybko się
                  skontaktować, zapraszam do wiadomości DM na moim{" "}
                  <KontaktLink
                    to="https://www.instagram.com/jeszcze_strona_albo_sto/"
                    target="_blank"
                  >
                    Instagramie
                  </KontaktLink>
                  .
                </Pkontakt>
              </KontaktTextBox>
            </KontaktBox>
          </Fade>
        </Container>
      </SectionKontakt>
    </>
  );
}

export default Contact;
