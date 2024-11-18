import { IoIosArrowDown, IoIosMore } from "react-icons/io";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Store/UserStore";
import ProfileModal from "../Profile/ProfileModal";
const UserActions = ({ id, userData }) => {
  const { followProfileById, UnfollowProfileById } = useContext(UserContext);
  const handleFollow = async (id) => {
    const data = await followProfileById(id).then((res) => console.log(res));
  };
  const handleUnFollow = async (id) => {
    const data = await UnfollowProfileById(id).then((res) => console.log(res));
  };
  useEffect(() => {
  }, [userData]);
  return (
    <section className="mt-1 flex items-center gap-4">
      {id ? (
        userData?.is_following ? (
          <button
            className="btn  btn-primary px-10 h-auto min-h-0 py-1 rounded-full text-lg"
            onClick={() => {
              handleUnFollow(id);
            }}
          >
            UnFollow
          </button>
        ) : (
          <button
            className="btn  btn-primary px-10 h-auto min-h-0 py-1 rounded-full text-lg"
            onClick={() => {
              handleFollow(id);
            }}
          >
            Follow
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
