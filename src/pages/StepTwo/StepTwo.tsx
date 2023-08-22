import { FC, useState } from "react";

import styles from "./StepTwo.module.css";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Stepper } from "../../components/Stepper/Stepper";

export interface IInputObject {
  type: string;
  id?: number;
  value: string;
}
export interface IInputArray extends Array<IInputObject> {}

export const StepTwo: FC = () => {
  const inputArray = [
    {
      type: "text",
      id: 1,
      value: "",
    },
    {
      type: "text",
      id: 2,
      value: "",
    },
    {
      type: "text",
      id: 3,
      value: "",
    },
  ];

  const [arrayInput, setArrayInput] = useState<IInputArray>(inputArray);

  const addInput = () => {
    setArrayInput((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const removeInput = () => {};
  return (
    <Form>
      <Stepper />
      <div className={styles.advantages}>
        <label className={styles.label}>Advantages</label>
        {arrayInput.map((item, index) => {
          return (
            <>
              <Input type={item.type} name={item.type} id={index.toString()} />
              <span id={index.toString()}>Remove</span>
            </>
          );
        })}

        <Button tag="+" type="button" onClick={addInput} />
      </div>
      <div className={styles.checkbox}>
        <label className={styles.label}>Checkbox group</label>
        <Input type="checkbox" name="" />
      </div>
      <div className={styles.radiogroup}>
        <Input type="radio" name="radio" value={"1"} label="1" id="1" />
        <Input type="radio" name="radio" value={"2"} label="2" id="2" />
      </div>
      <div className={styles.btn_block}>
        <Button tag="Назад" theme="outline" type="button" />
        <Button tag="Далее" theme="primary" />
      </div>
    </Form>
  );
};
