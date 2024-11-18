import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ data, me, loading }) => {
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
      {!loading && (
        <>
          {data?.profile_picture ? (
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={data?.profile_picture} alt="profile picture" />
              </div>
            </div>
          ) : (
            <div className="avatar placeholder">
              <div
                style={{ backgroundColor: color }}
                className="text-neutral-content w-14 rounded-full"
              >
                <span className="text-2xl text-black dark:text-white/90">
                  {avatarPlacholder}
                </span>
              </div>
            </div>
          )}
          <div className="card-body p-2 flex">
            <Link
              to={`/profile/${data?.id}`}
              className="text-lg font-bold text-black dark:text-white/90"
            >
              {data?.username}
            </Link>
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
        </>
      )}
      {loading && (
        <div className="flex items-center gap-4 w-full">
          <div className="avatar placeholder">
            <div className="skeleton w-14 h-14 rounded-full"></div>
          </div>
          <div className="card-body p-2 flex flex-col gap-2">
            <div className="skeleton h-5 w-32"></div>
            <div className="skeleton h-4 w-24"></div>
            <div className="skeleton h-8 w-20"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
