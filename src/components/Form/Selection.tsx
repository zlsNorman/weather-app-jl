import React from "react";
import { OptionValue } from "../../types/Selection";

interface Props {
  optionValue: OptionValue;
  mandatory?: boolean;
  callback?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export default function Selection({
  optionValue,
  mandatory = false,
  callback,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className=" text-white">{optionValue.label}</label>
      <select onChange={(e) => callback && callback(e.target.value)}>
        {!mandatory && <option key={""} value={""}></option>}
        {optionValue.option.map((el) => {
          return (
            <option key={el[0]} value={el[0]}>
              {el[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
