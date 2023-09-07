import { FC, useState } from "react";
import styles from "./StepTwo.module.css";
import { useFormContext } from "react-hook-form";
import { Input } from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";

export interface IInputObject {
  type: string;
  id: number;
  value: string;
}

export interface IInputArray extends Array<IInputObject> {}

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

const icon_add = (
  <svg
    // className={styles.addbtn__svg}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#5558FA"
  >
    <path d="M11 5C11 4.44772 10.5523 4 9.99998 4C9.44769 4 8.99998 4.44772 8.99998 5V8.99998H5C4.44772 8.99998 4 9.44769 4 9.99998C4 10.5523 4.44772 11 5 11H8.99998V15C8.99998 15.5522 9.44769 16 9.99998 16C10.5523 16 11 15.5522 11 15V11H15C15.5522 11 16 10.5523 16 9.99998C16 9.44769 15.5522 8.99998 15 8.99998H11V5Z" />
  </svg>
);
export const StepTwo: FC = () => {
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

  return (
    <>
      <div>
        <label>Advantages</label>
        {arrayInput.map((item, index) => {
          return (
            <div key={item.id}>
              <Input type={item.type} name={item.type} label="" />
              <button onClick={() => removeInput(item.id)}>
                {/* {icon_delete} */}
              </button>
            </div>
          );
        })}
        <button onClick={addInput} type="button">
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
    </>
  );
};
