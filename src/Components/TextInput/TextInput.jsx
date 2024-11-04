import React from "react";

const TextInput = ({ placeholder, register, errors, name, type }) => {
  return (
    <section className="w-full">
      <label
        className={`input input-bordered ${
          errors[name] ? "input-error" : ""
        } flex items-center gap-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type={type}
          className="grow"
          placeholder={placeholder}
          {...register(name)}
        />
      </label>
      {errors[name] && (
        <p className="text-red-400 mt-2">{errors[name]?.message}</p>
      )}
    </section>
  );
};

export default TextInput;
