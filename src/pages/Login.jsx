import { useEffect, useState } from "react";
import { useLogin } from "../features/login/useLogin";
import { useUser } from "../features/login/useUser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoaderFull from "../ui/LoaderFull";

const LoginDiv = styled.section`
  background-color: var(--font-light-white);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  min-height: 70vh;
`;

const Form = styled.form`
  display: grid;
  gap: 3.2rem;
  padding: 3.2rem;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-lg);
  background-color: var(--font-dark-white);
  max-width: 50rem;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    max-width: 40rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 30rem;
  }
`;

const InputBox = styled.div`
  display: grid;
  gap: 1.2rem;
  padding: 1.2rem;
  max-width: 40rem;
  @media screen and (max-width: 600px) {
    max-width: 30rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 25rem;
  }
`;

const Input = styled.input`
  box-shadow: var(--shadow-md);
`;

const Button = styled.button`
  background-color: var(--font-light-white);
  color: var(--font-light-dark);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.8rem;
  width: min-content;
  justify-self: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function Login({ isLogged, setIsLogged }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLogin } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/panel-edycji-blog");
    },
    [isAuthenticated, navigate]
  );
  if (isLoading) return <LoaderFull />;
  return (
    <LoginDiv>
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <label>E-mail</label>
          <Input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLogin}
          />
        </InputBox>
        <InputBox>
          <label>Password</label>
          <Input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLogin}
          />
        </InputBox>
        <Button disabled={isLogin}>Zaloguj</Button>
      </Form>
    </LoginDiv>
  );
}

export default Login;
