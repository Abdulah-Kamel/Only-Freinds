import React from "react";

const PostHeader = ({ profileImage, username }) => {
  return (
    <header className="mb-4">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="User avatar"
          className="rounded-full w-[50px]"
        />
        <p className="ms-2">{username}</p>
      </div>
    </header>
  );
};

export default PostHeader;
