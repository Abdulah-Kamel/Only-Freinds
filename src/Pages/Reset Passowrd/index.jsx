import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../Components/TextInput/TextInput";
import { FaKey } from "react-icons/fa6";

const index = () => {
  const navigate = useNavigate();
  const [lodaing, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleResetPassword = (data) => {
    setLoading(true);
    axios
      .post(
        "https://mazag-production.up.railway.app/users/confirm-reset-password/",
        {
          ...data,
        }
      )
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.status === 201) {
          setSuccess(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("error in forget password", err);
        setError(err.response.data);
        if (err.response.data.email) {
          setError(err.response.data.email);
        }
      });
  };
  const schema = yup
    .object({
      email: yup.string().email("Invalid email").required("Email is required"),
      code: yup.string().required("Code is required"),
      new_password: yup
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
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setLoading(false);
    }
  }, [errors]);

  const onSubmit = (data) => handleResetPassword(data);
  return (
    <section className="container min-h-screen mx-auto max-sm:px-4 py-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-start">Check Your Email</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full"
      >
        <TextInput
          placeholder="email"
          register={register}
          errors={errors}
          name="email"
          type={"email"}
        />
        <TextInput
          placeholder="code"
          register={register}
          errors={errors}
          name="code"
          type={"text"}
        />
        <TextInput
          placeholder="New Password"
          register={register}
          errors={errors}
          name="new_password"
          type={"password"}
          icon={<FaKey color="#626973" size={15} />}
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
        {success && (
          <div role="alert" className="alert alert-success">
            <p className="text-black dark:text-white/70 text-lg font-bold">
              {success}
            </p>
            <Link
              to="/login"
              className="underline font-semibold text-black dark:text-white/70 link"
            >
              Sign In
            </Link>
          </div>
        )}
        <section className="flex justify-between items-center w-full">
          {lodaing ? (
            <button className="btn btn-disabled btn-outline btn-primary">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <button type="submit" className="btn btn-outline btn-primary w-28">
              Send
            </button>
          )}
        </section>
      </form>
    </section>
  );
};

export default index;
