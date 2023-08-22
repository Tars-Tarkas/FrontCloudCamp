import { FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";

interface CustomElements extends HTMLFormControlsCollection {
  phone: HTMLInputElement;
  email: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const Main: FC = () => {
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
          defaultValue="ddd"
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
