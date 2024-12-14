import React, { useEffect, useState } from "react";
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
    console.log(data);
    axios
      .post(
        "https://mazag-production.up.railway.app/users/request-reset-password/",
        {
          ...data,
        }
      )
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.status === 201) {
          navigate("/reset-password");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("error in forget password", err);
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
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setLoading(false);
    }
  }, [errors]);

  const onSubmit = (data) => handleForgetPassword(data);
  return (
    <section className="container min-h-screen mx-auto max-sm:px-4 py-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-start">Forget Password</h1>
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
        </section>
      </form>
    </section>
  );
};

export default index;
