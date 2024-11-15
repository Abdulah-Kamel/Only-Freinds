import React, { useEffect } from "react";

const Avatar = ({ userData,baseUrl }) => {
  const avatarPlacholder =
    (userData?.first_name?.slice(0, 1) || "") +
    (userData?.last_name?.slice(0, 1) || "");
    useEffect(() => {
        console.log(userData);
        
    },[])
  return (
    <>
      {userData?.profile_picture ? (
        <div className="avatar">
          <div className="w-32 md:w-36 rounded-full">
            <img src={`${baseUrl}${userData?.profile_picture}`} alt="profile picture"/>
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-primary text-neutral-content w-32 md:w-36 rounded-full">
            <span className="text-4xl text-black dark:text-white/90">
             {avatarPlacholder}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Avatar;
