import React, { useState } from "react";
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
  return (
    <dialog
      id="setting_modal"
      className="modal modal-bottom sm:modal-middle"
      open=""
    >
      <div className="modal-box">
        <div className="join join-vertical w-full outline-none">
          <Link to={"/profile/edit"} className="btn join-item bg-inherit" onClick={toglleModals}>
            Edit Profile
          </Link>
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
