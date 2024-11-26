import React, { useEffect, useState } from "react";

const Avatar = ({ first_name, last_name, profile_picture, size,style }) => {
  const avatarPlacholder =
    (first_name?.slice(0, 1) || "") + (last_name?.slice(0, 1) || "");
  const [color, setColor] = useState("");
  const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor("#" + n.slice(0, 6));
  };
  useEffect(() => {
    randomHexColor();
  }, []);
  return (
    <>
      <div className={`avatar ${!profile_picture && "placeholder"} ${style}`}>
        <div className={`${size} rounded-full bg-secondary dark:bg-accent`}>
          {profile_picture ? (
            <img src={profile_picture} alt="profile picture" />
          ) : (
            <span className="text-3xl text-black dark:text-white/90">AI</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Avatar;
