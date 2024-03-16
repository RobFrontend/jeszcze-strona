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
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
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
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const ImgArt = styled.img`
  width: 100%;
  border-radius: var(--border-radius-sm);
  @media screen and (max-width: 1023px) {
    display: none;
  }
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

function ArticleBox({ article }) {
  const {
    id: articleID,
    created_at: dataPostu,
    tytul,
    wydawnictwo,
    autor,
    gatunek,
    tekst,
    linkig,
    linklc,
    img,
  } = article;
  return (
    <Container>
      <Fade triggerOnce>
        <div
          style={{
            background: `linear-gradient(to bottom right, rgb(242, 242, 241), rgba(242,242,241), rgba(242,242,241, 0.5)),  url(${img})`,
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
              <Heading as="h3">{tytul}</Heading>
            </TitleArt>
            <DataArt>{dataPostu.slice(0, 10)}</DataArt>
            <ArtContent>
              <TextArt>{tekst}</TextArt>
              <ImgBox>
                <ImgArt src={img} alt="image" />
                <TextGatunek>Gatunek:</TextGatunek>
                <TextGatunek>{gatunek}</TextGatunek>
              </ImgBox>
            </ArtContent>
            <Heading as="h4">Autor: {autor}</Heading>
            <Heading as="h4">Wydawnictwo: {wydawnictwo}</Heading>

            <ArtLink to={linkig} target="_blank">
              Instagram
            </ArtLink>
            <ArtLink to={linklc} target="_blank">
              Lubimy Czytać
            </ArtLink>
          </ArtBox>
        </div>
      </Fade>
    </Container>
  );
}

export default ArticleBox;
