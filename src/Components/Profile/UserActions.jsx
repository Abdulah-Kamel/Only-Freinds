import React, { useContext, useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import ProfileModal from "./ProfileModal";
import UpdateProfile from "./UpdateProfile";

const UserActions = () => {
  return (
    <section className="mt-1 flex items-center gap-4">
      <button className="btn btn-outline btn-primary px-10 rounded-full text-lg">
        Follow
      </button>
      <IoIosMore
        className="text-4xl cursor-pointer dark:hover:text-white/90 hover:text-black"
        onClick={() => document.getElementById("setting_modal").showModal()}
      />
      <ProfileModal />
      {/* <UpdateProfile userData={userData}/> */}
    </section>
  );
};

export default UserActions;
