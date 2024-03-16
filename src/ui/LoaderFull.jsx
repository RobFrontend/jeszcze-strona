import styled from "styled-components";

const LoaderContainer = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
`;

function LoaderFull() {
  return (
    <LoaderContainer>
      <div className="loader">
        <div className="book">
          <div className="page"></div>
          <div className="page page2"></div>
        </div>
      </div>
    </LoaderContainer>
  );
}

export default LoaderFull;
