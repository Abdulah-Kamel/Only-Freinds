import React from "react";

const UserInfo = ({ userImage, userName, userBio }) => {
  return (
    <section className="flex items-center max-lg:flex-col max-lg:text-center">
      <img src={userImage} alt="profile image" className="rounded-full" />
      <section className="ms-2">
        <h3 className="font-bold text-2xl">{userName}</h3>
        <p className="text-gray-300">{userBio}</p>
      </section>
    </section>
  );
};

export default UserInfo;
