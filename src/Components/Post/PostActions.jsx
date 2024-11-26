import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import ActionIcon from "./ActionIcon";
import { PiShareFat } from "react-icons/pi";

const PostActions = ({ style }) => {
  const [liked, setLiked] = useState(false);

  return (
    <footer className={`flex justify-between items-center ${style}`}>
      <ActionIcon
        icon={FaRegHeart}
        number={"1200"}
        type="likes"
        onclike={() => {
          setLiked(!liked);
        }}
        LikedIcon={FaHeart}
        Liked={liked}
      />

      <ActionIcon icon={FaRegComment} number={"25"} type="comments" />
      <ActionIcon icon={PiShareFat} number={"50"} type="shares" />
    </footer>
  );
};

export default PostActions;
