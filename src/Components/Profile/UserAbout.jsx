import React from "react";

const UserAbout = ({ userName, userBio }) => {
  return (
    <section>
      <h3 className="font-bold text-2xl dark:text-white/90">{userName}</h3>
      <p>{userBio}</p>
    </section>
  );
};

export default UserAbout;
