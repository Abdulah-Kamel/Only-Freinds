import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Container";
import ProfileGallery from "../../Components/Old_Profile/ProfileGallery";
import Avatar from "../../Components/Profile/Avatar";
import UserAbout from "../../Components/Profile/UserAbout";
import UserActions from "../../Components/Profile/UserActions";
import { UserContext } from "../../Store/UserStore";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const { baseUrl, getProfileById, getUserProfile } = useContext(UserContext);
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleProfileData = async (id) => {
    setLoading(true); // Ensure loading starts before fetching data

    try {
      const user = await getUserProfile().then((res) => res.data);
      const profileData = await getProfileById(id).then((res) => res.data);

      if (profileData.id === user.id) {
        navigate("/profile/me");
      } else {
        // Filter data to exclude the current user's profile
        const filteredData = {
          ...profileData,
          relatedUsers: profileData.relatedUsers?.filter(
            (u) => u.id !== user.id
          ),
        };

        setUserData(filteredData);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      // Optionally handle the error (e.g., show an error message)
    } finally {
      setLoading(false); // Ensure loading state is updated
    }
  };

  useEffect(() => {
    handleProfileData(id);
  }, []);
  return (
    <Container customeStyle={"py-12 px-8 max-sm:px-2"}>
      {!loading ? (
        <section className="flex gap-12 max-md:flex-col max-md:gap-4 max-sm:items-center">
          <Avatar userData={userData} baseUrl={baseUrl} />
          <section className="max-sm:w-full">
            <section className="flex items-start gap-8 max-sm:flex-col max-sm:items-center">
              <UserAbout userName={userData.username} userBio={userData?.bio} />
              <UserActions id={id} userData={userData} />
            </section>
            <section className="mt-10 md:mt-4 w-full">
              <ul className="flex gap-4 max-sm:flex-col max-sm:items-center">
                <li className="text-xl dark:text-white/90">
                  <span className="font-bold me-2">10</span>posts
                </li>
                <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
                <li className="text-xl dark:text-white/90">
                  <span className="font-bold me-2">
                    {userData?.followers_count}
                  </span>
                  followers
                </li>
                <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
                <li className="text-xl dark:text-white/90">
                  <span className="font-bold me-2">
                    {userData?.following_count}
                  </span>
                  following
                </li>
              </ul>
            </section>
          </section>
        </section>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-4">
            <div className="skeleton h-20 w-20 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-64"></div>
              <div className="skeleton h-3 w-64"></div>
            </div>
          </div>
        </div>
      )}
      <ProfileGallery />
    </Container>
  );
};

export default index;
