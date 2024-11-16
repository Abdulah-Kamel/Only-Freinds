import React, { useEffect, useState } from "react";

const Avatar = ({ userData, baseUrl }) => {
  const avatarPlacholder =
    (userData?.first_name?.slice(0, 1) || "") +
    (userData?.last_name?.slice(0, 1) || "");
  const [color, setColor] = useState("");
  /*************  ✨ Codeium Command ⭐  *************/

  const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor("#" + n.slice(0, 6));
  };
  /******  d2a8dc1b-f76d-4595-b096-ab8b145f705b  *******/
  useEffect(() => {
    randomHexColor();
    console.log(userData);
  }, []);
  return (
    <>
      {/* {userData?.profile_picture ? (
        <div className="avatar">
          <div className="w-32 md:w-36 rounded-full">
            <img src={userData?.profile_picture} alt="profile picture" />
          </div>
        </div>
      ) : ( */}
        <div className="avatar placeholder">
          <div
            style={{ backgroundColor: color }}
            className={`text-neutral-content w-32 md:w-36 rounded-full`}
          >
            <span className="text-4xl text-black dark:text-white/90">
              {avatarPlacholder}
            </span>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default Avatar;
