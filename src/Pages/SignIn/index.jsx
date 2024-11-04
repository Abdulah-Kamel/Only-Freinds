import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import UserName from "../../Components/SignUp/UserName";
import Password from "../../Components/SignUp/Password";
const index = () => {
  const signUp = (data) => {
    console.log(data);
    
    axios
      .post("https://mazag-production.up.railway.app/auth/jwt/create", {
        ...data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const schema = yup
    .object({
      userName: yup.string().required("User name or Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^[A-Z][a-zA-Z0-9!@#$%^&*()_+]{7,}$/,
          "Password must start with an uppercase letter and be at least 8 characters long"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => signUp(data);
  return (
    <section className="container mx-auto w-full h-full max-sm:px-4 py-5">
      <section className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full"
        >
          <UserName register={register} errors={errors} />
          <Password register={register} errors={errors} />

          <section className="flex justify-between items-center w-full">
            <button type="submit" className="btn btn-outline btn-primary w-28">
              Sign In
            </button>
            <p>
              New User?
              <Link to="/signup" className="link link-primary text-lg ps-1">
                SignUp
              </Link>{" "}
            </p>
          </section>
        </form>
      </section>
    </section>
  );
};

export default index;
