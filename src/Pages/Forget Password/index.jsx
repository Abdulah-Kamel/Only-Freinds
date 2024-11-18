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
  const handleForgetPassword = (data) => {
    axios
      .post(
        "https://mazag-production.up.railway.app/users/reset_password_confirm/",
        {
          ...data,
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.access);
          localStorage.setItem("refresh", res.data.refresh);
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const schema = yup
    .object({
      email: yup.string().email("Invalid email").required("Email is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => handleForgetPassword(data);
  return (
    <section className="container min-h-screen mx-auto max-sm:px-4 py-5 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full"
      >
        <TextInput
          placeholder="Email"
          register={register}
          errors={errors}
          name="email"
          type="email"
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
              Send
            </button>
          )}
          <Link to="/reset-password" className="link link-primary text-lg">Reset password</Link>
        </section>
      </form>
    </section>
  );
};

export default index;
