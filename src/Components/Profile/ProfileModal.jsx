import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfileModal = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      navigate("/login");
    }, 2000);
  };

  const toglleModals = () => {
    document.getElementById("edit_profile_modal").showModal();
    document.getElementById("setting_modal").close();
  };
  const [isdark, setIsdark] = useState(() => {
    // Retrieve saved theme from local storage or default to light
    return JSON.parse(localStorage.getItem("isdark")) || false;
  });

  useEffect(() => {
    // Update `data-theme` on `html` when `isdark` changes
    document.documentElement.setAttribute(
      "data-theme",
      isdark ? "dark" : "light"
    );
    // Save theme in local storage
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <dialog
      id="setting_modal"
      className="modal modal-bottom sm:modal-middle"
      open=""
    >
      <div className="modal-box">
        <div className="join join-vertical w-full outline-none">
          <Link
            to={"/profile/edit"}
            className="btn join-item bg-inherit"
            onClick={toglleModals}
          >
            Edit Profile
          </Link>
          <div className="btn join-item bg-inherit flex items-center justify-center gap-2">
            <span>Dark Mode</span>
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
          </div>
          <button className="btn join-item bg-inherit" onClick={logOut}>
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                loading
              </>
            ) : (
              "Logout"
            )}
          </button>
          <button
            className="btn join-item bg-inherit"
            onClick={() => document.getElementById("setting_modal").close()}
          >
            Close
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ProfileModal;
