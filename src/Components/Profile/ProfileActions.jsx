import React from "react";

const ProfileActions = () => {
  return (
    <section className="max-lg:mt-4 max-lg: flex justify-between gap-2">
      <button className="bg-[hsla(0,0%,100%,.15)] rounded-3xl border-[hsla(0,0%,100%,.15)] border text-white px-6 text-center text-xl py-2 hover:bg-[#2f2f2f] transition-colors w-1/2">
        follow
      </button>
      <button className="bg-[#3975ed] rounded-3xl text-white px-6 text-center text-xl py-2 hover:bg-[#2a5dc1] transition-colors w-1/2">
        Message
      </button>
    </section>
  );
};

export default ProfileActions;
