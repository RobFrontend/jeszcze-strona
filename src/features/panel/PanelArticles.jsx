import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";

const ArticleBox = styled.div`
  padding: 1.8rem;
  display: grid;
  grid-template-columns: 40fr 40fr 20fr;
  max-width: 40rem;
  gap: 1.2rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  @media screen and (max-width: 650px) {
    gap: 0.8rem;
    padding: 0.8rem;
  }
`;

const ArticeTextInfo = styled.div`
  display: grid;
  gap: 1.2rem;
  font-size: 1.6rem;
  padding: 0.6rem;
  @media screen and (max-width: 1260px) {
    gap: 0.6rem;
    font-size: 1.4rem;
    padding: 0.2rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 1.2rem;
  }
`;

const IMG = styled.img`
  box-shadow: var(--shadow-md);
`;

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--color-danger);
  color: var(--font-dark-white);
  font-size: 3.2rem;
  padding: 1.8rem;
  border-radius: var(--border-radius-md);
  height: min-content;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 1260px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 1.8rem;
    padding: 0.8rem;
  }
`;

function PanelArticles({ article }) {
  return (
    <ArticleBox>
      <ArticeTextInfo>
        <p>{article.tytul}</p>
        <p>{article.wydawnictwo}</p>
        <p>{article.autor}</p>
        <p>{article.created_at.slice(0, 10)}</p>
      </ArticeTextInfo>
      <IMG src={article.img} alt={article.id} />
      <DeleteButton>
        <IoTrashOutline />
      </DeleteButton>
    </ArticleBox>
  );
}

export default PanelArticles;
