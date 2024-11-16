import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import Container from "../Container";
import { UserContext } from "../../Store/UserStore";
import { Input } from "@headlessui/react";
const EditProfile = () => {
  const [lodaing, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(false);
  const [userImage, setUserImage] = useState("");
  const { editUserProfile, getUserData } = useContext(UserContext);

  const handleUserData = async () => {
    try {
      const res = await getUserData();
      setUserData(res.data);
      // Set default values in the form based on fetched data
      setValue("first_name", res.data.first_name);
      setValue("last_name", res.data.last_name);
      setValue("bio", res.data.bio);
      setValue("profile_picture", res.data.profile_picture); // For file preview if necessary
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  const handleUserProfile = async (data) => {
    setLoading(true);
  
    // Convert the form data to FormData
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("bio", data.bio);
    formData.append("profile_picture", data.profile_picture[0]); // Append the file
  
    try {
      const token = localStorage.getItem("token");
      const response = await editUserProfile(formData, token);
      setLoading(false);
      console.log(response);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  
  const schema = yup
    .object({
      first_name: yup.string().required("First name is required"),
      last_name: yup.string().required("Last name is required"),
      bio: yup.string().required("Bio is required"),
      profile_picture: yup
        .mixed()
        .test("required", "Profile picture is required", (value) => {
          return value && value.length > 0; // Check if a file is selected
        })
        .test("fileSize", "Each file must be less than 2MB", (value) => {
          return (
            value && Array.from(value).every((file) => file.size <= 2_000_000)
          );
        })
        .test("fileType", "Unsupported file format", (value) => {
          return (
            value &&
            Array.from(value).every((file) =>
              ["image/jpeg", "image/png", "image/gif"].includes(file.type)
            )
          );
        }),
    })
    .required();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      bio: "",
      profile_picture: "",
    },
  });
  const profilePicture = watch("profile_picture");

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setLoading(false);
    }
  }, [errors]);

  useEffect(() => {
    handleUserData();
  }, []);

  const onSubmit = (data) => handleUserProfile(data);
  return (
    <Container customeStyle="mx-auto max-sm:px-4 py-5 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4 self-start ms-32 max-md:ms-24 max-sm:ms-0 max-sm:self-auto">
        Edit Profile
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 sm:w-[75%] w-full "
      >
        <Input
          className={`input input-bordered text-black dark:text-white/90 w-full ${
            errors.first_name ? "input-error" : ""
          } flex items-center gap-2`}
          {...register("first_name")}
          placeholder="First Name"
          type={"text"}
          name="first_name"
        />
        <Input
          className={`input input-bordered text-black dark:text-white/90 w-full ${
            errors.last_name ? "input-error" : ""
          } flex items-center gap-2`}
          {...register("last_name")}
          placeholder="Last Name"
          type={"text"}
          name="last_name"
        />
        <Input
          className={`input input-bordered text-black dark:text-white/90 w-full ${
            errors.bio ? "input-error" : ""
          } flex items-center gap-2`}
          {...register("bio")}
          placeholder="Your Bio"
          type={"text"}
          name="bio"
        />
        <section className="flex w-full gap-2">
          <Input
            type="file"
            className={clsx(
              "file-input file-input-bordered w-full",
              errors.profile_picture ? "input-error" : ""
            )}
            {...register("profile_picture")}
            name="profile_picture"
          />

          {errors.profile_picture && (
            <p className="text-red-500 text-sm mt-1">
              {errors.profile_picture.message}
            </p>
          )}
        </section>
        <section className="w-full">
          {profilePicture && profilePicture[0] && (
            <div
              className="tooltip tooltip-right  tooltip-primary"
              data-tip="View Image"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <img
                src={URL.createObjectURL(profilePicture[0])}
                alt="Profile Preview"
                className="w-[100px] h-[100px] rounded"
              />
            </div>
          )}
        </section>

        {profilePicture && profilePicture[0] && (
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box p-0 max-sm:w-8/12 max-lg:w-8/12 w-4/12 max-w-5xl">
              <img
                src={URL.createObjectURL(profilePicture[0])}
                alt=""
                className="rounded object-contain w-full"
              />
            </div>
            <button
              onClick={() => document.getElementById("my_modal_2").close()}
              className="modal-backdrop"
            >
              Close
            </button>
          </dialog>
        )}
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
              disabled={Object.keys(errors).length > 0}
            >
              Submit
            </button>
          )}
        </section>
      </form>
    </Container>
  );
};

export default EditProfile;
