import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { useDeleteArticle } from "./useDeleteArticle";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ArticleBox = styled.div`
  position: relative;
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

const NoDeleteButton = styled.button`
  cursor: pointer;
  background-color: green;
  border: none;
  font-size: 3.2rem;
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
  const [openConfirm, setOpenConfirm] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { isDeleting, deleteArticle } = useDeleteArticle();
  return (
    <ArticleBox>
      {openConfirm === false ? (
        <>
          <ArticeTextInfo>
            <p>{article.tytul}</p>
            <p>{article.wydawnictwo}</p>
            <p>{article.autor}</p>
            <p>{article.created_at.slice(0, 10)}</p>
          </ArticeTextInfo>
          <IMG src={article.img} alt={article.id} />
          <DeleteButton onClick={() => setOpenConfirm(true)}>
            <IoTrashOutline />
          </DeleteButton>
        </>
      ) : (
        <>
          <DeleteButton
            disabled={isDeleting}
            onClick={() => {
              deleteArticle(article.id);
              setOpenConfirm(false);
            }}
          >
            Tak
          </DeleteButton>
          <ArticeTextInfo>
            <p>Chcesz usunąć {article.tytul}?</p>
          </ArticeTextInfo>
          <NoDeleteButton onClick={() => setOpenConfirm(false)}>
            Nie
          </NoDeleteButton>
        </>
      )}
    </ArticleBox>
  );
}

export default PanelArticles;
