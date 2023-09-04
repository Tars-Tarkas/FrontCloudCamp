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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let x: RegExpMatchArray | null;
    x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})/);

    if (x !== null) {
      if (!x[1]) {
        e.target.value = "+";

        return;
      }

      if (!x[2]) {
        e.target.value = `+${x[1]}`;

        return;
      }

      e.target.value =
        `+${x[1]} (${x[2]}` +
        (x[3] ? `) ${x[3]}` : "") +
        (x[4] ? `-${x[4]}` : "") +
        (x[5] ? `-${x[5]}` : "") +
        (x[6] ? `-${x[6]}` : "");
      // setPhone(e.target.value);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Header />
      <div className={styles.input__block}>
        <label className={styles.label}>Номер телефона</label>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          // required
          onChange={(e) => handleChange(e)}
          value={phone}
          placeholder="+7 999 999-99-99"
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
