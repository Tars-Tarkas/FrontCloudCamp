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
  const icon_delete = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="#CCCCCC"
    >
      <path d="M5.453 16.6522L4.55826 8.15225C4.52719 7.85703 4.75867 7.5999 5.05552 7.5999H14.9447C15.2416 7.5999 15.4731 7.85703 15.442 8.15225L14.5472 16.6522C14.5205 16.9067 14.3059 17.0999 14.05 17.0999H5.95025C5.69437 17.0999 5.47979 16.9067 5.453 16.6522Z" />
      <path d="M17.0001 5.6999H3.00012C2.72398 5.6999 2.50012 5.47605 2.50012 5.1999V4.2999C2.50012 4.02376 2.72398 3.7999 3.00012 3.7999H5.35511C5.44983 3.7999 5.54261 3.77299 5.62263 3.72231L8.37761 1.97749C8.45764 1.92681 8.55041 1.8999 8.64514 1.8999H11.3551C11.4498 1.8999 11.5426 1.92681 11.6226 1.97749L14.3776 3.72231C14.4576 3.77299 14.5504 3.7999 14.6451 3.7999H17.0001C17.2763 3.7999 17.5001 4.02376 17.5001 4.2999V5.1999C17.5001 5.47604 17.2763 5.6999 17.0001 5.6999Z" />
    </svg>
  );

  const icon_add = (
    <svg
      className={styles.addbtn__svg}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#5558FA"
    >
      <path d="M11 5C11 4.44772 10.5523 4 9.99998 4C9.44769 4 8.99998 4.44772 8.99998 5V8.99998H5C4.44772 8.99998 4 9.44769 4 9.99998C4 10.5523 4.44772 11 5 11H8.99998V15C8.99998 15.5522 9.44769 16 9.99998 16C10.5523 16 11 15.5522 11 15V11H15C15.5522 11 16 10.5523 16 9.99998C16 9.44769 15.5522 8.99998 15 8.99998H11V5Z" />
    </svg>
  );
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
              <button
                onClick={() => removeInput(item.id)}
                className={styles.removebtn}
              >
                {icon_delete}
              </button>
            </div>
          );
        })}
        <button onClick={addInput} type="button" className={styles.addbtn}>
          {icon_add}
        </button>
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
