import React from "react";

const TextInput = ({
  placeholder,
  register,
  errors,
  name,
  type,
  icon,
}) => {
  return (
    <section className="w-full">
      <label
        className={`input input-bordered text-black dark:text-white/90 ${
          errors[name] ? "input-error" : ""
        } flex items-center gap-2`}
      >
        {icon && <>{icon}</>}
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
