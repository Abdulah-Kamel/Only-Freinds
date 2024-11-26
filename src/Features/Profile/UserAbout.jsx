import React from "react";

const UserAbout = ({ userName, userBio }) => {
  return (
    <section className="">
      <h3 className="font-bold text-2xl dark:text-white/90">{userName}</h3>
      <p className="break-words">{userBio}</p>
    </section>
  );
};

export default UserAbout;
