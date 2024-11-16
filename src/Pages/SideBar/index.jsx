import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { UserContext } from "../../Store/UserStore";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { hash, pathname, search } = location;
  const { isdark, setIsdark } = useContext(UserContext);
  const logOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      navigate("/login");
    }, 2000);
  };
  const navItems = [
    { name: "Home", icon: GoHomeFill, path: "/" },
    { name: "Explore", icon: FaRegCompass, path: "/explore" },
    {
      name: "Notifications",
      icon: IoNotificationsOutline,
      path: "/notifications",
    },
    { name: "Create", icon: FaPlus, path: "/create" },
    { name: "Profile", icon: CgProfile, path: "/profile/me" },
  ];
  return (
    <nav className="bg-white dark:bg-[#191E24] lg:py-5 py-2 lg:px-1 text-[#f5f5f5] lg:sticky lg:h-screen fixed lg:top-0 bottom-0 z-50 max-lg:w-full shadow-xl overflow-auto col-span-3">
      <div className="lg:block flex">
        <div className="hidden lg:block">
          <h4 className="text-black dark:text-white/90 font-bold text-xl">
            Mazag
          </h4>
          <p className="text-black dark:text-gray-200 text-lg">@Mazag</p>
        </div>

        <div className="lg:mt-6 w-full">
          <ul className="flex gap-2 lg:block w-full justify-between">
            {navItems.map((item, i) => {
              const IconComponent = item.icon; // Icon component
              return (
                <Link
                  to={item.path}
                  key={i}
                  aria-label={item.name}
                  className={`py-2 lg:ps-4 ps-2 pe-2 max-lg:w-1/5 flex items-center lg:justify-normal justify-center group hover:bg-[#eaeaea] dark:hover:bg-[#272C33] rounded-lg transition-colors my-2 ${
                    item.path === pathname
                      ? "bg-[#eaeaea] dark:bg-[#272C33]"
                      : ""
                  }`}
                >
                  <IconComponent className="text-2xl sm:me-1 me-0 text-black dark:text-white/90  dark:group-hover:text-[#f5f5f5] transition-colors" />
                  <span className="text-lg max-md:hidden text-black dark:text-white/90  dark:group-hover:text-[#f5f5f5] transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <li
              className={`py-2 lg:ps-4 ps-2 pe-2 max-sm:w-1/5 hidden lg:flex items-center justify-between group hover:bg-[#eaeaea] dark:hover:bg-[#272C33] rounded-lg transition-colors my-2
                  `}
            >
              <span className="text-lg text-black dark:text-white/90  dark:group-hover:text-[#f5f5f5] transition-colors">
                Dark Mode
              </span>
              <Switch
                checked={isdark}
                onChange={setIsdark}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-neutral p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                />
              </Switch>
            </li>
            <li
              className={`py-2 lg:ps-4 ps-2 pe-2 max-sm:w-1/5 hidden lg:flex justify-normal items-center gap-2 hover:bg-[#eaeaea] dark:hover:bg-[#272C33] rounded-lg transition-colors my-2
                  `}
              role="button"
              onClick={logOut}
            >
              {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                loading
              </>
            ) : (
              "Logout"
            )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
