import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../Components/Avatar";
import UserAbout from "./UserAbout";
import UserActions from "./UserActions";
import { UserContext } from "../../Store/UserStore";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import HeaderSkeleton from "./HeaderSkeleton";
import ProfileStats from "./ProfileStats";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProfileById } = useContext(UserContext);
  const [userData, setUserData] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleProfileData = async (id) => {
    console.log(id);

    const token = localStorage.getItem("token");
    const { user_id } = jwtDecode(token);
    console.log(user_id == id);
    if (user_id == id || id == "me") {
      setIsUser(true);
    }
    const profileData = await getProfileById(id)
      .then(function (res) {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  };

  useEffect(() => {
    handleProfileData(id);
  }, [userData]);
  return (
    <>
      {!loading ? (
        <section className="flex gap-12 max-md:flex-col max-md:gap-4 max-sm:items-center">
          <Avatar
            first_name={userData?.first_name}
            last_name={userData?.last_name}
            // profile_picture={"https://picsum.photos/200"}
            size={"w-32 md:w-36"}
          />
          <section className="max-sm:w-full">
            <section className="flex items-start gap-8 max-sm:flex-col items-center">
              <UserAbout userName={userData.username} userBio={userData?.bio} />
              <UserActions
                id={id}
                isUser={isUser}
                userData={userData}
                setIsFollowing={setIsFollowing}
                isFollowing={isFollowing}
              />
            </section>
            <section className="mt-10 md:mt-4 w-full">
              <ProfileStats
                followers_count={userData?.followers_count}
                following_count={userData?.following_count}
              />
            </section>
          </section>
        </section>
      ) : (
        <HeaderSkeleton />
      )}
    </>
  );
};

export default ProfileHeader;
