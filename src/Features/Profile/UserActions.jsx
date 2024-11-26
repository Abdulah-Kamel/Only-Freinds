import { IoIosMore } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Store/UserStore";
import ProfileModal from "./ProfileModal";
const UserActions = ({ id, userData, isUser, setIsFollowing, isFollowing }) => {
  const { followProfileById, UnfollowProfileById } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const handleFollow = async (id) => {
    setLoading(true);
    console.log("follow");
    const data = await followProfileById(id)
      .then(function (res) {
        console.log(res);
        setIsFollowing(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Error fetching profile data:",
          error.response.data.message
        );
        setLoading(false);
      });
  };
  const handleUnFollow = async (id) => {
    setLoading(true);
    console.log("unfollow");
    const data = await UnfollowProfileById(id)
      .then(function (res) {
        console.log(res);
        setIsFollowing(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
  }, [isFollowing]);
  return (
    <section className="flex gap-4">
      {!isUser ? (
        userData?.is_following ? (
          <button
            className="btn disabled btn-primary px-10 h-auto min-h-0 py-1 rounded-full text-lg"
            onClick={() => {
              handleUnFollow(id);
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-md"></span>
                <span>loading</span>
              </>
            ) : (
              "UnFollow"
            )}
          </button>
        ) : (
          <button
            className="btn  btn-primary px-10 h-auto min-h-0 py-1 rounded-full text-lg"
            onClick={() => {
              handleFollow(id);
            }}
            disabled={loading}
          >
            {loading ? (
               <>
               <span className="loading loading-spinner loading-md"></span>
               <span>loading</span>
             </>
            ) : (
              "Follow"
            )}
          </button>
        )
      ) : (
        <>
          <IoIosMore
            className="text-4xl cursor-pointer dark:hover:text-white/90 hover:text-black"
            onClick={() => document.getElementById("setting_modal").showModal()}
          />
          <ProfileModal />
        </>
      )}
    </section>
  );
};

export default UserActions;
