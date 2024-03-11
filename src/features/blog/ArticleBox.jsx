import styled from "styled-components";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ArtBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.8rem;
  padding: 2.4rem;
  position: relative;
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

const DataArt = styled.span`
  font-size: 1.2rem;
  justify-self: right;
  align-self: start;
  position: absolute;
  top: 12px;
  right: 24px;
  opacity: 0.5;
`;

const TitleArt = styled.div`
  grid-column: 1/-1;
`;

const ArtContent = styled.div`
  display: grid;
  grid-template-columns: 70fr 30fr;
  grid-column: 1/-1;
  gap: 1.8rem;
`;

const TextArt = styled.p`
  text-align: justify;
  font-size: 1.8rem;
  font-family: "Lora", serif;
  line-height: 1.5;
`;

const ImgBox = styled.div`
  align-self: center;
  justify-self: center;
`;

const TextGatunek = styled.p`
  text-align: center;
  font-size: 1.4rem;
  opacity: 0.8;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const ImgArt = styled.img`
  width: 100%;
  border-radius: var(--border-radius-sm);
`;

const ArtLink = styled(Link)`
  justify-self: start;
  font-size: 1.6rem;
  border-bottom: 1px solid var(--font-medium-dark);
  padding: 0.8rem;
  padding-bottom: 0.7rem;
  color: var(--font-medium-dark);
  font-weight: 400;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    border-bottom: 1px solid transparent;
    border-radius: var(--border-radius-tiny);
    box-shadow: var(--shadow-md);
  }
`;

function ArticleBox() {
  return (
    <Container>
      <Fade triggerOnce>
        <div
          style={{
            background: `linear-gradient(to bottom right, rgb(242, 242, 241), rgba(242,242,241), rgba(242,242,241, 0.5)),  url("ImageArt.webp")`,
            backgroundSize: `cover`,
            backgroundPosition: "center",
            backdropFilter: "blur(5px)",
            overflow: "hidden",
            borderRadius: `var(--border-radius-lg)`,
            marginBottom: `4.8rem`,
            boxShadow: `var(--shadow-md)`,
          }}
        >
          <ArtBox>
            <TitleArt>
              <Heading as="h3">Dziedzictwo Usherów</Heading>
            </TitleArt>
            <DataArt>31-10-2023</DataArt>
            <ArtContent>
              <TextArt>
                Jak nie chcecie sobie przerywać po 3 stronach to przeczytajcie
                najpierw opowiadanie Poe. Nie jest niezbędne, ale nieznajomość
                jego treści będzie Was niesamowicie uwierać. Ostatecznie to
                opowiadanie staje się pełniejsze dzięki zabiegom fabularnym
                książki. Skazywanie chłopaków na śmiertelnie niebezpieczne
                przygody to chyba takie hobby McCammona. No dobra. Dla
                wyrównania sił czasem daje im coś ekstra co może pomóc, albo
                przeszkodzić. Temu da porozumiewanie się za pomocą myśli, ale
                nadzieje go na szpony zwyrodniałej porywaczki. Innym bystry,
                ciekawski umysł i zamknie w zaściankowej społeczności i losowym
                wieku. Tym razem dał chłopakowi kij. O przepraszam xD Różdżkę. A
                z kim ma konkurować? Z diabłem. O, w sumie, losy świata xD
                sprawiedliwie co nie? Historia zaczyna się od zupełnie innego
                chłopca który zgubił się kiedyś w „twierdzy”. Aktualnie jest już
                dorosły i w lekkiej ruinie. Wydawca nie chce kupić jego nowej
                książki, nieuleczalna choroba nieubłaganie się nasila, ukochana
                nie żyje i wygląda na to że jego ojciec jest następny w kolejce.
                Nie żeby Riksowi Usherowi było przykro z tego powodu, po prostu
                przez to musi odwiedzić rodzinną posiadłość której szczerze
                nienawidzi. Tymczasem od stu lat w miasteczku, nieopodal
                Usherlandu pojawiają się dziwne postacie. Pantera chodząca na
                dwóch łapach, wszystkowiedzący dziad z kosturem i postrach
                dzieci - Dyniowaty. Ot, legendy. Tylko że ludzie widują z deczka
                humanoidalnego, drapieżnego kota i po coś niosą dary dla dziada
                alias Króla Gór. Do tego zaginął brat New, a chłopiec widział
                kto go zabrał i nikt nie przekona go że mu się przywidziało. Z
                bezczynnością lokalnej społeczności w sprawie zaginionych dzieci
                - nikt nawet nie zgłasza ich zaginięcia - nie może się pogodzić
                Raven, dziennikarka z miasta. Losy Riksa, New i Raven krzyżują
                się w drodze do odkrycia tajemnic rodu Usherów i zaginionych
                dzieci. Mamy tu mnogość perspektyw i czasów akcji. Nie jest
                jednak jakoś szczególnie skomplikowana. Na początku jakoś
                szalenie nie angażuje, ale po setce już robi się interesująco, a
                po połowie nie można się oderwać.
              </TextArt>
              <ImgBox>
                <ImgArt src="ImageArt.webp" alt="image" />
                <TextGatunek>Gatunek:</TextGatunek>
                <TextGatunek>Horror</TextGatunek>
              </ImgBox>
            </ArtContent>
            <Heading as="h4">Autor: Robert McCammon</Heading>
            <Heading as="h4">Wydawnictwo: Vesper</Heading>

            <ArtLink
              to="https://www.instagram.com/p/CzFErbXtIVN/"
              target="_blank"
            >
              Instagram
            </ArtLink>
            <ArtLink
              to="https://www.instagram.com/p/CzFErbXtIVN/"
              target="_blank"
            >
              Lubimy Czytać
            </ArtLink>
          </ArtBox>
        </div>
      </Fade>
    </Container>
  );
}

export default ArticleBox;
