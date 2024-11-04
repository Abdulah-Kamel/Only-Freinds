import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserEmail from "../../Components/SignUp/UserEmail";
import TextInput from "../../Components/TextInput/TextInput";
const index = () => {
  const navigate = useNavigate();
  const [lodaing, setLoading] = useState(false);
  const signUp = (data) => {
    setLoading(true);
    console.log(data);
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
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const schema = yup
    .object({
      new_password: yup
        .string()
        .required("Password is required")
        .matches(
          /^[A-Z][a-zA-Z0-9!@#$%^&*()_+]{7,}$/,
          "Password must start with an uppercase letter and be at least 8 characters long"
        ),
      re_new_password: yup
        .string()
        .required("Re Password is required")
        .oneOf([yup.ref("new_password")], "Passwords must match"),
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
          <TextInput placeholder="New Password" register={register} errors={errors} name="new_password" type={"password"}/>
          <TextInput placeholder="Re New Password" register={register} errors={errors} name="re_new_password" type={"password"}/>

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
              >
                Send
              </button>
            )}
          </section>
        </form>
      </section>
    </section>
  );
};

export default index;
