import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserName from "../../Components/SignUp/UserName";
import UserEmail from "../../Components/SignUp/UserEmail";
import FirstName from "../../Components/SignUp/FirstName";
import LastName from "../../Components/SignUp/LastName";
import Password from "../../Components/SignUp/Password";
import RePassword from "../../Components/SignUp/RePassword";
const index = () => {
  const navigate = useNavigate();
  const [lodaing, setLoading] = useState(false);
  const signUp = (data) => {
    axios
      .post("https://mazag-production.up.railway.app/users/", {
        ...data,
      })
      .then((res) => {
        if (res.status === 201) {
          setLoading(false);
          navigate("/login");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
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
      re_password: yup
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
  return (
    <section className="container mx-auto w-full h-full max-sm:px-4 py-5">
      <section className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full"
        >
          <UserName register={register} errors={errors} />
          <UserEmail register={register} errors={errors} />
          <FirstName register={register} errors={errors} />
          <LastName register={register} errors={errors} />
          <Password register={register} errors={errors} />
          <RePassword register={register} errors={errors} />

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
                Sign Up
              </button>
            )}

            <p>
              Registered already?
              <Link to="/login" className="link link-primary text-lg ps-1">
                Login Now
              </Link>
            </p>
          </section>
        </form>
      </section>
    </section>
  );
};

export default index;
