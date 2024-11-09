import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const ProfileActions = () => {
  return (
    <section className="max-lg:mt-4 max-lg: flex justify-between gap-2">
      <button className="bg-[hsla(0,0%,100%,.15)] rounded-3xl border-[hsla(0,0%,100%,.15)] border text-white px-5 text-center text-xl py-1 hover:bg-[#2f2f2f] transition-colors w-1/2">
        follow
      </button>
      <button className="bg-[#3975ed] rounded-3xl text-white px-5 text-center text-xl py-1 hover:bg-[#2a5dc1] transition-colors w-1/2">
        Message
      </button>
      <button
        onClick={() => document.getElementById("setting_modal").showModal()}
      >
        <IoSettingsOutline className="text-3xl" />
      </button>

      <dialog id="setting_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0">
          <div className="join join-vertical w-full">
            <button className="btn join-item">Edit Profile</button>
            <button className="btn join-item">Logout</button>
            <button
              className="btn join-item"
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
    </section>
  );
};

export default ProfileActions;
