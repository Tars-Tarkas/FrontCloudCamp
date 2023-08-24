import { FC, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StepTwo.module.css";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Stepper } from "../../components/Stepper/Stepper";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Radio } from "../../components/Radio/Radio";

export interface IInputObject {
  type: string;
  id: number;
  value: string;
}
export interface IInputArray extends Array<IInputObject> {}

export const StepTwo: FC = () => {
  const navigate = useNavigate();
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
          id: new Date().getUTCMilliseconds(),
          value: "",
        },
      ];
    });
  };

  const removeInput = (id: number) => {
    const newArray = arrayInput.filter((item) => item.id !== id);
    setArrayInput(newArray);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/stepthree");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stepper />
      <div className={styles.advantages}>
        <label className={styles.label}>Advantages</label>
        {arrayInput.map((item, index) => {
          return (
            <div key={item.id} className={styles.input__block}>
              <Input type={item.type} name={item.type} />
              <Button
                theme="close"
                tag=""
                type="button"
                onClick={() => removeInput(item.id)}
              />
            </div>
          );
        })}

        <Button tag="" type="button" onClick={addInput} theme="add" />
      </div>
      <div className={styles.checkbox}>
        <label className={styles.label}>Checkbox group</label>
        <Checkbox label="1" />
        <Checkbox label="2" />
        <Checkbox label="3" />
      </div>
      <div className={styles.radiogroup}>
        <label className={styles.label}>Radio group</label>
        <Radio label="1" name="radiogroup" value={"1"} />
        <Radio label="2" name="radiogroup" value={"2"} />
        <Radio label="3" name="radiogroup" value={"3"} />
      </div>
      <div className={styles.btn_block}>
        <Button tag="Назад" theme="outline" type="button" />
        <Button tag="Далее" theme="primary" />
      </div>
    </Form>
  );
};
