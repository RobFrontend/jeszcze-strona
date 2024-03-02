import styled from "styled-components";

const BackDropBlur = styled.div`
  /* display: grid; */

  backdrop-filter: blur(10px);
  background-color: transparent;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export default BackDropBlur;
