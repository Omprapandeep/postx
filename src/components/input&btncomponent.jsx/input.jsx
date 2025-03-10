import React, { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    classNameInput = "",
    ...propsinput
  },
  ref
) {
  const id = useId();
  return (
    <div className="flex flex-col gap-x-2">
      {label ? (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}:
        </label>
      ) : null}
      <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classNameInput}`} ref={ref} type={type} {...propsinput} id={id}></input>
    </div>
  );
});

export default Input;
