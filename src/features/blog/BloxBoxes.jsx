import styled from "styled-components";
import { useArticles } from "./useArticles";

import ArticleBox from "./ArticleBox";
import LoaderFull from "../../ui/LoaderFull";
import { useState } from "react";
import Container from "../../ui/Container";
import { Fade } from "react-awesome-reveal";

const StyledBlogBoxes = styled.section`
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
`;
const BTNmoreBox = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
const BTNmore = styled.button`
  cursor: pointer;
  background: var(--font-light-dark);
  color: var(--font-dark-white);
  border: none;
  box-shadow: var(--shadow-sm);
  padding: 1.2rem 2.4rem;
  font-size: 2.4rem;
  font-family: inherit;
  text-transform: uppercase;
  border-radius: var(--border-radius-md);
  &:hover {
    opacity: 0.8;
    box-shadow: var(--shadow-md);
  }
`;

// sort
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

function BloxBoxes() {
  const [more, setMore] = useState(3);
  let { isLoading, articles } = useArticles();

  //////////////////////////////////////////////////////////////////////////
  // sort
  const [dataSort, setDataSort] = useState("Najnowsze");
  const [gatunekSort, setGatunekSort] = useState("Wszystkie");

  if (articles) {
    // data
    if (dataSort === "Najnowsze")
      articles.sort((a, b) => b.created_at.localeCompare(a.created_at));
    if (dataSort === "Najstarsze")
      articles.sort((a, b) => a.created_at.localeCompare(b.created_at));
    //gatunek
    if (gatunekSort !== "Wszystkie") {
      articles = articles.filter((article) =>
        article.gatunek.includes(gatunekSort)
      );
    }
  }

  // search autor
  const [searchAutor, setSearchAutor] = useState("");
  function findAutor(e) {
    e.preventDefault();
    setSearchAutor("");
  }
  if (
    articles &&
    articles.filter((article) =>
      article.autor.toLowerCase().trim().includes(searchAutor)
    )
  )
    articles = articles.filter((article) =>
      article.autor.toLowerCase().trim().includes(searchAutor)
    );
  // search wydawnictwo
  const [searchWydawnictwo, setSearchWydawnictwo] = useState("");
  function findWydawnictwo(e) {
    e.preventDefault();
    setSearchWydawnictwo("");
  }
  if (
    articles &&
    articles.filter((article) =>
      article.wydawnictwo.toLowerCase().trim().includes(searchWydawnictwo)
    )
  )
    articles = articles.filter((article) =>
      article.wydawnictwo.toLowerCase().trim().includes(searchWydawnictwo)
    );
  ////////////////////////////////////////////////////////////////////////////////

  if (isLoading) return <LoaderFull />;
  if (!articles) return <LoaderFull />;

  return (
    <StyledBlogBoxes>
      <Container>
        <Fade direction="right" delay={1000} triggerOnce>
          <SortBoxes>
            <SortFlex>
              <div>
                <label>Data</label>

                <select
                  value={dataSort}
                  onChange={(e) => setDataSort(e.target.value)}
                >
                  <option value="Najnowsze">Najnowsze</option>
                  <option value="Najstarsze">Najstarsze</option>
                </select>
              </div>
              <div>
                <label>Gatunek</label>
                <select
                  value={gatunekSort}
                  onChange={(e) => {
                    setGatunekSort(e.target.value);
                  }}
                >
                  <option value="Wszystkie">Wszystkie</option>
                  <option value="Dramat">Dramat</option>
                  <option value="Erotyk">Erotyk</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Historyczny">Historyczny</option>
                  <option value="Horror">Horror</option>
                  <option value="Klasyka">Klasyka</option>
                  <option value="Kryminał">Kryminał</option>
                  <option value="Obyczajowy">Obyczajowy</option>
                  <option value="Romans">Romans</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Thriller">Thriller</option>
                  <option value="YoungAdult">YoungAdult</option>
                </select>
              </div>
              <form onSubmit={findAutor}>
                <input
                  type="text"
                  placeholder="Autor..."
                  value={searchAutor}
                  onChange={(e) =>
                    setSearchAutor(e.target.value.toLowerCase().trim())
                  }
                />
              </form>
              <form onSubmit={findWydawnictwo}>
                <input
                  type="text"
                  placeholder="Wydawnictwo..."
                  value={searchWydawnictwo}
                  onChange={(e) =>
                    setSearchWydawnictwo(e.target.value.toLowerCase().trim())
                  }
                />
              </form>
            </SortFlex>
          </SortBoxes>
        </Fade>
      </Container>

      {articles
        .map((article) => <ArticleBox article={article} key={article.id} />)
        .slice(0, more)}
      {more >= articles.length ? null : (
        <BTNmoreBox>
          <BTNmore onClick={() => setMore((more) => more + 1)}>
            Więcej...
          </BTNmore>
        </BTNmoreBox>
      )}
    </StyledBlogBoxes>
  );
}

export default BloxBoxes;
