import React, { useEffect, useState } from "react";

const ProfileCard = ({ data, me }) => {
  const avatarPlacholder =
    (data?.first_name?.slice(0, 1) || "") +
    (data?.last_name?.slice(0, 1) || "");
  const [color, setColor] = useState("");
  const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor("#" + n.slice(0, 6));
  };
  useEffect(() => {
    randomHexColor();
  }, []);
  return (
    <div className="card card-side bg-base-100flex items-center">
      {data?.profile_picture ? (
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={data?.profile_picture} alt="profile picture" />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div
            style={{ backgroundColor: color }}
            className="text-neutral-content w-20 rounded-full"
          >
            <span className="text-4xl text-black dark:text-white/90">
              {avatarPlacholder}
            </span>
          </div>
        </div>
      )}
      <div className="card-body p-2 flex">
        <h2 className="text-xl font-bold text-black dark:text-white/90">
          {data?.username}
        </h2>
        <p>{data?.first_name + " " + data?.last_name}</p>
        {!me ? (
          data?.is_following !== true && (
            <button className="btn btn-accent h-auto min-h-0 py-1">
              Folow
            </button>
          )
        ) : (
          <button className="btn btn-primary h-auto min-h-0 py-1">
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
