import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

export const StepOne: FC = () => {
  const { register, formState } = useFormContext();
  return (
    <>
      <input
        type="hidden"
        {...register("stepone", {
          shouldUnregister: true,
        })}
      />
      <Input
        label="nickname"
        type="text"
        name="nickname"
        // error={formState.errors.root?.message}
      />
      <Input
        label="name"
        type="text"
        name="name"
        // error={formState.errors.root?.message}
      />
      <Input
        label="sername"
        type="text"
        name="sername"
        // error={formState.errors.root?.message}
      />
      <Select name="sex">
        <option disabled>Не выбрано</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </Select>
    </>
  );
};
