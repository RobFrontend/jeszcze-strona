import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFeatures = styled.div`
  padding: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
  box-shadow: var(--shadow-md);
`;

const IMG = styled.img`
  max-height: 6rem;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.2)) grayscale(0.6)
    brightness(0.9);
  transition: all 0.5s;
  &:hover {
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.4)) grayscale(0.4)
      brightness(0.95);
  }
`;

function Features() {
  return (
    <StyledFeatures>
      <Fade triggerOnce>
        <AttentionSeeker triggerOnce>
          <Link
            to="https://www.instagram.com/jeszcze_strona_albo_sto"
            target="_blank"
          >
            <IMG src="IG.webp" alt="instagram logo" />
          </Link>
        </AttentionSeeker>
        <AttentionSeeker delay={100} triggerOnce>
          <Link
            to="https://lubimyczytac.pl/profil/2120761/jeszcze-strona"
            target="_blank"
          >
            <IMG src="LC.webp" alt="lubimyczytać logo" />
          </Link>
        </AttentionSeeker>
        <AttentionSeeker delay={200} triggerOnce>
          <Link
            to="https://www.goodreads.com/user/show/175187972-jeszcze-strona-albo-sto"
            target="_blank"
          >
            <IMG src="GR.webp" alt="good reviewslogo" />
          </Link>
        </AttentionSeeker>
        <AttentionSeeker delay={300} triggerOnce>
          <Link
            to="https://www.tiktok.com/@jeszcze_strona_albo_sto"
            target="_blank"
          >
            <IMG src="TK.webp" alt="tiktok logo" />
          </Link>
        </AttentionSeeker>
      </Fade>
    </StyledFeatures>
  );
}

export default Features;
