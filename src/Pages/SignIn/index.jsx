import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../Components/TextInput/TextInput";
const index = () => {
  const navigate = useNavigate();
  const [lodaing, setLoading] = useState(false);
  const signUp = (data) => {
    console.log(data);
    axios
      .post("https://mazag-production.up.railway.app/auth/jwt/create", {
        ...data,
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.access);
          localStorage.setItem("refresh", res.data.refresh);
          navigate("/");
        }
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const schema = yup
    .object({
      username: yup.string().required("User name or Email is required"),
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
    <section className="container min-h-screen mx-auto max-sm:px-4 py-5 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full"
        >
          <TextInput
            placeholder="User Name or Email"
            register={register}
            errors={errors}
            name="username"
            type="text"
          />
          <TextInput
            placeholder="Password"
            register={register}
            errors={errors}
            name="password"
            type="password"
          />
          <section className="flex justify-between items-center w-full">
            {lodaing ? (
              <button className="btn btn-disabled btn-outline btn-primary">
                <span className="loading loading-spinner"></span>
                loading
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-outline btn-primary w-28"
                onClick={() => setLoading(true)}
              >
                Sign In
              </button>
            )}
            <p>
              <Link
                to="/forget-password"
                className="link no-underline link-primary text-lg ps-1"
              >
                Forget Password?
              </Link>
            </p>
          </section>
          <section className="w-full flex justify-between items-center">
            <p>
              New User?
              <Link to="/signup" className="link link-primary text-lg ps-1">
                SignUp
              </Link>
            </p>
          </section>
        </form>
    </section>
  );
};

export default index;
