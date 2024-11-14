import React from "react";

const Avatar = ({ userImage }) => {
  return (
    <div className="avatar">
      <div className="w-32 md:w-48 rounded-full">
        <img src={userImage} />
      </div>
    </div>
  );
};

export default Avatar;
