import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../Components/Avatar";
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
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [truncatedBio, setTruncatedBio] = useState("");

  const handleProfileData = async (id) => {
    const token = localStorage.getItem("token");
    const { user_id } = jwtDecode(token);

    if (user_id == id || id == "me") {
      setIsUser(true);
    }

    try {
      const res = await getProfileById(id);
      setUserData(res.data);
      setLoading(false);

      // Truncate bio to 20 words or add custom logic
      if (res.data?.bio) {
        const words = res.data.bio.split(" ");
        if (words.length > 5) {
          setTruncatedBio(words.slice(0, 5).join(" ") + "...");
        } else {
          setTruncatedBio(res.data.bio);
        }
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    handleProfileData(id);
  }, [id]);

  return (
    <>
      {!loading ? (
        <section className="flex max-sm:flex-col max-sm:items-center gap-4 w-[80%] max-sm:w-full">
          <Avatar
            first_name={userData?.first_name}
            last_name={userData?.last_name}
            size={"w-full"}
            style="w-24 h-24"
          />
          <section className="flex flex-col max-sm:items-center max-sm:w-full">
            <section className="flex gap-4">
              <h3 className="font-bold text-2xl dark:text-white/90">
                {userData?.username}
              </h3>
              <UserActions
                id={id}
                isUser={isUser}
                userData={userData}
                setIsFollowing={setIsFollowing}
                isFollowing={isFollowing}
              />
            </section>
            <p className="break-words">
              {isBioExpanded ? (
                <span>{userData?.bio}</span>
              ) : (
                <span>{truncatedBio}</span>
              )}
              {userData?.bio?.split(" ").length > 5 && (
                <span
                  className={`text-stone-600 dark:text-white/90 cursor-pointer ml-1`}
                  onClick={() => setIsBioExpanded((prev) => !prev)}
                >
                  {isBioExpanded ? "Show less" : "Show more"}
                </span>
              )}
            </p>
            <ProfileStats
              followers_count={userData?.followers_count}
              following_count={userData?.following_count}
              style="col-start-3 max-md:col-start-1 max-sm:col-span-full"
            />
          </section>
        </section>
      ) : (
        <HeaderSkeleton />
      )}
    </>
  );
};

export default ProfileHeader;
