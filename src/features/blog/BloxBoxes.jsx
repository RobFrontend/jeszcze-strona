import styled from "styled-components";
import { useArticles } from "./useArticles";
import Sort from "./Sort";
import ArticleBox from "./ArticleBox";
import LoaderFull from "../../ui/LoaderFull";

const StyledBlogBoxes = styled.section`
  background: linear-gradient(
    to top right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 200%;
  background-position: center;
`;

function BloxBoxes() {
  const { isLoading, articles } = useArticles();
  if (isLoading) return <LoaderFull />;
  return (
    <StyledBlogBoxes>
      <Sort />

      {articles
        .sort((a, b) => b.id - a.id)
        .map((article) => (
          <ArticleBox article={article} key={article.id} />
        ))}
    </StyledBlogBoxes>
  );
}

export default BloxBoxes;
