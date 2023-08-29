import { FC, FormEvent, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { ErrorModal } from "../../components/ErrorModal/ErrorModal";

interface CustomElements extends HTMLFormControlsCollection {
  phone: HTMLInputElement;
  email: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const Main: FC = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    const data = {
      phone: target.phone.value,
      email: target.email.value,
    };
    if (data) {
      navigate("/stepone");
    }
  };

  function maskPhone(value: any) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{3})(\d)/g, "($1)$2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    value = value;
    //   .replace(/\D/g, "")
    //   .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    return value;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const value = maskPhone(e.target.value);
    // setPhone("+7" + value);
    // console.log(value);
    let x: RegExpMatchArray | null;
    x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (x !== null) {
      const value = "(" + x[1] + ") " + x[2] + "-" + x[3] + "-" + x[4];
      setPhone(value);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Header />
      <div className={styles.input__block}>
        <label className={styles.label}>Номер телефона</label>
        <input
          className={styles.input}
          type="phone"
          name="phone"
          required
          // defaultValue="1"
          onChange={(e) => handleChange(e)}
          value={phone}
        />
      </div>
      <div className={styles.input__block}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          required
          defaultValue="ddd@ddd.er"
        />
      </div>
      <div className={styles.btn}>
        <Button tag="Начать" theme="primary" type="submit" />
      </div>
    </form>
  );
};
