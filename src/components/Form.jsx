import Select from "./Select";
import TextArea from "./TextArea";
import { useEffect, useState } from "react";
import { getServices } from "../services/index";
import emailjs from "@emailjs/browser";
import "../assets/styles/components/Form.css"

function Form() {
  const [servicesArray, setServicesArray] = useState([]);
  useEffect(async () => {
    const services = (await getServices()) || [];
    setServicesArray(services);
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const SendMail = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cuxio5f",
        "template_6wn1q5d",
        {message, email, name, service},
        "5ihf5SAQW727UOfws"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <form onSubmit={SendMail}>
      <div className="form-text">
        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
      </div>
      <input
        placeholder="Adınız Soyadınız"
        type="text"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="E-posta Adresiniz"
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Select
        services={servicesArray}
        onChange={(e) => setService(e.target.value)}
        required
      />
      <TextArea onChange={(e) => setMessage(e.target.value)} />
      <button type="submit" className="hoverDark">
        Gonder
      </button>
    </form>
  );
}

export default Form;
