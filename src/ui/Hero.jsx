import styled from "styled-components";
import Header from "./Header";
import Headroom from "react-headroom";
import BackDropBlur from "./BackDropBlur";

const StyledHero = styled.div`
  min-height: 90vh;
  overflow: hidden;
  position: relative;
  /* background: url("HeroBG.webp"); */
  background: url("HeroBGBlur.webp");
  background-position: bottom;
  background-size: cover;
  display: grid;
`;

function Hero({ children }) {
  return <StyledHero id="section-1">{children}</StyledHero>;
}

export default Hero;
