import styled from "styled-components";

const StyledHero = styled.section`
  min-height: 90vh;
  overflow: hidden;
  position: relative;
  background: url("https://images.unsplash.com/photo-1495640452828-3df6795cf69b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: bottom;
  background-size: cover;

  display: grid;
`;

function Hero({ children }) {
  return <StyledHero id="section-1">{children}</StyledHero>;
}

export default Hero;
