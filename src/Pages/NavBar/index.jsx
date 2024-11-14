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
    <nav className="bg-white dark:bg-[#191E24] lg:py-5 py-2 px-3 text-[#f5f5f5] lg:sticky lg:h-screen fixed lg:top-0 bottom-0 z-50 max-lg:w-full shadow-xl overflow-auto col-span-3">
      <div className="lg:block flex">
        <div className="hidden lg:block">
          <h4 className="text-black dark:text-white/90 font-bold text-xl">
            Mazag
          </h4>
          <p className="text-black dark:text-gray-200 text-lg">@Mazag</p>
        </div>

        <div className="lg:mt-6 w-full">
          <ul className="flex lg:block w-full justify-between">
            {navItems.map((item, i) => {
              const IconComponent = item.icon; // Icon component
              return (
                <Link
                  to={item.path}
                  key={i}
                  aria-label={item.name}
                  className={`py-2 lg:ps-4 lg:pe-24 ps-2 pe-2 max-sm:w-1/5 flex items-center lg:justify-normal justify-center group hover:bg-[#eaeaea] dark:hover:bg-[#272C33] rounded-lg transition-colors my-2 ${
                    item.path === pathname
                      ? "bg-[#eaeaea] dark:bg-[#272C33]"
                      : ""
                  }`}
                >
                  <IconComponent className="text-2xl sm:me-3 me-0 text-black dark:text-white/90  dark:group-hover:text-[#f5f5f5] transition-colors" />
                  <span className="text-lg max-sm:hidden text-black dark:text-white/90  dark:group-hover:text-[#f5f5f5] transition-colors">
                    {item.name}
                  </span>
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
