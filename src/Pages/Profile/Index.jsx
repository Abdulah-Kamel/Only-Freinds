import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Container";
import ProfileGallery from "../../Components/Old_Profile/ProfileGallery";
import Avatar from "../../Components/Profile/Avatar";
import UserAbout from "../../Components/Profile/UserAbout";
import UserActions from "../../Components/Profile/UserActions";
import { UserContext } from "../../Store/UserStore";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const { baseUrl, getProfileById } = useContext(UserContext);
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleProfileData = async (id) => {
    const data = await getProfileById(id).then((res) => setUserData(res.data));
  };

  useEffect(() => {
    handleProfileData(id);
  }, []);
  return (
    <Container customeStyle={"py-12 px-8 max-sm:px-2"}>
      <section className="flex gap-12 max-md:flex-col max-md:gap-4 max-sm:items-center">
        <Avatar userData={userData} baseUrl={baseUrl} />
        <section className="max-sm:w-full">
          <section className="flex items-start gap-8 max-sm:flex-col max-sm:items-center">
            <UserAbout userName={userData.username} userBio={userData?.bio} />
            <UserActions id={id}/>
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
