import React from "react";
import UserInfo from "./UserInfo";
import ProfileActions from "./ProfileActions";

const ProfileHeader = () => {
  return (
    <header className="w-[95%] mx-auto max-md:w-full">
      <section className="flex max-lg:flex-col">
        <UserInfo
          userImage="https://picsum.photos/150"
          userBio="Artist, Designer, Age 28"
        />
        <ProfileActions />
      </section>
    </header>
  );
};

export default ProfileHeader;
