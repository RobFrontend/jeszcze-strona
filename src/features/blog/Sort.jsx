import styled from "styled-components";
import Container from "../../ui/Container";
import { Fade, Slide } from "react-awesome-reveal";

const SortBoxes = styled.div`
  padding-top: 2.4rem;
  padding-bottom: 4.8rem;
`;

const SortFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  justify-content: space-between;
  align-items: center;
`;

const TextSort = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

function Sort() {
  return (
    <Container>
      <Fade direction="right" delay={1000} triggerOnce>
        <SortBoxes>
          <SortFlex>
            <div>
              <label>Data</label>

              <select>
                <option>Najnowsze</option>
                <option>Najstarsze</option>
              </select>
            </div>
            <div>
              <label>Gatunek</label>
              <select>
                <option>Wszystkie</option>
                <option>Dramat</option>
                <option>Erotyk</option>
                <option>Fantasy</option>
                <option>Historyczny</option>
                <option>Horror</option>
                <option>Klasyka</option>
                <option>Kryminał</option>
                <option>Obyczajowy</option>
                <option>Romans</option>
                <option>Sci-Fi</option>
                <option>Thriller</option>
                <option>YoungAdult</option>
              </select>
            </div>

            <input type="text" placeholder="Autor..." />
            <input type="text" placeholder="Wydawnictwo..." />
          </SortFlex>
        </SortBoxes>
      </Fade>
    </Container>
  );
}

export default Sort;
