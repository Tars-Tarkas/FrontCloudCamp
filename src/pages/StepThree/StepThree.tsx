import { FC } from "react";
import styles from "./StepThree.module.css";
import { Form } from "../../components/Form/Form";
import { Stepper } from "../../components/Stepper/Stepper";
import { TextArea } from "../../components/TextArea/TextArea";
import { Button } from "../../components/Button/Button";

export const StepThree: FC = () => {
  return (
    <Form>
      <Stepper />
      <TextArea label="About" placeholder="Placeholder" />
      <div className={styles.btn_block}>
        <Button tag="Назад" theme="outline" type="button" />
        <Button tag="Отправить" theme="primary" />
      </div>
    </Form>
  );
};
