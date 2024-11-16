import { IoIosArrowDown, IoIosMore } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../../Store/UserStore";
import ProfileModal from "../Profile/ProfileModal";
const UserActions = ({ id }) => {
  const { followProfileById } = useContext(UserContext);
  const handleFollow = async (id) => {
    const data = await followProfileById(id).then((res) => console.log(res));
  };
  return (
    <section className="mt-1 flex items-center gap-4">
      {id ? (
        <div className="dropdown">
          <button
            className="btn  btn-primary ps-10 pe-6 h-auto min-h-0 py-1 rounded-full text-lg group"
            onClick={() => {
              handleFollow(id);
            }}
          >
            Follow
            <IoIosArrowDown className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            <li>
              <button>Unfollow</button>
            </li>
          </ul>
        </div>
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
