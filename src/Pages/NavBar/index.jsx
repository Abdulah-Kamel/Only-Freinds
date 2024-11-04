import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const navItems = [
    { name: "Home", icon: GoHomeFill, path: "/" },
    { name: "Explore", icon: FaRegCompass, path: "/explore" },
    {
      name: "Notifications",
      icon: IoNotificationsOutline,
      path: "/notifications",
    },
    { name: "Create", icon: FaPlus, path: "/create" },
    { name: "Profile", icon: CgProfile, path: "/profile" },
  ];
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem('isdark'))
  );
  useEffect(() => {
    localStorage.setItem('isdark', JSON.stringify(isdark));
  }, [isdark]);

  return (
    <nav className="bg-[#191E24] md:py-5 py-2 px-3 text-[#f5f5f5] md:sticky md:h-screen fixed md:top-0 bottom-0 z-50 max-md:w-full shadow-xl">
      <div className="md:block flex">
        <div className="hidden md:block">
          <h4 className="text-[#f5f5f5] font-bold text-xl">Mazag</h4>
          <p className="text-[#b0b0b0] text-lg">@Mazag</p>
        </div>

        <div className="md:mt-6 w-full">
        <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
                checked={isdark}
                onChange={() => setIsdark(!isdark)}

              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          <ul className="flex md:block w-full justify-between">
            {navItems.map((item, i) => {
              const IconComponent = item.icon; // Icon component
              return (
                <Link
                  to={item.path}
                  key={i}
                  aria-label={item.name}
                  className={`py-2 lg:ps-4 lg:pe-24 ps-2 pe-2 flex items-center md:justify-normal justify-center hover:bg-[#272C33] rounded-lg transition-colors my-2 ${
                    item.path === pathname ? "bg-[#272C33]" : ""
                  }`}
                >
                  <IconComponent className="text-2xl sm:me-3 me-0" />
                  <span className="text-lg max-sm:hidden">{item.name}</span>
                </Link>
              );
            })}
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
