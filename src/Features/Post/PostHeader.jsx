import React, { useEffect } from "react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

const PostHeader = ({ userId, profileImage, username }) => {
  return (
    <header className=" border-b border-base-300 px-4 py-3">
      <section className="flex justify-between items-center">
        <section className="flex items-center">
          <Link to={`/profile/${userId}`}>
            <img src={profileImage} alt="" className="rounded-full w-[50px]" />
          </Link>
          <Link to={`/profile/${userId}`} className="ms-2">
            <p>{username}</p>
          </Link>
        </section>
        <IoMdMore size={30} role="button" />
      </section>
    </header>
  );
};

export default PostHeader;
