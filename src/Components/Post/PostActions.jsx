import React from "react";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import ActionIcon from "./ActionIcon";
const PostActions = () => {
  return (
    <footer className="flex justify-between items-center mt-4">
      <ActionIcon icon={GoHeart} />
      <ActionIcon icon={FaRegComment} />
      <ActionIcon icon={BsSend} />
      <ActionIcon icon={CiBookmark} />
    </footer>
  );
};

export default PostActions;
