import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  width: 40rem;
  gap: 2.4rem;
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
    <FormBox>
      <Form onSubmit={onSubmit}>
        <InputBox>
          <label>Twój e-mail:</label>
          <input type="email" name="email" required />
        </InputBox>
        <InputBox>
          <label>Temat:</label>
          <input type="text" name="name" required />
        </InputBox>
        <InputBox>
          <label>Wiadomość:</label>
          <textarea name="message" required></textarea>
        </InputBox>

        <button type="submit">Wyślij</button>
        <input
          type="hidden"
          name="access_key"
          value="690d259b-e2ba-40fd-be5d-eaf0da0e6356"
        ></input>
      </Form>
      <span>{result}</span>
    </FormBox>
  );
}

export default ContactForm;
