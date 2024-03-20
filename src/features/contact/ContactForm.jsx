import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Fade } from "react-awesome-reveal";

const Form = styled.form`
  display: grid;
  min-width: 50rem;
  gap: 2.4rem;
  padding: 4.8rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  background: linear-gradient(
    to bottom right,
    var(--font-dark-white),
    var(--font-light-white)
  );
  background-size: 150%;
  background-position: center;
  background-size: cover;
  margin-bottom: 2.4rem;
  @media screen and (max-width: 650px) {
    min-width: 40rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2.4rem;
    min-width: 30rem;
  }
`;

const FormBox = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const InputBox = styled.div`
  display: grid;
  gap: 1.2rem;
`;

const Textarea = styled.textarea`
  min-height: 20rem;
  max-width: 50rem;
  @media screen and (max-width: 650px) {
    max-width: 40rem;
  }
  @media screen and (max-width: 500px) {
    max-width: 30rem;
  }
`;

const Submit = styled.button`
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1.2rem 2.4rem;
  width: min-content;
  border: none;
  color: var(--font-dark-white);
  background-color: var(--font-light-dark);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  justify-self: center;
  &:hover {
    opacity: 0.8;
  }
`;

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Wysyłanie....");
    toast("Trwa wysyłanie...", { icon: "🛫" });
    const formData = new FormData(event.target);

    formData.append("access_key", "690d259b-e2ba-40fd-be5d-eaf0da0e6356");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Wiadomość wysłana");
      event.target.reset();
      toast("Wiadomość wysłana", { icon: "✔" });
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast("Problem z wysyłaniem wiadomości", { icon: "❌" });
    }
  };

  return (
    <>
      <Heading as="h2" style={{ marginBottom: "4.8rem" }}>
        Formularz kontaktowy
      </Heading>
      <Fade triggerOnce delay={250}>
        <FormBox>
          <Form onSubmit={onSubmit}>
            <Heading
              as="h3"
              style={{ textAlign: "center", marginBottom: "1.2rem" }}
            >
              Napisz śmiało!
            </Heading>
            <InputBox>
              <label>Twój e-mail:</label>
              <input type="email" name="email" required />
            </InputBox>
            <InputBox>
              <label>Imię/Nazwa</label>
              <input type="text" name="name" required />
            </InputBox>
            <InputBox>
              <label>Temat:</label>
              <input type="text" name="subject" required />
            </InputBox>
            <InputBox>
              <label>Wiadomość:</label>
              <Textarea name="message" required></Textarea>
            </InputBox>

            <Submit type="submit">Wyślij</Submit>

            <input
              type="hidden"
              name="access_key"
              value="690d259b-e2ba-40fd-be5d-eaf0da0e6356"
            ></input>
          </Form>
          <span>{result}</span>
        </FormBox>
      </Fade>
    </>
  );
}

export default ContactForm;
