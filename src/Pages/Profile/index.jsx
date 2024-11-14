import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Container";
import ProfileHeader from "../../Components/Old_Profile/ProfileHeader";
import About from "../../Components/Old_Profile/About";
import ProfileGallery from "../../Components/Old_Profile/ProfileGallery";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import Avatar from "../../Components/Profile/Avatar";
import UserAbout from "../../Components/Profile/UserAbout";
import UserActions from "../../Components/Profile/UserActions";
import GalleryPhoto from "../../Components/Old_Profile/GalleryPhoto";
import { UserContext } from "../../Store/UserStore";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const index = () => {
  const { getUserProfile } = useContext(UserContext);
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUserData = async () => {
    const data = await getUserProfile().then((res) => setUserData(res.data));
  };

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
      })
      .catch((error) => {
        setLoading(false);
        const messages = Object.values(error.response.data).flat();
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
  const onSubmit = (data) => editProfile(data);
  useEffect(() => {
    handleUserData();
  }, []);
  return (
    <Container customeStyle={"py-12 px-8 max-sm:px-2"}>
      <section className="flex gap-12 max-md:flex-col max-md:gap-4 max-sm:items-center">
        <Avatar userImage={"https://picsum.photos/500"} />
        <section className="max-sm:w-full">
          <section className="flex items-start gap-8 max-sm:flex-col max-sm:items-center">
            <UserAbout userName={userData.username} userBio={userData?.bio} />
            <UserActions />
          </section>
          <section className="mt-10 md:mt-4 w-full">
            <ul className="flex gap-4 max-sm:flex-col max-sm:items-center">
              <li className="text-xl dark:text-white/90">
                <span className="font-bold me-2">10</span>posts
              </li>
              <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
              <li className="text-xl dark:text-white/90">
                <span className="font-bold me-2">
                  {userData?.followers_count > 0
                    ? userData?.followers_count
                    : 0}
                </span>{" "}
                followers
              </li>
              <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
              <li className="text-xl dark:text-white/90">
                <span className="font-bold me-2">100</span>following
              </li>
            </ul>
          </section>
        </section>
      </section>
      <ProfileGallery />
    </Container>
  );
};

export default index;
