import styled from "styled-components";
import { useArticles } from "../features/blog/useArticles";
import LoaderFull from "../ui/LoaderFull";
import PanelArticles from "../features/panel/PanelArticles";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { useUser } from "../features/login/useUser";
import { useCreateArticle } from "../features/panel/useCreateArticle";
import { useForm } from "react-hook-form";

const SectionForm = styled.section`
  background-color: var(--font-dark-white);
`;

const OpenPanelButton = styled.button`
  font-size: 1.8rem;
  padding: 1.2rem 2.4rem;
  border: none;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  justify-self: center;
  background-color: var(--font-light-white);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const FormPanel = styled.section`
  display: grid;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding: 3.2rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputBox = styled.div`
  display: grid;
  gap: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-lg);
  padding: 1.2rem;
`;

const Input = styled.input`
  box-shadow: var(--shadow-md);
`;

const TextArea = styled.textarea`
  box-shadow: var(--shadow-md);
`;

const AddPostButton = styled.button`
  font-size: 1.8rem;
  padding: 1.2rem 2.4rem;
  background-color: #15cd72;
  border: none;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  justify-self: center;
  grid-column: 1/-1;
  margin-top: 1.8rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ArticlesBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 3.2rem;
  padding: 1.8rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    gap: 1.8rem;
  }
`;

function Panel() {
  const navigate = useNavigate();
  const { isLoading: isLoadingUser, isAuthenticated } = useUser();
  const [openForm, setOpenForm] = useState(false);
  const { articles, isLoading } = useArticles();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );
  //
  const { isCreating, createArticle } = useCreateArticle();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: null,
  });

  function onSubmit(data) {
    createArticle(
      { ...data, img: data.img[0] },
      { onSuccess: (data) => reset() }
    );
  }
  //
  if (isLoadingUser) return <LoaderFull />;
  if (isLoading) return <LoaderFull />;
  return (
    <>
      <SectionForm>
        <Fade>
          <FormPanel>
            <OpenPanelButton onClick={() => setOpenForm(!openForm)}>
              {openForm === true
                ? "Zamknij panel"
                : "Otwórz panel aby dodać post"}
            </OpenPanelButton>
          </FormPanel>
        </Fade>

        {openForm === true ? (
          <Fade>
            <FormPanel>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <InputBox>
                  <label>Tytuł:</label>
                  <Input
                    type="text"
                    id="tytul"
                    {...register("tytul")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Tekst (AKAPIT-1):</label>
                  <TextArea
                    type="text"
                    id="tekst"
                    {...register("tekst")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Tekst2 (AKAPIT-2):</label>
                  <TextArea
                    type="text"
                    id="tekst2"
                    {...register("tekst2")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Tekst3 (AKAPIT-3):</label>
                  <TextArea
                    type="text"
                    id="tekst3"
                    {...register("tekst3")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Tekst4 (AKAPIT-4):</label>
                  <TextArea
                    type="text"
                    id="tekst4"
                    {...register("tekst4")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Tekst5 (AKAPIT-5):</label>
                  <TextArea
                    type="text"
                    id="tekst5"
                    {...register("tekst5")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Wydawnictwo:</label>
                  <Input
                    type="text"
                    id="wydawnictwo"
                    {...register("wydawnictwo")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Autor:</label>
                  <Input
                    type="text"
                    id="autor"
                    {...register("autor")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Gatunek:</label>
                  <Input
                    type="text"
                    id="gatunek"
                    placeholder="Fantasy, Horror"
                    {...register("gatunek")}
                    required
                  />
                  <span>
                    Z wielkiej i po przecinku jak więcej niż 1 (nazwy i wielkie
                    litery dokładnie takie jak niżej)
                  </span>
                  <span>
                    Dramat Erotyk Fantasy Historyczny Horror Klasyka Kryminał
                    Obyczajowy Romans Sci-Fi Thriller YoungAdult
                  </span>
                </InputBox>
                <InputBox>
                  <label>Link Instagram:</label>
                  <Input
                    type="text"
                    id="linkig"
                    {...register("linkig")}
                    required
                  />
                </InputBox>
                <InputBox>
                  <label>Link LubimyCzytać:</label>
                  <Input
                    type="text"
                    id="linklc"
                    {...register("linklc")}
                    required
                  />

                  <span>(link do profilu jeśli nie ma tam posta): </span>
                  <span>
                    https://lubimyczytac.pl/profil/2120761/jeszcze-strona
                  </span>
                </InputBox>
                <InputBox>
                  <input
                    type="file"
                    accept="image/*"
                    id="img"
                    {...register("img")}
                    required
                  />
                  <span>
                    Zdjęcie najlepiej w formacie .webp i żeby nie było wyższe
                    ani szersze niż 900px
                  </span>
                  <span>
                    <Link to="https://www.photopea.com/" target="_blank">
                      https://www.photopea.com/
                    </Link>{" "}
                    - darmowy photoshop
                  </span>
                </InputBox>
                <AddPostButton disabled={isCreating}>Dodaj Post</AddPostButton>
              </Form>
            </FormPanel>
          </Fade>
        ) : null}
      </SectionForm>
      <section>
        <Fade triggerOnce>
          <ArticlesBoxes>
            {articles
              .sort((a, b) => b.created_at.localeCompare(a.created_at))
              .map((article) => (
                <PanelArticles article={article} key={article.id} />
              ))}
          </ArticlesBoxes>
        </Fade>
      </section>
    </>
  );
}

export default Panel;
