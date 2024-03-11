import styled from "styled-components";

const StyledHero = styled.div`
  min-height: 90vh;
  overflow: hidden;
  position: relative;
  background: url("HeroBG.webp");
  background-position: bottom;
  background-size: cover;
  display: grid;
`;

function Hero({ children }) {
  return <StyledHero id="section-1">{children}</StyledHero>;
}

export default Hero;
