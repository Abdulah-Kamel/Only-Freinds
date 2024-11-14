import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Description, Field, Label, Input } from "@headlessui/react";
import clsx from "clsx";

const UpdateProfile = ({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const editProfile = (data) => {
    setLoading(true);
    console.log(data);
    axios
      .post("https://mazag-production.up.railway.app/profiles/me/", {
        ...data,
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.access);
          localStorage.setItem("refresh", res.data.refresh);
        }
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        const messages = Object.values(error.response.data).flat();
        console.log(messages);
        setError(messages);
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

  const onSubmit = (data) => {
    editProfile(data);
  };
  useEffect(() => {
    setUser({ ...userData });
  }, [userData]);
  return (
    <dialog
      id="edit_profile_modal"
      className="modal modal-bottom sm:modal-middle"
      open=""
    >
      <div className="modal-box ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 w-full"
        >
          <Field className={"w-full"}>
            <Label className="text-sm/6 font-medium dark:text-white/90">
              User Name
            </Label>
            <Description className="text-sm/6 dark:text-slate-400 mb-2">
              Use your real name so people will recognize you.
            </Description>
            <Input
              className={clsx(
                "input input-md input-bordered w-full dark:text-white"
              )}
              defaultValue={user?.username}
              onChange={(e) =>
                (userData = (prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </Field>
          {error && (
            <div role="alert" className="alert alert-error">
              <ul className="flex flex-col gap-2 list-disc py-1 px-6">
                {error.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
        <section className="w-full flex justify-end mt-4">
          <button
            className="btn join-item"
            onClick={() =>
              document.getElementById("edit_profile_modal").close()
            }
          >
            Close
          </button>
        </section>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UpdateProfile;
