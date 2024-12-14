import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import TextInput from "../../Components/TextInput/TextInput";
import LoginWithGoogle from "../../Features/Auth/LoginWithGoogle";
const index = () => {
  const navigate = useNavigate();
  const [lodaing, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const signUp = (data) => {
    setLoading(true);
    axios
      .post("https://mazag-production.up.railway.app/users/", {
        ...data,
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 201) {
          localStorage.setItem("token", res.data.access);
          localStorage.setItem("refresh", res.data.refresh);
          navigate("/");
        }
      })
      .catch((error) => {
        setLoading(false);
        const messages = Object.values(error.response.data).flat();
        setError(messages);
      });
  };
  const schema = yup
    .object({
      username: yup.string().required("User name is required"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^[A-Z][a-zA-Z0-9!@#$%^&*()_+]{7,}$/,
          "Password must start with an uppercase letter and be at least 8 characters long"
        ),
      email: yup.string().email("Invalid email").required("Email is required"),
      first_name: yup.string().required("First name is required"),
      last_name: yup.string().required("Last name is required"),
      password2: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
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
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setLoading(false);
    }
  }, [errors]);
  return (
    <section className="container min-h-screen mx-auto max-sm:px-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-black dark:text-white/90 mb-4">
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full"
      >
        <TextInput
          placeholder="Username"
          register={register}
          errors={errors}
          name={"username"}
          type={"text"}
        />
        <TextInput
          placeholder="Email"
          register={register}
          errors={errors}
          name={"email"}
          type={"email"}
        />

        <TextInput
          placeholder="First Name"
          register={register}
          errors={errors}
          name={"first_name"}
          type={"text"}
        />
        <TextInput
          placeholder="Last Name"
          register={register}
          errors={errors}
          name={"last_name"}
          type={"text"}
        />
        <TextInput
          placeholder="Password"
          register={register}
          errors={errors}
          name={"password"}
          type={"password"}
        />
        <TextInput
          placeholder="Re-Password"
          register={register}
          errors={errors}
          name={"password2"}
          type={"password"}
        />
        {error && (
          <div role="alert" className="alert alert-error">
            <ul className="flex flex-col gap-2 list-disc py-1 px-6">
              {error.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}
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
              disabled={Object.keys(errors).length > 0}
            >
              Sign Up
            </button>
          )}
        </section>
        <section className="w-full flex justify-between items-center">
          <p>
            Registered already?
            <Link to="/login" className="link link-primary text-lg ps-1">
              Login Now
            </Link>
          </p>
        </section>
      </form>
      <LoginWithGoogle />
    </section>
  );
};

export default index;
